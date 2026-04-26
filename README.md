# TABA Rulebook — rules.tsawwassenbaseball.ca

Hosted on GitHub Pages with a custom domain. One codebase, all divisions.

---

## File Structure

```
/
  index.html               ← The entire app. Never touch this.
  CNAME                    ← Custom domain config. Never touch this.
  .nojekyll                ← Tells GitHub Pages to skip Jekyll. Never touch this.
  css/
    styles.css             ← All visual styles. Touch only for design changes.
  js/
    bc-minor-rules.js      ← ALL BC Minor rules as structured data.
                             Edit only when BCMBA issues rule changes.
    taba-divisions.js      ← TABA overrides per division.
                             Edit this to add/update any division.
    renderer.js            ← Reads the data files and builds the UI.
                             Never touch this.
```

---

## How URLs Work

| URL | Result |
|-----|--------|
| `rules.tsawwassenbaseball.ca` | Landing page — user picks their division |
| `rules.tsawwassenbaseball.ca?division=11u` | Goes directly to 11U rulebook |
| `rules.tsawwassenbaseball.ca?division=18u` | Goes directly to 18U rulebook |

Link from your website to the `?division=` URL for each age group's page. Parents clicking from the 11U page never see the landing screen.

---

## Adding a New Division (e.g. 18U)

Open **`js/taba-divisions.js`** and add a new entry to `window.TABADivisions`:

```js
"18u": {
  name: "18U — Midget",
  badge: "18U",
  color: "#8B0000",         // sidebar accent colour for this division

  // Rules where TABA differs from BC Minor
  overrides: {
    "26.08": {
      type: "differs",
      summary: "18U uses a 6-run limit per inning, not 4.",
      content: `<p>Your HTML content explaining the 18U rule here.</p>`
    }
  },

  // Rules that exist only in TABA (no BC Minor equivalent)
  // These are injected into the rulebook at the position you specify
  additions: [
    {
      id: "18u-draft",
      insertAfterRule: "9",   // inserts after BC Minor Rule 9
      title: "TABA 18U Draft Process",
      content: `<p>Your HTML content here.</p>`
    }
  ]
}
```

That's it. The renderer handles everything else automatically — sidebar links, diff highlighting, badges, collapsible panels.

---

## Updating a BC Minor Rule

Open **`js/bc-minor-rules.js`**.

Each rule follows this structure:

```js
{
  id: "26",
  title: "General Playing Rules",
  sections: [
    {
      id: "26.08",
      title: "Run Limits",
      content: `<p>Your HTML content here.</p>`
    }
  ]
}
```

Find the rule by `id`, update the `content` field. No other files need to change.

---

## Division Override Types

| `type` value | What it renders |
|---|---|
| `"differs"` | Gold ⚡ diff block — shows BC Minor vs TABA side by side |
| `"adds"` | Green ✦ block — TABA adds something BC Minor doesn't have |
| `"removes"` | Red ✕ block — TABA removes or restricts something |

---

## Deployment

Push to the `main` branch of your GitHub repo. GitHub Pages auto-deploys.

The `CNAME` file contains `rules.tsawwassenbaseball.ca`. In your DNS provider:
- Add a `CNAME` record pointing `rules.tsawwassenbaseball.ca` → `[your-github-username].github.io`

---

## Quick Checklist for a New Season

1. Open `js/bc-minor-rules.js` — update any rules BCMBA changed
2. Open `js/taba-divisions.js` — update any TABA local rule changes per division
3. Push to `main`
4. Done
