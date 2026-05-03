const { Octokit } = require('@octokit/rest');

const OWNER = 'dustin-bluesnoot';
const REPO  = 'baseball-rules';
const PATH  = 'amendments.json';

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end('Method Not Allowed');
  }

  const auth = req.headers['authorization'] || '';
  if (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data: commits } = await octokit.rest.repos.listCommits({
    owner: OWNER, repo: REPO, path: PATH, per_page: 50,
  });

  const log = commits
    .filter(c => !c.commit.message.startsWith('CMS: meta'))
    .map(c => ({
      sha:     c.sha.slice(0, 7),
      message: c.commit.message,
      author:  c.commit.author.name,
      email:   c.commit.author.email,
      date:    c.commit.author.date,
      url:     c.html_url,
    }));

  return res.status(200).json(log);
};
