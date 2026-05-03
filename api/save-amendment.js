const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

const ALLOWED_FIELDS = ['badge', 'content', 'label', 'bcMinorSummary', 'tabaSummary'];

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

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

  const amendments = await redis.get('amendments') || {};

  // Capture before values for audit log
  const existing = amendments?.[divisionKey]?.[sectionType]?.[sectionId] || {};
  const before = {};
  for (const field of Object.keys(sanitized)) {
    before[field] = existing[field] ?? null;
  }

  // Deep merge
  if (!amendments[divisionKey])                           amendments[divisionKey] = {};
  if (!amendments[divisionKey][sectionType])              amendments[divisionKey][sectionType] = {};
  if (!amendments[divisionKey][sectionType][sectionId])   amendments[divisionKey][sectionType][sectionId] = {};
  Object.assign(amendments[divisionKey][sectionType][sectionId], sanitized);

  const timestamp = new Date().toISOString();
  amendments[divisionKey][sectionType][sectionId]._meta = { updated: timestamp, author: 'admin' };

  await redis.set('amendments', amendments);

  // Prepend audit log entry
  const auditLog = await redis.get('audit_log') || [];
  auditLog.unshift({
    id:            Date.now().toString(),
    timestamp,
    action:        'update',
    divisionKey,
    sectionType,
    sectionId,
    changedFields: Object.keys(sanitized),
    before,
    after:         sanitized,
  });
  await redis.set('audit_log', auditLog.slice(0, 200));

  return res.status(200).json({ success: true });
};
