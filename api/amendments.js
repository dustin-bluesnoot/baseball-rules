const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

// Public endpoint — no auth required. Returns current amendments overlay.
module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');
  try {
    const amendments = await redis.get('amendments') || {};
    const count = Object.keys(amendments).length;
    console.log(`[amendments] returning ${count} division(s) with amendments`);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json(amendments);
  } catch (err) {
    console.error('[amendments] Redis error:', err.message);
    return res.status(200).json({});
  }
};
