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
      // Unknown division — show error on landing
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
      <a class="division-card" href="?division=${key}"
         style="--division-color: ${div.color}">
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

    // Set division CSS var
    document.documentElement.style.setProperty('--division-color', divisionData.color);

    // Build overrides lookup: ruleId → override
    const overrideMap = divisionData.overrides || {};
    const additionsMap = buildAdditionsMap();

    // Sidebar + main
    const sidebar = buildSidebar(overrideMap, additionsMap);
    const main    = buildMain(overrideMap, additionsMap);

    document.getElementById('app').innerHTML = `
      <div id="sidebar">${sidebar}</div>
      <main id="main">${main}</main>
    `;

    document.title = `${divisionData.badge} Rulebook 2026 — TABA`;

    attachBehaviours();
  }

  // Build a map: insertAfterRule → [additions]
  function buildAdditionsMap() {
    const map = {};
    (divisionData.additions || []).forEach(a => {
      if (!map[a.insertAfterRule]) map[a.insertAfterRule] = [];
      map[a.insertAfterRule].push(a);
    });
    return map;
  }

  // ─── Sidebar ──────────────────────────────────────────────
  function buildSidebar(overrideMap, additionsMap) {
    const rules = window.BCMinorRules;

    const ruleLinks = rules.map(rule => {
      const hasOverride = rule.sections && rule.sections.some(s => overrideMap[s.id]);
      const hasAddition = additionsMap[rule.id] && additionsMap[rule.id].length > 0;
      const flagged = hasOverride || hasAddition;

      const subLinks = rule.sections ? rule.sections.map(s => {
        const so = overrideMap[s.id];
        return `<a href="#${s.id.replace('.','-')}" class="${so ? 'has-override' : ''}">${s.id} ${s.title}</a>`;
      }).join('') : '';

      // additions for this rule
      const addLinks = (additionsMap[rule.id] || []).map(a =>
        `<a href="#${a.id}" class="has-override">✦ ${a.title}</a>`
      ).join('');

      if (subLinks || addLinks) {
        return `
          <div class="nav-item ${flagged ? 'has-override' : ''}" data-nav-rule="${rule.id}">
            <button class="nav-trigger">
              <span>Rule ${rule.id}: ${rule.title}</span>
              ${flagged ? '<span class="override-dot" title="Division rule applies"></span>' : ''}
              <span class="chev">▶</span>
            </button>
            <div class="nav-sub">
              ${subLinks}
              ${addLinks}
            </div>
          </div>`;
      } else {
        return `
          <div class="nav-plain ${flagged ? 'has-override' : ''}">
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
        <div class="nav-group-label">BC Minor Baseball — Rules 1–35</div>
        ${ruleLinks}
      </nav>
    `;
  }

  // ─── Main content ─────────────────────────────────────────
  function buildMain(overrideMap, additionsMap) {
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

    // Legend
    const legend = `
      <div class="callout" style="margin-bottom:2rem;">
        <p><strong>How to read this rulebook:</strong></p>
        <ul class="rl">
          <li>All BC Minor Baseball rules are shown in full below, in order (Rules 1–35).</li>
          <li>Rules that have a <strong style="color:var(--division-color)">&#9679; coloured dot</strong> in the sidebar or a
            <span style="display:inline-block;background:var(--division-color);color:#fff;font-family:'DM Mono',monospace;font-size:.6rem;padding:.08rem .35rem;border-radius:3px;vertical-align:middle;">${divisionData.badge}</span>
            panel have a local TABA rule that differs from or adds to BC Minor. Click the panel header to expand it.</li>
          <li>Rules without a panel apply to ${divisionData.badge} exactly as written by BC Minor Baseball.</li>
        </ul>
      </div>
    `;

    const ruleBlocks = rules.map(rule => {
      const sectionHtml = rule.sections ? rule.sections.map(s => {
        const override = overrideMap[s.id];
        return buildSection(s, override);
      }).join('') : (rule.content || '');

      const ruleAdditions = (additionsMap[rule.id] || []).map(a => buildAddition(a)).join('');

      const hasOverride = rule.sections && rule.sections.some(s => overrideMap[s.id]);
      const hasAddition = (additionsMap[rule.id] || []).length > 0;
      const flagged = hasOverride || hasAddition;

      return `
        <div class="rule-section ${flagged ? 'has-override' : ''}" id="rule-${rule.id}">
          <button class="rule-toggle" onclick="Rulebook.toggleRule(this)">
            <span class="rule-num">Rule ${rule.id}</span>
            <span class="rule-title">${rule.title}</span>
            ${flagged ? `<span class="rule-override-dot" title="${divisionData.badge} local rule applies"></span>` : ''}
            <span class="rule-chev">▶</span>
          </button>
          <div class="rule-body">
            ${sectionHtml}
          </div>
        </div>
        ${ruleAdditions}
      `;
    }).join('');

    const footer = `
      <div class="attr-bar">
        <span class="attr-lock">🔒 Internal — TABA Use Only</span>
        <p style="margin-top:.4rem;">
          <strong>BC Minor Baseball Association playing rules reproduced for internal reference.</strong>
          The authoritative source is the BC Minor Baseball rulebook at
          <a href="http://www.bcminorbaseball.org">bcminorbaseball.org</a>.
          ${divisionData.badge} local rules are TABA additions and do not supersede BC Minor rules
          except where explicitly stated.
        </p>
      </div>
      <footer>
        <p>Tsawwassen Baseball Association · <a href="https://www.tsawwassenbaseball.ca">tsawwassenbaseball.ca</a></p>
        <p style="margin-top:.25rem;">BC Minor Baseball Association · <a href="http://www.bcminorbaseball.org">bcminorbaseball.org</a> · Providing Canadian Youth Baseball Programs Since 1963</p>
      </footer>
    `;

    return cover + legend + ruleBlocks + footer;
  }

  // Build a single BC Minor sub-section + optional division overlay
  function buildSection(section, override) {
    const anchorId = section.id.replace('.', '-');

    const overridePanel = override ? buildOverridePanel(override, section.id) : '';

    return `
      <div class="sub-rule ${override ? 'has-override' : ''}" id="${anchorId}">
        <div class="sub-rule-title">${section.id} ${section.title}</div>
        ${section.content || ''}
        ${overridePanel}
      </div>
    `;
  }

  // Build the collapsible division override panel
  function buildOverridePanel(override, ruleId) {
    const type = override.type || 'differs';

    let body = '';
    if (type === 'differs') {
      body = `
        <div class="diff-grid">
          <div class="diff-col">
            <div class="diff-col-label">⚾ BC Minor (Rule ${ruleId})</div>
            <p>${override.bcMinorSummary || ''}</p>
          </div>
          <div class="diff-col">
            <div class="diff-col-label">✦ ${divisionData.badge} Local Rule</div>
            ${override.content || `<p>${override.tabaSummary || ''}</p>`}
          </div>
        </div>`;
    } else if (type === 'adds') {
      body = `<div class="panel-adds">${override.content || ''}</div>`;
    } else if (type === 'removes') {
      body = `<div class="panel-removes">${override.content || ''}</div>`;
    }

    const icon = type === 'differs' ? '⚡' : type === 'adds' ? '✦' : '✕';
    const label = override.label || `${divisionData.badge} — ${type}`;

    return `
      <div class="division-panel" style="--division-color:${divisionData.color}">
        <div class="division-panel-header" onclick="Rulebook.togglePanel(this)">
          <span class="dp-label">${icon} ${label}</span>
          <span class="dp-chev">▶</span>
        </div>
        <div class="division-panel-body">${body}</div>
      </div>`;
  }

  // Build a TABA-only addition rule block (inserted after a BC Minor rule)
  function buildAddition(addition) {
    return `
      <div class="taba-rule-section" id="${addition.id}" style="--division-color:${divisionData.color}">
        <button class="taba-rule-toggle" onclick="Rulebook.toggleRule(this, true)">
          <span class="taba-rule-num">${addition.badge || divisionData.badge}</span>
          <span class="taba-rule-title">${addition.title}</span>
          <span class="taba-rule-chev">▶</span>
        </button>
        <div class="taba-rule-body">
          ${addition.content || ''}
        </div>
      </div>`;
  }

  // ─── Behaviours ───────────────────────────────────────────
  function attachBehaviours() {
    // Sidebar accordion
    document.querySelectorAll('.nav-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('n-open');
      });
    });

    // Highlight active section on scroll
    const allSections = document.querySelectorAll('[id]');
    const navLinks    = document.querySelectorAll('nav a[href^="#"]');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        navLinks.forEach(a => {
          const match = a.getAttribute('href') === '#' + id;
          a.style.color = match ? 'var(--gold-light)' : '';
        });
        // Auto-open parent nav group
        const parentRule = e.target.closest('[data-nav-rule]') ||
          document.querySelector(`[data-nav-rule="${id.replace('rule-','')}"]`);
        if (parentRule) parentRule.classList.add('n-open');
      });
    }, { rootMargin: '-10% 0px -75% 0px' });

    allSections.forEach(el => obs.observe(el));
  }

  // ─── Public toggle helpers (called by inline onclick) ─────
  function toggleRule(btn, isTaba) {
    const section = btn.parentElement;
    section.classList.toggle('r-open');
  }

  function togglePanel(header) {
    header.parentElement.classList.toggle('dp-open');
  }

  // ─── Public API ───────────────────────────────────────────
  return { init, toggleRule, togglePanel };

})();
