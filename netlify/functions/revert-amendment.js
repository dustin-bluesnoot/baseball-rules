/**
 * revert-amendment.js
 * POST /.netlify/functions/revert-amendment
 *
 * Removes a specific section's amendments from amendments.json,
 * restoring it to base data, and commits the result.
 *
 * Requires Netlify Identity JWT in Authorization header.
 * Requires GITHUB_TOKEN env var.
 */

const { Octokit } = require('@octokit/rest');

const OWNER  = 'dustin-bluesnoot';
const REPO   = 'baseball-rules';
const PATH   = 'amendments.json';
const BRANCH = 'main';

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const auth = event.headers['authorization'] || '';
  if (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { divisionKey, sectionType, sectionId } = body;
  if (!divisionKey || !sectionType || !sectionId) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
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

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, message }),
  };
};
