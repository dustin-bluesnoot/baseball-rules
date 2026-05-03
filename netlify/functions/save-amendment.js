/**
 * save-amendment.js
 * POST /.netlify/functions/save-amendment
 *
 * Merges field changes for a specific rule section into amendments.json
 * and commits the result to the main branch via GitHub API.
 *
 * Requires Netlify Identity JWT in Authorization header.
 * Requires GITHUB_TOKEN env var (fine-grained PAT, Contents: read+write).
 */

const { Octokit } = require('@octokit/rest');

const OWNER  = 'dustin-bluesnoot';
const REPO   = 'baseball-rules';
const PATH   = 'amendments.json';
const BRANCH = 'main';

const ALLOWED_FIELDS = ['badge', 'content', 'label', 'bcMinorSummary', 'tabaSummary'];

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Netlify Identity verification — populated automatically by Netlify gateway
  const { user } = context.clientContext || {};
  if (!user) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { divisionKey, sectionType, sectionId, changes } = body;

  if (!divisionKey || !sectionType || !sectionId || !changes || typeof changes !== 'object') {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  if (!['additions', 'overrides'].includes(sectionType)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid sectionType' }) };
  }

  // Whitelist editable fields
  const sanitized = {};
  for (const [field, value] of Object.entries(changes)) {
    if (ALLOWED_FIELDS.includes(field) && typeof value === 'string') {
      sanitized[field] = value;
    }
  }
  if (Object.keys(sanitized).length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'No valid fields to update' }) };
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
    // File doesn't exist yet — start fresh (no sha needed for creation)
  }

  // Deep merge
  if (!current[divisionKey])                           current[divisionKey] = {};
  if (!current[divisionKey][sectionType])              current[divisionKey][sectionType] = {};
  if (!current[divisionKey][sectionType][sectionId])   current[divisionKey][sectionType][sectionId] = {};
  Object.assign(current[divisionKey][sectionType][sectionId], sanitized);

  const changedFields = Object.keys(sanitized).join(', ');
  const message = `CMS: ${divisionKey}/${sectionId} — update ${changedFields} [${user.email}]`;

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: OWNER, repo: REPO, path: PATH, branch: BRANCH,
    message,
    content: Buffer.from(JSON.stringify(current, null, 2) + '\n').toString('base64'),
    ...(sha ? { sha } : {}),
  });

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, message }),
  };
};
