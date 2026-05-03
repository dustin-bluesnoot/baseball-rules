const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const auth = req.headers['authorization'] || '';
  if (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { divisionKey, sectionType, sectionId } = req.body || {};
  if (!divisionKey || !sectionType || !sectionId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const amendments = await redis.get('amendments') || {};
  const existing   = amendments?.[divisionKey]?.[sectionType]?.[sectionId];

  if (existing) {
    delete amendments[divisionKey][sectionType][sectionId];
    if (Object.keys(amendments[divisionKey][sectionType]).length === 0) {
      delete amendments[divisionKey][sectionType];
    }
    if (Object.keys(amendments[divisionKey] || {}).length === 0) {
      delete amendments[divisionKey];
    }
    await redis.set('amendments', amendments);

    const timestamp = new Date().toISOString();
    const auditLog  = await redis.get('audit_log') || [];
    auditLog.unshift({
      id:            Date.now().toString(),
      timestamp,
      action:        'revert',
      divisionKey,
      sectionType,
      sectionId,
      changedFields: Object.keys(existing).filter(k => k !== '_meta'),
      before:        existing,
      after:         null,
    });
    await redis.set('audit_log', auditLog.slice(0, 200));
  }

  return res.status(200).json({ success: true });
};
