/**
 * audit-log.js
 * GET /.netlify/functions/audit-log
 *
 * Returns the last 50 commits that touched amendments.json,
 * providing a full audit trail of CMS edits.
 *
 * Requires Netlify Identity JWT in Authorization header.
 * Requires GITHUB_TOKEN env var.
 */

const { Octokit } = require('@octokit/rest');

const OWNER = 'dustin-bluesnoot';
const REPO  = 'baseball-rules';
const PATH  = 'amendments.json';

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const auth = event.headers['authorization'] || '';
  if (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data: commits } = await octokit.rest.repos.listCommits({
    owner: OWNER, repo: REPO, path: PATH, per_page: 50,
  });

  const log = commits.map(c => ({
    sha:     c.sha.slice(0, 7),
    message: c.commit.message,
    author:  c.commit.author.name,
    email:   c.commit.author.email,
    date:    c.commit.author.date,
    url:     c.html_url,
  }));

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(log),
  };
};
