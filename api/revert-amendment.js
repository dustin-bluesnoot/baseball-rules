const { Octokit } = require('@octokit/rest');

const OWNER  = 'dustin-bluesnoot';
const REPO   = 'baseball-rules';
const PATH   = 'amendments.json';
const BRANCH = 'main';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const auth = req.headers['authorization'] || '';
  if (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { divisionKey, sectionType, sectionId } = req.body || {};
  if (!divisionKey || !sectionType || !sectionId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

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

  if (!sha) {
    return res.status(200).json({ success: true, message: 'Nothing to revert' });
  }

  // Remove the specific section's amendments
  if (current[divisionKey]?.[sectionType]?.[sectionId]) {
    delete current[divisionKey][sectionType][sectionId];
  }

  // Prune empty parent objects
  if (current[divisionKey]?.[sectionType] &&
      Object.keys(current[divisionKey][sectionType]).length === 0) {
    delete current[divisionKey][sectionType];
  }
  if (current[divisionKey] && Object.keys(current[divisionKey]).length === 0) {
    delete current[divisionKey];
  }

  const message = `CMS: Revert ${divisionKey}/${sectionId} to original [admin]`;

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: OWNER, repo: REPO, path: PATH, branch: BRANCH,
    message,
    content: Buffer.from(JSON.stringify(current, null, 2) + '\n').toString('base64'),
    sha,
  });

  return res.status(200).json({ success: true, message });
};
