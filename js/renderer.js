/**
 * renderer.js
 * ───────────
 * Reads BCMinorRules + TABADivisions and builds the UI.
 * Never edit this file for content changes — edit the data files instead.
 */

window.Rulebook = (() => {

  // ─── State ───────────────────────────────────────────────
  let currentDivision = null;
  let divisionData    = null;

  // ─── Entry point ─────────────────────────────────────────
  function init(divisionParam) {
    const key = divisionParam ? divisionParam.toLowerCase() : null;
    if (key && window.TABADivisions[key]) {
      currentDivision = key;
      divisionData    = window.TABADivisions[key];
      renderRulebook();
    } else if (key) {
      renderLanding(`Unknown division "${key}". Please choose from the list below.`);
    } else {
      renderLanding();
    }
  }

  // ─── Landing page ─────────────────────────────────────────
  function renderLanding(errorMsg) {
    const app = document.getElementById('app');
    const divisions = window.TABADivisions;

    const cards = Object.entries(divisions).map(([key, div]) => `
      <a class="division-card" href="?division=${key}" style="--division-color:${div.color}">
        <span class="dc-badge" style="background:${div.color}">${div.badge}</span>
        <span class="dc-name">${div.name}</span>
        <span class="dc-desc">${div.description || ''}</span>
      </a>
    `).join('');

    app.innerHTML = `
      <div class="landing">
        <div class="landing-logo">⚾</div>
        <h1>TABA Rulebook 2026</h1>
        <p class="landing-sub">Tsawwassen Baseball Association</p>
        ${errorMsg ? `<p style="color:#ff8080;font-size:.85rem;margin-bottom:1.5rem;">${errorMsg}</p>` : ''}
        <div class="division-grid">${cards}</div>
        <p class="landing-footer">
          BC Minor Baseball Association · bcminorbaseball.org<br>
          Providing Canadian Youth Baseball Programs Since 1963
        </p>
      </div>
    `;
    document.title = 'TABA Rulebook 2026';
  }

  // ─── Rulebook ─────────────────────────────────────────────
  function renderRulebook() {
    document.body.classList.add('rulebook-mode');
    document.documentElement.style.setProperty('--division-color', divisionData.color);

    const overrideMap  = divisionData.overrides || {};
    const additionsMap = buildAdditionsMap();
    // Flat list of all additions in order
    const allAdditions = (divisionData.additions || []);

    const sidebarHTML = buildSidebar(overrideMap, allAdditions);
    const mainHTML    = buildMain(overrideMap, additionsMap, allAdditions);

    // Replace #app with sidebar + main as direct body children
    const app = document.getElementById('app');
    const sidebarEl = document.createElement('div');
    sidebarEl.id = 'sidebar';
    sidebarEl.innerHTML = sidebarHTML;
    const mainEl = document.createElement('main');
    mainEl.id = 'main';
    mainEl.innerHTML = mainHTML;
    app.replaceWith(sidebarEl, mainEl);

    document.title = `${divisionData.badge} Rulebook 2026 — TABA`;
    attachBehaviours();
  }

  // Build insertAfterRule → [additions] lookup
  function buildAdditionsMap() {
    const map = {};
    (divisionData.additions || []).forEach(a => {
      if (!map[a.insertAfterRule]) map[a.insertAfterRule] = [];
      map[a.insertAfterRule].push(a);
    });
    return map;
  }

  // ─── Sidebar ──────────────────────────────────────────────
  function buildSidebar(overrideMap, allAdditions) {
    const rules = window.BCMinorRules;

    // Part 1 — TABA local rule links
    const tabaLinks = allAdditions.map(a =>
      `<a href="#${a.id}" class="taba-nav-link">✦ ${a.title}</a>`
    ).join('');

    // Part 2 — BC Minor rule links
    const ruleLinks = rules.map(rule => {
      const hasOverride = rule.sections && rule.sections.some(s => overrideMap[s.id]);
      const flagged = hasOverride;

      const subLinks = rule.sections ? rule.sections.map(s => {
        const so = overrideMap[s.id];
        return `<a href="#${s.id.replace('.','-')}" class="${so ? 'has-override' : ''}">${s.id} ${s.title}</a>`;
      }).join('') : '';

      if (subLinks) {
        return `
          <div class="nav-item ${flagged ? 'has-override' : ''}" data-nav-rule="${rule.id}">
            <button class="nav-trigger">
              <span>Rule ${rule.id}: ${rule.title}</span>
              ${flagged ? `<span class="override-dot"></span>` : ''}
              <span class="chev">▶</span>
            </button>
            <div class="nav-sub">${subLinks}</div>
          </div>`;
      } else {
        return `
          <div class="nav-plain">
            <a href="#rule-${rule.id}" class="${flagged ? 'has-override' : ''}">
              Rule ${rule.id}: ${rule.title}
            </a>
          </div>`;
      }
    }).join('');

    return `
      <div class="sb-brand">
        <span class="sb-logo">⚾</span>
        <h1>TABA Rulebook 2026</h1>
        <a class="sb-division-badge" href="." title="Change division">
          ${divisionData.badge} &#8250;
        </a>
      </div>
      <nav>
        <div class="nav-group-label taba-group-label">${divisionData.badge} — Local Rules</div>
        <div class="taba-nav-group">
          ${tabaLinks}
        </div>
        <div class="nav-group-label" style="margin-top:.6rem;">BC Minor Baseball — Rules 1–35</div>
        ${ruleLinks}
      </nav>
    `;
  }

  // ─── Main content ─────────────────────────────────────────
  function buildMain(overrideMap, additionsMap, allAdditions) {
    const rules = window.BCMinorRules;

    const cover = `
      <div class="cover">
        <div class="cover-eyebrow">Tsawwassen Baseball Association · 2026 Season</div>
        <h1>BC Minor Baseball<br>Playing Rules</h1>
        <p class="cover-sub">With ${divisionData.name} local rule overlays</p>
        <div class="cover-pills">
          <span class="cover-pill division">${divisionData.badge}</span>
          <span class="cover-pill">bcminorbaseball.org</span>
          <span class="cover-pill">Rules Co-Chairs: Ryan Hall · Erik Hope</span>
        </div>
      </div>
    `;

    const legend = `
      <div class="callout" style="margin-bottom:1.5rem;">
        <p><strong>How to read this rulebook:</strong></p>
        <ul class="rl">
          <li><strong>Part 1</strong> contains all <span style="display:inline-block;background:var(--division-color);color:#fff;font-family:'DM Mono',monospace;font-size:.6rem;padding:.08rem .4rem;border-radius:3px;vertical-align:middle;">${divisionData.badge}</span> local rules specific to TABA — rules that exist outside of or in addition to BC Minor.</li>
          <li><strong>Part 2</strong> contains the complete BC Minor Baseball rules (Rules 1–35). Where TABA differs from BC Minor, the affected sub-rule is <span style="background:#fff3cd;border-left:3px solid var(--division-color);display:inline-block;padding:.05rem .35rem;font-size:.85em;">highlighted in amber</span> with a panel showing the difference.</li>
        </ul>
      </div>
    `;

    // ── PART 1: TABA local rules ──
    const tabaSection = allAdditions.map(a => buildAddition(a)).join('');

    // ── PART 2: BC Minor rules with inline diffs ──
    const ruleBlocks = rules.map(rule => {
      const sectionHtml = rule.sections
        ? rule.sections.map(s => buildSection(s, overrideMap[s.id])).join('')
        : (rule.content || '');

      const hasOverride = rule.sections && rule.sections.some(s => overrideMap[s.id]);

      return `
        <div class="rule-section ${hasOverride ? 'has-override' : ''}" id="rule-${rule.id}">
          <button class="rule-toggle" onclick="Rulebook.toggleRule(this)">
            <span class="rule-num">Rule ${rule.id}</span>
            <span class="rule-title">${rule.title}</span>
            ${hasOverride ? `<span class="rule-override-flag">${divisionData.badge} differs</span>` : ''}
            <span class="rule-chev">▶</span>
          </button>
          <div class="rule-body">${sectionHtml}</div>
        </div>`;
    }).join('');

    const footer = `
      <div class="attr-bar">
        <span class="attr-lock">🔒 Internal — TABA Use Only</span>
        <p style="margin-top:.4rem;">
          <strong>BC Minor Baseball Association playing rules reproduced for internal reference.</strong>
          Authoritative source: <a href="http://www.bcminorbaseball.org">bcminorbaseball.org</a>.
          ${divisionData.badge} local rules are TABA additions and do not supersede BC Minor rules except where explicitly stated.
        </p>
      </div>
      <footer>
        <p>Tsawwassen Baseball Association · <a href="https://www.tsawwassenbaseball.ca">tsawwassenbaseball.ca</a></p>
        <p style="margin-top:.25rem;">BC Minor Baseball Association · <a href="http://www.bcminorbaseball.org">bcminorbaseball.org</a> · Providing Canadian Youth Baseball Programs Since 1963</p>
      </footer>
    `;

    return (
      cover +
      legend +
      `<div class="part-divider" id="taba-rules-section">
        <span class="part-badge" style="background:var(--division-color)">PART 1</span>
        <h2>${divisionData.badge} — Local Rules</h2>
      </div>` +
      tabaSection +
      `<div class="part-divider" id="bcminor-rules-section">
        <span class="part-badge">PART 2</span>
        <h2>BC Minor Baseball — Rules 1–35</h2>
      </div>` +
      ruleBlocks +
      footer
    );
  }

  // ── Build a BC Minor sub-section + optional inline override ──
  function buildSection(section, override) {
    const anchorId = section.id.replace('.', '-');
    const overridePanel = override ? buildOverridePanel(override, section.id) : '';

    return `
      <div class="sub-rule ${override ? 'has-override' : ''}" id="${anchorId}">
        <div class="sub-rule-title">
          ${section.id} ${section.title}
          ${override ? `<span class="sub-rule-override-tag">⚡ ${divisionData.badge} differs</span>` : ''}
        </div>
        <div class="sub-rule-content">${section.content || ''}</div>
        ${overridePanel}
      </div>
    `;
  }

  // ── Build the inline override panel (auto-open) ──
  function buildOverridePanel(override, ruleId) {
    const type  = override.type || 'differs';
    const icon  = type === 'differs' ? '⚡' : type === 'adds' ? '✦' : '✕';
    const label = override.label || `${divisionData.badge} — ${type}`;

    let body = '';
    if (type === 'differs') {
      body = `
        <div class="diff-grid">
          <div class="diff-col">
            <div class="diff-col-label">⚾ BC Minor says (Rule ${ruleId})</div>
            <p>${override.bcMinorSummary || ''}</p>
          </div>
          <div class="diff-col">
            <div class="diff-col-label">✦ ${divisionData.badge} local rule</div>
            ${override.content || `<p>${override.tabaSummary || ''}</p>`}
          </div>
        </div>`;
    } else if (type === 'adds') {
      body = `<div class="panel-adds">${override.content || ''}</div>`;
    } else {
      body = `<div class="panel-removes">${override.content || ''}</div>`;
    }

    // dp-open by default so it's visible without clicking
    return `
      <div class="division-panel dp-open" style="--division-color:${divisionData.color}">
        <div class="division-panel-header" onclick="Rulebook.togglePanel(this)">
          <span class="dp-label">${icon} ${label}</span>
          <span class="dp-chev">▼</span>
        </div>
        <div class="division-panel-body">${body}</div>
      </div>`;
  }

  // ── Build a TABA-only addition block (used in Part 1) ──
  function buildAddition(addition) {
    return `
      <div class="taba-rule-section r-open" id="${addition.id}" style="--division-color:${divisionData.color}">
        <button class="taba-rule-toggle" onclick="Rulebook.toggleRule(this, true)">
          <span class="taba-rule-num">${addition.badge || divisionData.badge}</span>
          <span class="taba-rule-title">${addition.title}</span>
          <span class="taba-rule-chev">▼</span>
        </button>
        <div class="taba-rule-body">${addition.content || ''}</div>
      </div>`;
  }

  // ─── Behaviours ───────────────────────────────────────────
  function attachBehaviours() {
    // Sidebar accordion
    document.querySelectorAll('.nav-trigger').forEach(btn => {
      btn.addEventListener('click', () => btn.parentElement.classList.toggle('n-open'));
    });

    // Scroll spy — highlight active nav link
    const allSections = document.querySelectorAll('[id]');
    const navLinks    = document.querySelectorAll('nav a[href^="#"]');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + id ? 'var(--gold-light)' : '';
        });
        const parentGroup = document.querySelector(`[data-nav-rule="${id.replace('rule-','')}"]`);
        if (parentGroup) parentGroup.classList.add('n-open');
      });
    }, { rootMargin: '-10% 0px -75% 0px' });

    allSections.forEach(el => obs.observe(el));
  }

  // ─── Public toggle helpers ────────────────────────────────
  function toggleRule(btn) {
    btn.parentElement.classList.toggle('r-open');
    // flip chevron text
    const chev = btn.querySelector('.rule-chev, .taba-rule-chev');
    if (chev) chev.textContent = btn.parentElement.classList.contains('r-open') ? '▼' : '▶';
  }

  function togglePanel(header) {
    const panel = header.parentElement;
    panel.classList.toggle('dp-open');
    const chev = header.querySelector('.dp-chev');
    if (chev) chev.textContent = panel.classList.contains('dp-open') ? '▼' : '▶';
  }

  return { init, toggleRule, togglePanel };

})();
