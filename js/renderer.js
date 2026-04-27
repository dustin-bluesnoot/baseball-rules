/**
 * renderer.js
 * ───────────
 * Reads BCMinorRules + TABADivisions and builds the UI.
 * Never edit this file for content changes — edit the data files instead.
 */

window.Rulebook = (() => {

  let currentDivision = null;
  let divisionData    = null;
  let searchIndex     = [];   // built at render time

  // ─── Entry point ─────────────────────────────────────────
  function init(divisionParam) {
    const key = divisionParam ? divisionParam.toLowerCase() : null;
    if (key && window.TABADivisions[key]) {
      currentDivision = key;
      divisionData    = window.TABADivisions[key];
      renderRulebook();
    } else if (key) {
      renderLanding(`Unknown division "${key}". Please choose below.`);
    } else {
      renderLanding();
    }
  }

  // ─── Landing ──────────────────────────────────────────────
  function renderLanding(errorMsg) {
    const app = document.getElementById('app');
    const cards = Object.entries(window.TABADivisions).map(([key, div]) => `
      <a class="division-card" href="?division=${key}" style="--division-color:${div.color}">
        <span class="dc-badge" style="background:${div.color}">${div.badge}</span>
        <span class="dc-name">${div.name}</span>
        <span class="dc-desc">${div.description || ''}</span>
      </a>`).join('');

    app.innerHTML = `
      <div class="landing">
        <div class="landing-logo">⚾</div>
        <h1>TABA Rulebook 2026</h1>
        <p class="landing-sub">Tsawwassen Baseball Association</p>
        ${errorMsg ? `<p style="color:#ff8080;font-size:.85rem;margin-bottom:1.5rem;">${errorMsg}</p>` : ''}
        <div class="division-grid">${cards}</div>
        <p class="landing-footer">BC Minor Baseball Association · bcminorbaseball.org<br>Providing Canadian Youth Baseball Programs Since 1963</p>
      </div>`;
    document.title = 'TABA Rulebook 2026';
  }

  // ─── Rulebook ─────────────────────────────────────────────
  function renderRulebook() {
    document.body.classList.add('rulebook-mode');
    document.documentElement.style.setProperty('--division-color', divisionData.color);

    const overrideMap  = divisionData.overrides || {};
    const allAdditions = divisionData.additions || [];
    const additionsMap = buildAdditionsMap(allAdditions);

    buildSearchIndex(overrideMap, allAdditions);

    const sidebarHTML = buildSidebar(overrideMap, allAdditions);
    const mainHTML    = buildMain(overrideMap, additionsMap, allAdditions);

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

  function buildAdditionsMap(allAdditions) {
    const map = {};
    allAdditions.forEach(a => {
      if (!map[a.insertAfterRule]) map[a.insertAfterRule] = [];
      map[a.insertAfterRule].push(a);
    });
    return map;
  }

  // ─── Search index ─────────────────────────────────────────
  function buildSearchIndex(overrideMap, allAdditions) {
    searchIndex = [];
    const strip = html => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    // TABA additions
    allAdditions.forEach(a => {
      searchIndex.push({
        type:    'taba',
        id:      a.id,
        label:   `${divisionData.badge}`,
        title:   a.title,
        ruleId:  null,
        text:    (a.title + ' ' + strip(a.content || '')).toLowerCase()
      });
    });

    // BC Minor rules and sections
    window.BCMinorRules.forEach(rule => {
      searchIndex.push({
        type:    'rule',
        id:      `rule-${rule.id}`,
        label:   `Rule ${rule.id}`,
        title:   rule.title,
        ruleId:  rule.id,
        text:    (`rule ${rule.id} ${rule.title}`).toLowerCase()
      });

      (rule.sections || []).forEach(s => {
        const hasOverride = !!overrideMap[s.id];
        searchIndex.push({
          type:     hasOverride ? 'differs' : 'section',
          id:       s.id.replace('.', '-'),
          label:    s.id,
          title:    s.title,
          ruleId:   rule.id,
          text:     (s.id + ' ' + s.title + ' ' + strip(s.content || '')).toLowerCase(),
          differs:  hasOverride
        });
      });
    });
  }

  // ─── Sidebar ──────────────────────────────────────────────
  function buildSidebar(overrideMap, allAdditions) {
    const tabaLinks = allAdditions.map(a =>
      `<a href="#${a.id}" class="taba-nav-link">✦ ${a.title}</a>`
    ).join('');

    const ruleLinks = window.BCMinorRules.map(rule => {
      const hasOverride = rule.sections && rule.sections.some(s => overrideMap[s.id]);
      const subLinks = (rule.sections || []).map(s => {
        const so = overrideMap[s.id];
        return `<a href="#${s.id.replace('.','-')}" class="${so ? 'has-override' : ''}">${s.id} ${s.title}</a>`;
      }).join('');

      if (subLinks) {
        return `
          <div class="nav-item ${hasOverride ? 'has-override' : ''}" data-nav-rule="${rule.id}">
            <button class="nav-trigger">
              <span>Rule ${rule.id}: ${rule.title}</span>
              ${hasOverride ? `<span class="override-dot"></span>` : ''}
              <span class="chev">▶</span>
            </button>
            <div class="nav-sub">${subLinks}</div>
          </div>`;
      }
      return `
        <div class="nav-plain">
          <a href="#rule-${rule.id}" class="${hasOverride ? 'has-override' : ''}">Rule ${rule.id}: ${rule.title}</a>
        </div>`;
    }).join('');

    return `
      <div class="sb-brand">
        <span class="sb-logo">⚾</span>
        <h1>TABA Rulebook 2026</h1>
        <a class="sb-division-badge" href="." title="Change division">${divisionData.badge} ›</a>
      </div>

      <div class="search-wrap">
        <div class="search-box">
          <span class="search-icon">⌕</span>
          <input type="text" id="rule-search" placeholder="Search rules…" autocomplete="off"
                 oninput="Rulebook.handleSearch(this.value)"
                 onkeydown="Rulebook.searchKeydown(event)">
          <button class="search-clear" id="search-clear" onclick="Rulebook.clearSearch()" title="Clear">✕</button>
        </div>
        <div id="search-results" class="search-results" style="display:none"></div>
      </div>

      <nav id="main-nav">
        <div class="nav-group-label taba-group-label">${divisionData.badge} — Local Rules</div>
        <div class="taba-nav-group">${tabaLinks}</div>
        <div class="nav-group-label" style="margin-top:.6rem;">BC Minor Baseball — Rules 1–35</div>
        ${ruleLinks}
      </nav>`;
  }

  // ─── Main content ─────────────────────────────────────────
  function buildMain(overrideMap, additionsMap, allAdditions) {
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
      </div>`;

    const legend = `
      <div class="callout" style="margin-bottom:1.5rem;">
        <p><strong>How to read this rulebook:</strong></p>
        <ul class="rl">
          <li><strong>Part 1</strong> — all <span style="display:inline-block;background:var(--division-color);color:#fff;font-family:'DM Mono',monospace;font-size:.6rem;padding:.08rem .4rem;border-radius:3px;vertical-align:middle;">${divisionData.badge}</span> local rules specific to TABA.</li>
          <li><strong>Part 2</strong> — complete BC Minor rules 1–35. Sub-rules with a <span style="background:#fffbf0;border-left:3px solid var(--division-color);display:inline-block;padding:.05rem .35rem;font-size:.85em;">amber highlight</span> have a TABA local rule that differs.</li>
        </ul>
      </div>`;

    const tabaSection = allAdditions.map(a => buildAddition(a)).join('');

    const ruleBlocks = window.BCMinorRules.map(rule => {
      const sectionHtml  = (rule.sections || []).map(s => buildSection(s, overrideMap[s.id])).join('');
      const hasOverride  = (rule.sections || []).some(s => overrideMap[s.id]);
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
      </footer>`;

    return (
      cover + legend +
      `<div class="part-divider" id="taba-rules-section">
        <span class="part-badge" style="background:var(--division-color)">PART 1</span>
        <h2>${divisionData.badge} — Local Rules</h2>
       </div>` +
      tabaSection +
      `<div class="part-divider" id="bcminor-rules-section">
        <span class="part-badge">PART 2</span>
        <h2>BC Minor Baseball — Rules 1–35</h2>
       </div>` +
      ruleBlocks + footer
    );
  }

  function buildSection(section, override) {
    const anchorId     = section.id.replace('.', '-');
    const overridePanel = override ? buildOverridePanel(override, section.id) : '';
    return `
      <div class="sub-rule ${override ? 'has-override' : ''}" id="${anchorId}">
        <div class="sub-rule-title">
          ${section.id} ${section.title}
          ${override ? `<span class="sub-rule-override-tag">⚡ ${divisionData.badge} differs</span>` : ''}
        </div>
        <div class="sub-rule-content">${section.content || ''}</div>
        ${overridePanel}
      </div>`;
  }

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
    return `
      <div class="division-panel dp-open" style="--division-color:${divisionData.color}">
        <div class="division-panel-header" onclick="Rulebook.togglePanel(this)">
          <span class="dp-label">${icon} ${label}</span>
          <span class="dp-chev">▼</span>
        </div>
        <div class="division-panel-body">${body}</div>
      </div>`;
  }

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

  // ─── TOC Navigation — expand then scroll ──────────────────
  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return;

    // If inside a collapsed BC Minor rule body, open it first
    const ruleBody = el.closest('.rule-body');
    if (ruleBody) {
      const section = ruleBody.closest('.rule-section');
      if (section && !section.classList.contains('r-open')) {
        section.classList.add('r-open');
        const chev = section.querySelector('.rule-chev');
        if (chev) chev.textContent = '▼';
      }
    }

    // If inside a collapsed TABA section, open it
    const tabaBody = el.closest('.taba-rule-body');
    if (tabaBody) {
      const section = tabaBody.closest('.taba-rule-section');
      if (section && !section.classList.contains('r-open')) {
        section.classList.add('r-open');
      }
    }

    // Wait a frame for display:none → block to take effect, then scroll
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Highlight active nav link
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('nav-active'));
    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add('nav-active');
  }

  // ─── Search ───────────────────────────────────────────────
  let searchTimeout = null;
  let selectedResult = -1;

  function handleSearch(query) {
    const q = query.trim().toLowerCase();
    const clearBtn = document.getElementById('search-clear');
    const resultsEl = document.getElementById('search-results');
    const nav = document.getElementById('main-nav');

    if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';

    if (!q) {
      resultsEl.style.display = 'none';
      nav.style.display = 'block';
      selectedResult = -1;
      return;
    }

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const words = q.split(/\s+/).filter(Boolean);

      // Score each index entry
      const scored = searchIndex
        .map(entry => {
          let score = 0;
          words.forEach(w => {
            if (entry.title.toLowerCase().includes(w)) score += 10;
            if (entry.label.toLowerCase().includes(w)) score += 5;
            if (entry.text.includes(w)) score += 1;
          });
          return { ...entry, score };
        })
        .filter(e => e.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 25);

      nav.style.display = 'none';
      selectedResult = -1;

      if (scored.length === 0) {
        resultsEl.style.display = 'block';
        resultsEl.innerHTML = `<div class="search-empty">No results for "<strong>${escHtml(query)}</strong>"</div>`;
        return;
      }

      const highlight = str => {
        let out = escHtml(str);
        words.forEach(w => {
          const re = new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
          out = out.replace(re, '<mark>$1</mark>');
        });
        return out;
      };

      const items = scored.map((e, i) => {
        const typeLabel = e.type === 'taba'
          ? `<span class="sr-type sr-type-taba">${divisionData.badge}</span>`
          : e.type === 'differs'
          ? `<span class="sr-type sr-type-differs">Differs</span>`
          : e.type === 'rule'
          ? `<span class="sr-type sr-type-rule">Rule ${e.ruleId}</span>`
          : `<span class="sr-type sr-type-section">${e.label}</span>`;

        return `
          <div class="search-result" data-id="${e.id}" data-idx="${i}"
               onclick="Rulebook.goTo('${e.id}'); Rulebook.clearSearch();">
            ${typeLabel}
            <span class="sr-title">${highlight(e.title)}</span>
          </div>`;
      }).join('');

      resultsEl.style.display = 'block';
      resultsEl.innerHTML = `
        <div class="search-count">${scored.length} result${scored.length !== 1 ? 's' : ''}</div>
        ${items}`;
    }, 150);
  }

  function searchKeydown(e) {
    const results = document.querySelectorAll('.search-result');
    if (!results.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedResult = Math.min(selectedResult + 1, results.length - 1);
      updateSelectedResult(results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedResult = Math.max(selectedResult - 1, 0);
      updateSelectedResult(results);
    } else if (e.key === 'Enter' && selectedResult >= 0) {
      e.preventDefault();
      results[selectedResult].click();
    } else if (e.key === 'Escape') {
      clearSearch();
    }
  }

  function updateSelectedResult(results) {
    results.forEach((r, i) => r.classList.toggle('sr-selected', i === selectedResult));
    if (selectedResult >= 0) results[selectedResult].scrollIntoView({ block: 'nearest' });
  }

  function clearSearch() {
    const input = document.getElementById('rule-search');
    const resultsEl = document.getElementById('search-results');
    const nav = document.getElementById('main-nav');
    const clearBtn = document.getElementById('search-clear');
    if (input) input.value = '';
    if (resultsEl) { resultsEl.style.display = 'none'; resultsEl.innerHTML = ''; }
    if (nav) nav.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
    selectedResult = -1;
  }

  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ─── Behaviours ───────────────────────────────────────────
  function attachBehaviours() {
    // Sidebar accordion toggles
    document.querySelectorAll('.nav-trigger').forEach(btn => {
      btn.addEventListener('click', () => btn.parentElement.classList.toggle('n-open'));
    });

    // ALL nav anchor links — intercept and use goTo() so collapsed sections open first
    document.querySelectorAll('nav a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        goTo(a.getAttribute('href').slice(1));
      });
    });

    // Scroll spy — highlight active nav link
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        document.querySelectorAll('nav a').forEach(a => {
          a.classList.toggle('nav-active', a.getAttribute('href') === '#' + id);
        });
        const parentGroup = document.querySelector(`[data-nav-rule="${id.replace('rule-','')}"]`);
        if (parentGroup) parentGroup.classList.add('n-open');
      });
    }, { rootMargin: '-5% 0px -80% 0px' });

    document.querySelectorAll('[id]').forEach(el => obs.observe(el));
  }

  // ─── Toggle helpers ───────────────────────────────────────
  function toggleRule(btn) {
    const section = btn.parentElement;
    section.classList.toggle('r-open');
    const chev = btn.querySelector('.rule-chev, .taba-rule-chev');
    if (chev) chev.textContent = section.classList.contains('r-open') ? '▼' : '▶';
  }

  function togglePanel(header) {
    const panel = header.parentElement;
    panel.classList.toggle('dp-open');
    const chev = header.querySelector('.dp-chev');
    if (chev) chev.textContent = panel.classList.contains('dp-open') ? '▼' : '▶';
  }

  return { init, goTo, toggleRule, togglePanel, handleSearch, searchKeydown, clearSearch };

})();
