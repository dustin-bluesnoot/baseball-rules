const { Redis } = require('@upstash/redis');
const { Resend } = require('resend');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

const RECIPIENT = 'dustin@rtadvisory.ca';
const FROM      = process.env.RESEND_FROM_EMAIL || 'TABA Rulebook <backup@resend.dev>';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') return res.status(405).end('Method Not Allowed');

  // Allow Vercel cron calls (x-vercel-cron header) or manual trigger with admin password
  const isCron = req.headers['x-vercel-cron'] === '1';
  const auth   = req.headers['authorization'] || '';
  if (!isCron && (!process.env.ADMIN_PASSWORD || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const amendments = await redis.get('amendments') || {};
  const auditLog   = await redis.get('audit_log')   || [];
  const now        = new Date();
  const dateStr    = now.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Vancouver' });
  const timeStr    = now.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short', timeZone: 'America/Vancouver' });

  const divisionCount  = Object.keys(amendments).length;
  const amendmentCount = Object.values(amendments).reduce((n, div) => {
    return n + Object.keys(div.additions || {}).length + Object.keys(div.overrides || {}).length;
  }, 0);

  const recentLog = Array.isArray(auditLog) ? auditLog.slice(0, 20) : [];

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: Georgia, serif; color: #2c3e50; background: #f9f7f4; margin: 0; padding: 0; }
  .wrap { max-width: 680px; margin: 0 auto; background: #fff; }
  .header { background: #1a2942; color: #fff; padding: 28px 32px; }
  .header h1 { margin: 0 0 4px; font-size: 22px; font-weight: 700; letter-spacing: .02em; }
  .header p  { margin: 0; font-size: 13px; color: #a0b0c8; }
  .summary { padding: 20px 32px; background: #f0f2f8; border-bottom: 1px solid #dde2ef; }
  .summary-row { display: inline-block; margin-right: 32px; }
  .summary-num { font-size: 28px; font-weight: 700; color: #1a2942; }
  .summary-lbl { font-size: 11px; color: #667; text-transform: uppercase; letter-spacing: .08em; display: block; }
  .section { padding: 24px 32px; border-bottom: 1px solid #ece8e0; }
  .section h2 { font-size: 14px; text-transform: uppercase; letter-spacing: .1em; color: #667; margin: 0 0 16px; }
  .div-block { margin-bottom: 24px; }
  .div-name { font-size: 16px; font-weight: 700; color: #1a2942; margin-bottom: 10px; border-bottom: 2px solid #e8e0d0; padding-bottom: 6px; }
  .amendment { background: #fafaf8; border: 1px solid #e0d8cc; border-radius: 4px; padding: 12px 14px; margin-bottom: 10px; }
  .amend-meta { font-size: 11px; color: #888; margin-bottom: 4px; font-family: monospace; }
  .badge { display: inline-block; background: #dceeff; color: #1a4a8a; border: 1px solid #a8cbf0; font-size: 10px; font-family: monospace; padding: 1px 6px; border-radius: 2px; margin-right: 6px; vertical-align: middle; }
  .amend-title { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
  .amend-content { font-size: 12px; color: #444; border-top: 1px dashed #ddd; padding-top: 8px; margin-top: 6px; word-break: break-word; }
  .amend-content pre { background: #f4f2ef; padding: 8px 10px; border-radius: 3px; font-size: 11px; white-space: pre-wrap; overflow-wrap: anywhere; margin: 0; }
  .log-row { font-size: 12px; padding: 5px 0; border-bottom: 1px solid #f0ece6; color: #444; }
  .log-ts { font-family: monospace; color: #999; font-size: 11px; }
  .none { color: #aaa; font-style: italic; font-size: 13px; }
  .footer { padding: 18px 32px; font-size: 11px; color: #aaa; background: #f9f7f4; }
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <h1>TABA Rulebook — Nightly Backup</h1>
    <p>${dateStr} · ${timeStr}</p>
  </div>
  <div class="summary">
    <span class="summary-row"><span class="summary-num">${amendmentCount}</span><span class="summary-lbl">Active Amendments</span></span>
    <span class="summary-row"><span class="summary-num">${divisionCount}</span><span class="summary-lbl">Divisions Modified</span></span>
    <span class="summary-row"><span class="summary-num">${recentLog.length}</span><span class="summary-lbl">Recent Log Entries</span></span>
  </div>

  <div class="section">
    <h2>Active Amendments by Division</h2>
    ${divisionCount === 0
      ? '<p class="none">No amendments recorded — all rules display base content.</p>'
      : Object.entries(amendments).map(([divKey, divData]) => {
          const adds     = Object.entries(divData.additions || {});
          const overrides = Object.entries(divData.overrides  || {});
          const all = [
            ...adds.map(([id, v])      => ({ type: 'addition', id, ...v })),
            ...overrides.map(([id, v]) => ({ type: 'override', id, ...v })),
          ];
          return `<div class="div-block">
            <div class="div-name">${divKey}</div>
            ${all.map(a => `<div class="amendment">
              <div class="amend-meta">${a.type} · <code>${a.id}</code></div>
              ${a.badge ? `<div class="amend-title"><span class="badge">${escHtml(a.badge)}</span>${escHtml(a.title || '')}</div>` : (a.title ? `<div class="amend-title">${escHtml(a.title)}</div>` : '')}
              ${a.label ? `<div class="amend-meta">Label: ${escHtml(a.label)}</div>` : ''}
              ${a.bcMinorSummary ? `<div class="amend-meta">BC Minor summary: ${escHtml(a.bcMinorSummary)}</div>` : ''}
              ${a.tabaSummary ? `<div class="amend-meta">Division summary: ${escHtml(a.tabaSummary)}</div>` : ''}
              ${a.content ? `<div class="amend-content"><pre>${escHtml(a.content)}</pre></div>` : ''}
            </div>`).join('')}
          </div>`;
        }).join('')
    }
  </div>

  <div class="section">
    <h2>Recent Audit Log (last 20 entries)</h2>
    ${recentLog.length === 0
      ? '<p class="none">No audit log entries.</p>'
      : recentLog.map(entry => `<div class="log-row">
          <span class="log-ts">${escHtml(entry.timestamp || '')}</span>
          &nbsp;·&nbsp;${escHtml(entry.action || '')}
          &nbsp;·&nbsp;<code>${escHtml(entry.divisionKey || '')} / ${escHtml(entry.sectionId || '')}</code>
          ${entry.user ? `&nbsp;·&nbsp;${escHtml(entry.user)}` : ''}
        </div>`).join('')
    }
  </div>

  <div class="footer">
    Automated nightly backup from TABA Rulebook on Vercel.
    Static rule definitions are version-controlled in Git; this email captures live Redis amendments only.
  </div>
</div>
</body>
</html>`;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to:   RECIPIENT,
    subject: `TABA Rulebook Backup — ${dateStr}`,
    html,
  });

  if (error) {
    console.error('[backup-rules] Resend error:', error);
    return res.status(500).json({ error: error.message });
  }

  console.log(`[backup-rules] Sent backup to ${RECIPIENT} — ${amendmentCount} amendments`);
  return res.status(200).json({ ok: true, amendments: amendmentCount, recipient: RECIPIENT });
};

function escHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
