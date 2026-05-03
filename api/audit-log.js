const { kv } = require('@vercel/kv');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');

  const auth = req.headers['authorization'] || '';
  if (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const auditLog = await kv.get('audit_log') || [];
  return res.status(200).json(auditLog);
};
