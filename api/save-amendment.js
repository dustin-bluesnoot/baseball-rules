const { Octokit } = require('@octokit/rest');

const OWNER  = 'dustin-bluesnoot';
const REPO   = 'baseball-rules';
const PATH   = 'amendments.json';
const BRANCH = 'main';

const ALLOWED_FIELDS = ['badge', 'content', 'label', 'bcMinorSummary', 'tabaSummary'];

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const auth = req.headers['authorization'] || '';
  if (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { divisionKey, sectionType, sectionId, changes } = req.body || {};

  if (!divisionKey || !sectionType || !sectionId || !changes || typeof changes !== 'object') {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!['additions', 'overrides'].includes(sectionType)) {
    return res.status(400).json({ error: 'Invalid sectionType' });
  }

  // Whitelist editable fields
  const sanitized = {};
  for (const [field, value] of Object.entries(changes)) {
    if (ALLOWED_FIELDS.includes(field) && typeof value === 'string') {
      sanitized[field] = value;
    }
  }
  if (Object.keys(sanitized).length === 0) {
    return res.status(400).json({ error: 'No valid fields to update' });
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  // Read current amendments.json
  let current = {};
  let sha;
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: OWNER, repo: REPO, path: PATH, ref: BRANCH,
    });
    current = JSON.parse(Buffer.from(data.content, 'base64').toString('utf8'));
    sha = data.sha;
  } catch (err) {
    if (err.status !== 404) throw err;
  }

  // Deep merge
  if (!current[divisionKey])                           current[divisionKey] = {};
  if (!current[divisionKey][sectionType])              current[divisionKey][sectionType] = {};
  if (!current[divisionKey][sectionType][sectionId])   current[divisionKey][sectionType][sectionId] = {};
  Object.assign(current[divisionKey][sectionType][sectionId], sanitized);

  const changedFields = Object.keys(sanitized).join(', ');
  const message = `CMS: ${divisionKey}/${sectionId} — update ${changedFields} [admin]`;

  // Write 1: the content change
  const { data: write1 } = await octokit.rest.repos.createOrUpdateFileContents({
    owner: OWNER, repo: REPO, path: PATH, branch: BRANCH,
    message,
    content: Buffer.from(JSON.stringify(current, null, 2) + '\n').toString('base64'),
    ...(sha ? { sha } : {}),
  });

  // Write 2: store metadata pointing back to the content-change commit
  const amendUrl = `https://github.com/${OWNER}/${REPO}/commit/${write1.commit.sha}`;
  const updated  = write1.commit.author.date;

  const { data: fileState } = await octokit.rest.repos.getContent({
    owner: OWNER, repo: REPO, path: PATH, ref: BRANCH,
  });

  current[divisionKey][sectionType][sectionId]._meta = { updated, url: amendUrl, author: 'admin' };

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: OWNER, repo: REPO, path: PATH, branch: BRANCH,
    message: `CMS: meta — ${divisionKey}/${sectionId} [admin]`,
    content: Buffer.from(JSON.stringify(current, null, 2) + '\n').toString('base64'),
    sha: fileState.sha,
  });

  return res.status(200).json({ success: true, message });
};
