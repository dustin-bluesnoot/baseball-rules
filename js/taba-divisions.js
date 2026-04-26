/**
 * taba-divisions.js
 * ─────────────────
 * Add or edit division overrides here.
 * The renderer reads this file — never edit renderer.js for content changes.
 *
 * OVERRIDE TYPES:
 *   "differs" → side-by-side comparison block (BC Minor left / TABA right)
 *   "adds"    → green block for something TABA adds that BC Minor doesn't have
 *   "removes" → red block for something TABA restricts beyond BC Minor
 *
 * Each override key matches a BC Minor rule `id` from bc-minor-rules.js.
 * Each addition `insertAfterRule` value matches a BC Minor rule `id`.
 */

window.TABADivisions = {

  /* ═══════════════════════════════════════════════════════════
     11U — Mosquito
     ═══════════════════════════════════════════════════════════ */
  "11u": {
    name: "11U — Mosquito",
    badge: "11U Mosquito",
    color: "#163462",
    description: "Spring & Summer 2026",

    // Rules where TABA 11U differs from or adds to BC Minor
    // Keys must match section `id` values in bc-minor-rules.js
    overrides: {

      "22.07": {
        type: "differs",
        label: "11U Time Limits — All League Games",
        bcMinorSummary: "The 2-hour no-new-inning rule applies to Provincial Championships only. No time limit is mandated for regular league play.",
        tabaSummary: "TABA applies time limits to ALL regular league games — not just Provincials.",
        content: `
          <ul class="rl">
            <li>Game length is <strong>two (2) hours</strong> from the scheduled start time.</li>
            <li>No new inning shall start later than <strong>1 hour 45 minutes</strong> after the actual game start time.</li>
            <li>If the home team is at bat when the 2-hour mark passes, the inning should be completed if possible (Umpire's decision).</li>
            <li>In the event of weather or darkness, <strong>four innings</strong> constitute a complete game.</li>
          </ul>`
      },

      "26.08": {
        type: "differs",
        label: "11U Run Limits — Early Innings Capped at 2",
        bcMinorSummary: "10U & 11U summer: 4 runs per inning for all innings, with the last at-bat being unlimited.",
        tabaSummary: "TABA caps innings 1–2 at 2 runs. Innings 3–5 follow the BC Minor 4-run cap. Inning 6 is open.",
        content: `
          <table>
            <thead><tr><th>Innings</th><th>Run Limit (TABA 11U)</th><th>Out Limit</th></tr></thead>
            <tbody>
              <tr><td class="hi">1–2</td><td>2 runs maximum <span class="sb-badge badge-taba">TABA only</span></td><td>3 outs</td></tr>
              <tr><td class="hi">3–5</td><td>4 runs maximum</td><td>3 outs</td></tr>
              <tr><td class="hi">6 (or last)</td><td>Open — no run limit</td><td>3 outs only</td></tr>
            </tbody>
          </table>
          <p class="note">The last inning is declared open by the umpire. The mercy rule may still end any half-inning.</p>`
      },

      "25.01": {
        type: "differs",
        label: "11U Fair Play — Infield/Outfield Position Limits",
        bcMinorSummary: "No player may sit out 2 consecutive innings. General minimum participation — no specific infield/outfield inning counts.",
        tabaSummary: "TABA specifies detailed position rotation: max 4 innings infield (only 1 position twice), pitcher & catcher max 3 innings each (only 2 count toward infield), max 3 innings outfield.",
        content: `
          <ul class="rl">
            <li>Players may play a maximum of <strong>four (4) innings infield</strong>, of which only <strong>one position may be played twice</strong>.</li>
            <li><strong>Pitcher and catcher</strong> may each occupy their position for a maximum of <strong>three (3) innings</strong>. Only two (2) of those innings count toward infield time.</li>
            <li>Players may play a maximum of <strong>three (3) innings per game in the outfield</strong>. All outfield positions are considered the same position.</li>
          </ul>
          <div class="callout navy">
            <p><strong>Example:</strong> If Bob plays 3 innings at catcher, only 2 count toward his infield total — so he can still play 1 inning at 1st base and 1 inning at 3rd base.</p>
          </div>`
      },

      "26.03": {
        type: "differs",
        label: "11U Headfirst Slides — Stealing Home Restriction Added",
        bcMinorSummary: "No intentional headfirst slides at 11U. No specific restriction on stealing home in any inning.",
        tabaSummary: "TABA adds: no stealing of home in innings 1 or 2. The only ways to score in those innings are a walk or a play beginning with a hit ball.",
        content: `
          <ul class="rl">
            <li>No intentional headfirst slides to any base or home plate — automatic out. (Matches BC Minor.)</li>
            <li><strong>No stealing of home in innings 1 or 2.</strong> The only ways to score in those innings: being forced home by a walk, or the continuation of a play beginning with a hit ball.</li>
            <li>Diving headfirst back to a base already legally acquired is permitted.</li>
          </ul>`
      },

      "26.14": {
        type: "adds",
        label: "11U Intentional Walks — Prohibited",
        content: `
          <div class="callout red">
            <p><strong>No intentional walks permitted in the 11U Division.</strong> Consistent with BC Minor Rule 26.14.</p>
          </div>`
      }
    },

    // Rules that TABA adds that have no BC Minor equivalent
    // insertAfterRule: BC Minor rule `id` after which this appears
    additions: [
      {
        id: "taba-11u-first-year-pitcher",
        insertAfterRule: "24",
        title: "First-Year Pitcher Rule",
        badge: "TABA 11U Only",
        content: `
          <div class="callout blue">
            <p>The <strong>first two innings of each game must be pitched by a first-year player</strong> — defined as a player who did not play in the 11U (Mosquito) Division in a previous year, and who is eligible to play one more year in 11U.</p>
          </div>
          <p>A second-year player may not pitch until inning three or later, regardless of whether the first-year pitcher has reached their pitch limit.</p>
          <p class="note">This rule has no equivalent in BC Minor Baseball rules. It is a TABA-specific development rule designed to give first-year players pitching experience.</p>`
      },
      {
        id: "taba-11u-stealing-home",
        insertAfterRule: "26",
        title: "11U Base Running — Stealing Home Restriction",
        badge: "TABA 11U Only",
        content: `
          <div class="callout red">
            <p><strong>No stealing of home is allowed in the first two (2) innings.</strong></p>
          </div>
          <p>The only two ways a player can score in innings 1 and 2:</p>
          <ul class="rl">
            <li>Being forced home by a walk, hit batter, or catcher interference.</li>
            <li>The continuation of a play that began with a hit ball.</li>
          </ul>
          <p>From inning 3 onward, stealing home is permitted subject to all other base running rules.</p>`
      },
      {
        id: "taba-11u-game-length",
        insertAfterRule: "22",
        title: "11U Game Length & Time Limits",
        badge: "TABA 11U Only",
        content: `
          <ul class="rl">
            <li>Game length is <strong>two (2) hours</strong> from the scheduled start time.</li>
            <li>No new inning shall start later than <strong>1 hour 45 minutes</strong> after the actual game start time.</li>
            <li>If another game is scheduled afterward, or if the umpire deems it too dark to play safely, the game may be called (Umpire's decision) — score reverts to the last completed inning.</li>
            <li>If the home team is at bat when the 2-hour mark passes, the inning should be completed if possible (Umpire's decision).</li>
            <li>In the event of weather or darkness, <strong>four innings</strong> constitute a complete game.</li>
          </ul>`
      },
      {
        id: "taba-11u-coaches",
        insertAfterRule: "10",
        title: "11U Coaches — On-Field Rules",
        badge: "TABA 11U Only",
        content: `
          <ul class="rl">
            <li>Maximum <strong>three (3) coaches</strong> inside the fenced perimeter during game play. Coaches must remain in the dugout area unless their team is on offence and they occupy a coaches' box.</li>
            <li>Only individuals who have completed a Criminal Record Check and are registered as a helper are permitted to work with players on the field.</li>
            <li>The head coach meets with the opposing coach and umpires at home plate <strong>5 minutes prior</strong> to game time. Coaches introduce themselves by first name and present the team line-up (2 copies) to the home plate umpire. Home team presents first.</li>
            <li><strong>No protests of any kind</strong> are allowed during TABA league play. If you have an issue, notify the 11U Division Manager. (Note: BC Minor Rule 28.01 still permits protests for illegal/ineligible players at Provincials.)</li>
          </ul>`
      },
      {
        id: "taba-11u-scheduling",
        insertAfterRule: "20",
        title: "11U Game Scheduling",
        badge: "TABA 11U Only",
        content: `
          <ul class="rl">
            <li>Games may not be postponed or rescheduled without the agreement of the 11U Division Manager and both head coaches.</li>
            <li>Teams shall not consider a game canceled due to bad weather unless officially notified.</li>
            <li>Minimum cancellation notification time: <strong>1¾ hours before game start</strong>.</li>
          </ul>`
      },
      {
        id: "taba-11u-home-team",
        insertAfterRule: "20",
        title: "11U Home Team Responsibilities",
        badge: "TABA 11U Only",
        content: `
          <ul class="rl">
            <li>Notify the umpire allocator, concession manager, and 11U Division Manager of any game cancellations, postponements, or rescheduling.</li>
            <li>Prepare the diamond: line the field and fill depressions before the game. After the game, return all equipment to bins and lock up. No children allowed in the equipment room or bins.</li>
            <li>Bring <strong>two provided game balls</strong> to the umpire at the start of each game.</li>
          </ul>`
      },
      {
        id: "taba-11u-9u-callup",
        insertAfterRule: "5",
        title: "11U — Use of 9U (Tadpole) Players",
        badge: "TABA 11U Only",
        content: `
          <div class="callout red">
            <p>BC Minor (Rule 5.06) limits 9U call-ups to <strong>5 regular season games plus one tournament</strong> per player per season. Stiff penalties apply for violations.</p>
          </div>
          <ul class="rl">
            <li>Second-year Tadpole (9U) players are eligible to play if a team is short, provided it does not conflict with their own Tadpole scheduled game.</li>
            <li>Teams are encouraged to call up second-year Tadpoles when they have 9 or fewer players available.</li>
            <li>Coaches must request permission from both the Tadpole player's coach and the 9U Division Manager before asking a Tadpole player to play. Requests may be denied if games conflict, or if the player is injured or suspended.</li>
            <li>Tadpole players must wear their regular team uniform when playing 11U games.</li>
            <li>Tadpole players are <strong>not allowed to pitch</strong> in 11U games.</li>
          </ul>`
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════
     ADD NEW DIVISIONS BELOW THIS LINE
     Copy the "11u" block above as your template.
     ═══════════════════════════════════════════════════════════

  "9u": {
    name: "9U — Tadpole",
    badge: "9U Tadpole",
    color: "#27ae60",
    description: "Spring & Summer 2026",
    overrides: {
      // "rule.id": { type, label, bcMinorSummary, tabaSummary, content }
    },
    additions: [
      // { id, insertAfterRule, title, badge, content }
    ]
  },

  "13u": {
    name: "13U — Peewee",
    badge: "13U Peewee",
    color: "#8e44ad",
    description: "Spring & Summer 2026",
    overrides: {},
    additions: []
  },

  "18u": {
    name: "18U — Midget",
    badge: "18U Midget",
    color: "#8B0000",
    description: "Spring & Summer 2026",
    overrides: {},
    additions: []
  }

  */
};
