const { kv } = require('@vercel/kv');

// Public endpoint — no auth required. Returns current amendments overlay.
module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');
  try {
    const amendments = await kv.get('amendments') || {};
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(amendments);
  } catch {
    return res.status(200).json({});
  }
};
