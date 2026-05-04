/**
 * taba-divisions.js
 * ─────────────────
 * Add or edit division overrides here.
 * The renderer reads this file — never edit renderer.js for content changes.
 *
 * OVERRIDE TYPES:
 *   "differs" → side-by-side comparison block (BC Minor left / Interlock/TABA right)
 *   "adds"    → green block for something that adds to BC Minor
 *   "removes" → red block for something restricted beyond BC Minor
 *
 * GROUPS:
 *   group: "taba"      → TABA Local Leagues (shown in first section on landing page)
 *   group: "interlock" → Fraser Delta Interlock (shown in second section)
 *
 * RULE LINKS IN CONTENT:
 *   Link to a BC Minor rule using:
 *   <a href="#rule-24" class="bcm-link">Rule 24: Pitching Rules</a>
 *   Link to a specific sub-rule using:
 *   <a href="#24-01" class="bcm-link">Rule 24.01</a>
 *   The renderer intercepts these and opens + scrolls to the correct section.
 */

window.TABADivisions = {

  /* ═══════════════════════════════════════════════════════════
     11U — Mosquito (TABA Local)
     ═══════════════════════════════════════════════════════════ */
  "11u": {
    name: "11U — Mosquito",
    badge: "11U Mosquito",
    color: "#0c413b",
    group: "taba",
    description: "TABA Home/Host Rules · Spring & Summer 2026",

    overrides: {

      "26.08": {
        type: "differs",
        label: "11U Run Limits — Innings 1–2 Capped at 2",
        bcMinorSummary: "10U & 11U summer: 4 runs per inning for all innings, with the last at-bat being unlimited.",
        tabaSummary: "TABA caps innings 1–2 at 2 runs. Innings 3–5 follow the BC Minor 4-run cap. Inning 6 is open.",
        content: `
          <table>
            <thead><tr><th>Innings</th><th>Run Limit (TABA 11U)</th><th>Out Limit</th></tr></thead>
            <tbody>
              <tr><td class="hi">1–2</td><td>2 runs maximum <span class="sb-badge badge-taba">TABA Home/Host Rule</span></td><td>3 outs</td></tr>
              <tr><td class="hi">3–5</td><td>4 runs maximum</td><td>3 outs</td></tr>
              <tr><td class="hi">6 (or last)</td><td>Open — no run limit</td><td>3 outs only</td></tr>
            </tbody>
          </table>
          <p class="note">The last inning is declared open by the umpire. The mercy rule may still end any half-inning.</p>`
      },

      "26.14": {
        type: "adds",
        label: "11U — No Intentional Walks",
        content: `<div class="callout red"><p><strong>No intentional walks permitted in the 11U Division.</strong> Consistent with <a href="#26-14" class="bcm-link">BC Minor Rule 26.14</a>.</p></div>`
      }
    },

    additions: [
      {
        id: "taba-11u-precedence",
        insertAfterRule: "1",
        title: "11U Rule Scope & Precedence",
        badge: "TABA Home/Host Rule",
        content: `
          <div class="callout blue">
            <p>These rules apply when <strong>TABA is the home association or tournament host</strong>. For away games, check the host association's published local rules first.</p>
          </div>
          <div class="callout navy">
            <p><strong>Order of Precedence (highest to lowest):</strong></p>
            <ol class="nl">
              <li><strong>Home/Host Association Local Rules</strong> — TABA rules at Tsawwassen/TABA tournaments; the host association's local rules at away games</li>
              <li><strong>Fraser Delta Interlock Rules</strong> — where applicable, if no host local rule covers the situation</li>
              <li><strong>BC Minor Baseball Rules</strong> — where the above are silent</li>
              <li><strong>Official Rules of Baseball</strong> — where BC Minor is silent</li>
            </ol>
          </div>`
      },
      {
        id: "taba-11u-first-year-pitcher",
        insertAfterRule: "24",
        title: "First-Year or Under-Aged Pitcher Rule",
        badge: "Fraser Delta Interlock",
        content: `
          <div class="callout blue">
            <p>The <strong>first two innings of each game must be pitched by a first-year or under-aged player</strong>.</p>
          </div>
          <p><strong>Age definitions for this rule:</strong></p>
          <ul class="rl">
            <li><strong>First-year player</strong> — a player who did not play in the 11U Division in a previous year and is eligible to play one more year at 11U.</li>
            <li><strong>Under-aged player</strong> — a player who is playing 11U below the standard age (i.e., is age-eligible for a younger division but has been moved up).</li>
            <li><strong>Second-year player</strong> — a player in their final year of 11U eligibility.</li>
          </ul>
          <p>Any eligible player may pitch from inning 3 onward, subject to pitch count rules under <a href="#rule-24" class="bcm-link">BC Minor Rule 24</a>.</p>`
      },
      {
        id: "taba-11u-stealing-home",
        insertAfterRule: "26",
        title: "11U Base Running — Stealing Home",
        badge: "Fraser Delta Interlock",
        content: `
          <div class="callout red"><p><strong>No stealing of home is allowed in the first two (2) innings until May 1.</strong></p></div>
          <p><strong>Before May 1:</strong> A runner may only score from third base in innings 1 and 2 by:</p>
          <ul class="rl">
            <li>Being forced home by a walk, hit batter, or catcher interference.</li>
            <li>The continuation of a play that began with a hit ball.</li>
          </ul>
          <p><strong>Starting May 1:</strong> Stealing home is permitted in any inning, subject to all normal base running rules including the <a href="#26-09" class="bcm-link">leadoff rule (BC Minor 26.09)</a>.</p>`
      },
      {
        id: "taba-11u-coaches",
        insertAfterRule: "10",
        title: "11U Coaches — On-Field Rules",
        badge: "TABA Home/Host Rule",
        content: `
          <ul class="rl">
            <li>Maximum <strong>three (3) coaches</strong> inside the fenced perimeter during game play.</li>
            <li>Only individuals who have completed a Criminal Record Check and are registered as a helper may work with players on the field.</li>
            <li>The head coach meets with the opposing coach and umpires at home plate <strong>5 minutes prior</strong> to game time. Coaches introduce themselves by first name and present the line-up (2 copies) to the home plate umpire. Home team presents first.</li>
            <li><strong>No protests of any kind</strong> are allowed during TABA league play. Notify the 11U Division Manager for any issues.</li>
          </ul>`
      },
      {
        id: "taba-11u-home-team",
        insertAfterRule: "22",
        title: "11U Home Team Responsibilities",
        badge: "TABA Home/Host Rule",
        content: `
          <ul class="rl">
            <li><strong>Home team occupies the dugout behind third base.</strong></li>
            <li>Notify the umpire allocator, concession manager, and 11U Division Manager of any game cancellations, postponements, or rescheduling.</li>
            <li>Prepare the diamond: line the field and fill depressions before the game. After the game, return all equipment to bins and lock up.</li>
            <li>Bring <strong>two new game balls</strong> to the umpire at the start of each game.</li>
            <li><strong>Home team's scorekeeper is the official scorekeeper</strong> for the game.</li>
          </ul>`
      },
      {
        id: "taba-11u-9u-callup",
        insertAfterRule: "5",
        title: "11U — Use of 9U (Tadpole) Players",
        badge: "TABA Home/Host Rule",
        content: `
          <div class="callout red">
            <p><a href="#5-06" class="bcm-link">BC Minor Rule 5.06</a> limits 9U call-ups to <strong>5 regular season games plus one tournament</strong> per player per season.</p>
          </div>
          <ul class="rl">
            <li>Second-year Tadpole (9U) players are eligible to play if a team is short, provided it does not conflict with their own Tadpole scheduled game.</li>
            <li>Coaches must request permission from both the Tadpole player's coach and the 9U Division Manager before asking a Tadpole player to play.</li>
            <li>Tadpole players must wear their regular team uniform when playing 11U games.</li>
            <li>Tadpole players are <strong>not allowed to pitch</strong> in 11U games.</li>
          </ul>`
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════
     13U A — Fraser Delta Interlock
     ═══════════════════════════════════════════════════════════ */
  "13ua": {
    name: "13U A — Fraser Delta Interlock",
    badge: "13U A Interlock",
    color: "#1a5276",
    group: "interlock",
    description: "Fraser Delta Interlock · Spring 2026",

    overrides: {

      "28.01": {
        type: "differs",
        label: "13U A Interlock — No Protests",
        bcMinorSummary: "Protests based on ineligible or illegal player use are permitted in summer league play.",
        tabaSummary: "No protests allowed during regular Fraser Delta Interlock play of any kind.",
        content: `<div class="callout red"><p><strong>No protests are allowed during regular Fraser Delta Interlock play.</strong> Where possible, disputes should be settled by division coordinators of the associations involved.</p></div>`
      },

      "26.12": {
        type: "differs",
        label: "13U A Interlock — Graduated Balk Rules",
        bcMinorSummary: "Balks are called at 13U and higher as per general baseball rules.",
        tabaSummary: "Interlock uses a graduated warning system by month. In all cases, warnings are per pitcher — not per game.",
        content: `
          <table>
            <thead><tr><th>Month</th><th>Balk Rule (13U A)</th></tr></thead>
            <tbody>
              <tr><td class="hi">April</td><td>One warning per pitcher — second balk by the same pitcher is called</td></tr>
              <tr><td class="hi">May</td><td>One warning per pitcher — second balk by the same pitcher is called</td></tr>
              <tr><td class="hi">June</td><td>Balks called immediately — no warnings per standard baseball rules</td></tr>
            </tbody>
          </table>
          <p class="note">Warnings are always <strong>per pitcher</strong>, not per game. A new pitcher entering the game starts fresh with no warning count.</p>`
      },

      "26.08": {
        type: "differs",
        label: "13U A Interlock — 5 Run Limit Per Inning",
        bcMinorSummary: "13U A: 6 runs per inning limit, with the last at-bat being unlimited.",
        tabaSummary: "Fraser Delta Interlock sets a 5-run limit per inning (not 6). Open inning is unlimited. Refer to BC Minor mercy rule.",
        content: `
          <table>
            <thead><tr><th>Innings</th><th>Run Limit</th></tr></thead>
            <tbody>
              <tr><td class="hi">All regular innings</td><td>5 runs maximum</td></tr>
              <tr><td class="hi">Open inning (last)</td><td>Unlimited</td></tr>
            </tbody>
          </table>
          <p>Mercy rule applies as per <a href="#22-08" class="bcm-link">BC Minor Rule 22.08</a>.</p>`
      },

      "22.07": {
        type: "differs",
        label: "13U A Interlock — Time Limit Applies to All Games",
        bcMinorSummary: "BC Minor time limits apply to Provincial Championships only.",
        tabaSummary: "No new innings after 2 hours and 15 minutes. This applies to all interlock games, not just Provincials. Any delays (rain, injury, etc.) count toward the running time.",
        content: `
          <ul class="rl">
            <li>No new inning shall start after <strong>2 hours and 15 minutes</strong> of running time.</li>
            <li>Umpire has discretion to end a game due to darkness.</li>
            <li>All delays (rain, injury, etc.) count as part of the 2:15 running time.</li>
            <li>In the event of a tie, one extra inning may be played <strong>if the time limit allows</strong>.</li>
          </ul>`
      },

      "22.01": {
        type: "differs",
        label: "13U A Interlock — 7 Inning Games",
        bcMinorSummary: "BC Minor does not specify a fixed inning count for 13U — this varies by league.",
        tabaSummary: "All Fraser Delta Interlock regular season and playoff games are 7 innings.",
        content: `<p>All Fraser Delta Interlock games are <strong>7 innings</strong>.</p>`
      }
    },

    additions: [
      {
        id: "fdi-13ua-overview",
        insertAfterRule: "1",
        title: "Fraser Delta Interlock — Overview & Order of Precedence",
        badge: "13U A Interlock",
        content: `
          <div class="callout blue">
            <p>These rules apply to Fraser Delta Interlock play unless the host association has a published local or home rule for the situation.</p>
          </div>
          <div class="callout navy">
            <p><strong>Order of Precedence (highest to lowest):</strong></p>
            <ol class="nl">
              <li><strong>Home/Host Association Local Rules</strong> — the host association's published local rules take priority at their home fields</li>
              <li><strong>Fraser Delta Interlock Rules</strong> — where no host local rule covers the situation</li>
              <li><strong><a href="#bcminor-rules-section" class="bcm-link">BC Minor Baseball Rules</a></strong> — where the above are silent</li>
              <li><strong>Official Rules of Baseball</strong> — where BC Minor is silent</li>
            </ol>
          </div>
          <p>The Fraser Delta Interlock schedules and administers regular season and playoff games and standings for 13U A and AA, 15U A, and 18U AA divisions.</p>
          <table>
            <thead><tr><th>Contact</th><th>Role</th><th>Email</th></tr></thead>
            <tbody>
              <tr><td>Steve Ormston</td><td>Website Coordinator (scores/standings)</td><td>scheduler@ndbaseball.com</td></tr>
              <tr><td>Brent Dingsdale</td><td>Interlock Coordinator</td><td>coaching@ndbaseball.com</td></tr>
            </tbody>
          </table>
          <p>Schedule and standings are hosted at <strong>ndbaseball.com</strong> (SportsEngine).</p>`
      },
      {
        id: "fdi-13ua-schedule",
        insertAfterRule: "20",
        title: "13U A — Game Days & Start Times",
        badge: "13U A Interlock",
        content: `
          <div class="sub-rule">
            <div class="sub-rule-title">Game Days</div>
            <p>13U A games are scheduled on <strong>Wednesday, Friday, and Sunday</strong>.</p>
            <p class="note">Getting to remote parks (e.g., North Shore) for mid-week games is a challenge. Remote teams will be scheduled with more Saturday double-headers where possible. Mid-week playoff games cannot always be avoided.</p>
          </div>
          <div class="sub-rule">
            <div class="sub-rule-title">Start Times</div>
            <table>
              <thead><tr><th>Period</th><th>Weekday Start</th><th>Weekend Starts</th></tr></thead>
              <tbody>
                <tr><td class="hi">April</td><td>5:30 PM</td><td>9:00 AM · 12:00 PM · 2:30 PM · 5:30 PM</td></tr>
                <tr><td class="hi">May 1 onward</td><td>6:00 PM</td><td>9:00 AM · 12:00 PM · 3:00 PM · 6:00 PM</td></tr>
              </tbody>
            </table>
            <p class="note">Start times may vary for parks with lights.</p>
          </div>`
      },
      {
        id: "fdi-13ua-scoring",
        insertAfterRule: "22",
        title: "13U A — Score Reporting",
        badge: "13U A Interlock",
        content: `
          <p>The <strong>home team</strong> emails game results to Steve Ormston at <a href="mailto:scheduler@ndbaseball.com">scheduler@ndbaseball.com</a>. Steve manually enters scores on SportsEngine (ndbaseball.com).</p>
          <p class="note">No team pages — all scores are entered centrally by the coordinator.</p>`
      },
      {
        id: "fdi-13ua-rainouts",
        insertAfterRule: "21",
        title: "13U A — Rain-Out Procedure",
        badge: "13U A Interlock",
        content: `
          <ol class="nl">
            <li>The <strong>home team must contact the visiting team within 72 hours</strong> to reschedule.</li>
            <li>The home team must offer a make-up date taking both teams' schedules into account.</li>
            <li>If the visiting team refuses, the home team must offer a <strong>second date</strong>.</li>
            <li>If the visiting team refuses the second date, the game may be scored as a <strong>default win for the home team</strong>.</li>
            <li>If the home team does not contact the visiting team within 72 hours, the visiting team should contact the Interlock Coordinator.</li>
            <li>If the home team refuses to provide any make-up date, the game may be scored as a <strong>default win for the visiting team</strong>.</li>
          </ol>
          <p class="note">Default wins are at the discretion of the Interlock Coordinator.</p>`
      },
      {
        id: "fdi-13ua-umpires",
        insertAfterRule: "17",
        title: "13U A — Umpires",
        badge: "13U A Interlock",
        content: `
          <p>The <strong>home team is responsible for supplying umpires</strong> for all interlock games. Umpire interaction during Fraser Delta Interlock play is governed by <a href="#13-02" class="bcm-link">BC Minor Rule 13.02</a>. Violations of umpire interaction rules may result in ejection or suspension per applicable conduct provisions.</p>`
      },
      {
        id: "fdi-13ua-playoffs",
        insertAfterRule: "29",
        title: "13U A — Playoff Format & Awards",
        badge: "13U A Interlock",
        content: `
          <div class="callout red">
            <p><strong>All teams qualify for and must participate in the playoffs.</strong> No team may blackout any June dates for tournaments. Playoffs run during the first two weeks of June and must be complete by Father's Day.</p>
          </div>
          <div class="sub-rule">
            <div class="sub-rule-title">Format</div>
            <ul class="rl">
              <li>The division is typically broken into <strong>two tiered pools</strong>. A smaller division may remain as one pool.</li>
              <li>Each pool plays a <strong>round robin</strong> format.</li>
              <li>The top two teams in each pool play a <strong>final game</strong>. The team with the best regular season record is the home team.</li>
              <li>Playoff games may not be moved.</li>
            </ul>
          </div>
          <div class="sub-rule">
            <div class="sub-rule-title">Standings & Tie-Breakers</div>
            <p>Regular season standings are determined by winning percentage. Tie-breakers follow <a href="#29-01" class="bcm-link">BC Minor Rule 29.01</a>.</p>
          </div>
          <div class="sub-rule">
            <div class="sub-rule-title">Awards</div>
            <ul class="rl">
              <li><strong>Medallions</strong> awarded to the 1st place regular season team.</li>
              <li><strong>Trophies</strong> awarded to 1st and 2nd place in each pool for the playoffs.</li>
            </ul>
          </div>
          <div class="sub-rule">
            <div class="sub-rule-title">Team Fee (2026)</div>
            <p><strong>$160/team</strong> — due before the start of the season.</p>
          </div>`
      },
      {
        id: "fdi-13ua-pitching",
        insertAfterRule: "24",
        title: "13U A — Pitch Count Rules",
        badge: "13U A Interlock",
        content: `<p>Pitch count rules follow <a href="#rule-24" class="bcm-link">BC Minor Rule 24: Pitching Rules</a> in full. No interlock-specific modifications.</p>`
      },
      {
        id: "fdi-13ua-fairplay",
        insertAfterRule: "25",
        title: "13U A — Fair Play Rules",
        badge: "13U A Interlock",
        content: `<p>Fair play rules follow <a href="#rule-25" class="bcm-link">BC Minor Rule 25: Fair Play Rule</a> in full. No interlock-specific modifications.</p>`
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════
     13U AA — Fraser Delta Interlock
     ═══════════════════════════════════════════════════════════ */
  "13uaa": {
    name: "13U AA — Fraser Delta Interlock",
    badge: "13U AA Interlock",
    color: "#154360",
    group: "interlock",
    description: "Fraser Delta Interlock · Spring 2026",

    overrides: {

      "28.01": {
        type: "differs",
        label: "13U AA Interlock — No Protests",
        bcMinorSummary: "Protests based on ineligible or illegal player use are permitted in summer league play.",
        tabaSummary: "No protests allowed during regular Fraser Delta Interlock play of any kind.",
        content: `<div class="callout red"><p><strong>No protests are allowed during regular Fraser Delta Interlock play.</strong></p></div>`
      },

      "26.12": {
        type: "differs",
        label: "13U AA Interlock — Balk Warning April Only, Then Called",
        bcMinorSummary: "Balks are called at 13U and higher as per general baseball rules.",
        tabaSummary: "One warning per pitcher in April only. No warnings from May onward — balks called per standard baseball rules.",
        content: `
          <table>
            <thead><tr><th>Month</th><th>Balk Rule (13U AA)</th></tr></thead>
            <tbody>
              <tr><td class="hi">April</td><td>One warning per pitcher — second balk by the same pitcher is called</td></tr>
              <tr><td class="hi">May & June</td><td>Balks called immediately — no warnings per standard baseball rules</td></tr>
            </tbody>
          </table>
          <p class="note">Warnings are always <strong>per pitcher</strong>, not per game. 13U AA uses a stricter balk schedule than 13U A, reflecting the higher level of play.</p>`
      },

      "26.08": {
        type: "differs",
        label: "13U AA Interlock — Unique Run Limit Structure",
        bcMinorSummary: "13U A: 6 runs per inning limit, with the last at-bat unlimited.",
        tabaSummary: "13U AA: 5-run limit in innings 1 and 2 only. All other innings are OPEN (unlimited runs). This is unique to 13U AA within the interlock.",
        content: `
          <div class="callout red">
            <p><strong>13U AA has a unique run limit structure — open innings from inning 3 onward.</strong></p>
          </div>
          <table>
            <thead><tr><th>Innings</th><th>Run Limit (13U AA)</th></tr></thead>
            <tbody>
              <tr><td class="hi">1–2</td><td>5 runs maximum</td></tr>
              <tr><td class="hi">3 onward</td><td>Open — unlimited runs</td></tr>
            </tbody>
          </table>
          <p>Mercy rule applies as per <a href="#22-08" class="bcm-link">BC Minor Rule 22.08</a>.</p>`
      },

      "22.07": {
        type: "differs",
        label: "13U AA Interlock — Time Limit Applies to All Games",
        bcMinorSummary: "BC Minor time limits apply to Provincial Championships only.",
        tabaSummary: "No new innings after 2 hours and 15 minutes running time. Applies to all interlock games.",
        content: `
          <ul class="rl">
            <li>No new inning shall start after <strong>2 hours and 15 minutes</strong> of running time.</li>
            <li>All delays count as part of the running time.</li>
            <li>In the event of a tie, one extra inning may be played if the time limit allows.</li>
          </ul>`
      },

      "22.01": {
        type: "differs",
        label: "13U AA Interlock — 7 Inning Games",
        bcMinorSummary: "BC Minor does not specify a fixed inning count for 13U.",
        tabaSummary: "All Fraser Delta Interlock games are 7 innings.",
        content: `<p>All Fraser Delta Interlock games are <strong>7 innings</strong>.</p>`
      }
    },

    additions: [
      {
        id: "fdi-13uaa-overview",
        insertAfterRule: "1",
        title: "Fraser Delta Interlock — Overview & Order of Precedence",
        badge: "13U AA Interlock",
        content: `
          <div class="callout blue">
            <p>These rules apply to Fraser Delta Interlock play unless the host association has a published local or home rule for the situation.</p>
          </div>
          <div class="callout navy">
            <p><strong>Order of Precedence (highest to lowest):</strong></p>
            <ol class="nl">
              <li><strong>Home/Host Association Local Rules</strong> — the host association's published local rules take priority at their home fields</li>
              <li><strong>Fraser Delta Interlock Rules</strong> — where no host local rule covers the situation</li>
              <li><strong><a href="#bcminor-rules-section" class="bcm-link">BC Minor Baseball Rules</a></strong> — where the above are silent</li>
              <li><strong>Official Rules of Baseball</strong> — where BC Minor is silent</li>
            </ol>
          </div>
          <p>The Fraser Delta Interlock schedules and administers regular season and playoff games and standings for 13U A and AA, 15U A, and 18U AA divisions.</p>
          <table>
            <thead><tr><th>Contact</th><th>Role</th><th>Email</th></tr></thead>
            <tbody>
              <tr><td>Steve Ormston</td><td>Website Coordinator (scores/standings)</td><td>scheduler@ndbaseball.com</td></tr>
              <tr><td>Brent Dingsdale</td><td>Interlock Coordinator</td><td>coaching@ndbaseball.com</td></tr>
            </tbody>
          </table>
          <p>Schedule and standings are hosted at <strong>ndbaseball.com</strong> (SportsEngine).</p>`
      },
      {
        id: "fdi-13uaa-schedule",
        insertAfterRule: "20",
        title: "13U AA — Game Days & Start Times",
        badge: "13U AA Interlock",
        content: `
          <div class="sub-rule">
            <div class="sub-rule-title">Game Days</div>
            <p>13U AA games are scheduled on <strong>Tuesday, Thursday, and Saturday</strong>.</p>
          </div>
          <div class="sub-rule">
            <div class="sub-rule-title">Start Times</div>
            <table>
              <thead><tr><th>Period</th><th>Weekday Start</th><th>Weekend Starts</th></tr></thead>
              <tbody>
                <tr><td class="hi">April</td><td>5:30 PM</td><td>9:00 AM · 12:00 PM · 2:30 PM · 5:30 PM</td></tr>
                <tr><td class="hi">May 1 onward</td><td>6:00 PM</td><td>9:00 AM · 12:00 PM · 3:00 PM · 6:00 PM</td></tr>
              </tbody>
            </table>
          </div>`
      },
      {
        id: "fdi-13uaa-gamechanger",
        insertAfterRule: "22",
        title: "13U AA — GameChanger Score Reporting",
        badge: "13U AA Interlock",
        content: `
          <div class="callout blue">
            <p>13U AA uses <strong>GameChanger</strong> for schedule, scores, and standings — not SportsEngine.</p>
          </div>
          <ol class="nl">
            <li>Admin (Brent) creates the 13U AA league in GameChanger.</li>
            <li>Admin adds the full schedule to the GC league.</li>
            <li>Each team creates a team in GC. <strong>Player stats set to private.</strong></li>
            <li>Team naming convention: <code>Town | Team Name | 13U AA</code><br>
                <span class="note">Example: Ladner Red Sox 13U AA, North Delta Rays 13U AA</span></li>
            <li>By default, the <strong>home team is the GC scorekeeper</strong>.</li>
            <li>Admin will override the game score if there are any discrepancies.</li>
            <li>Admin must be notified of any game date/time changes — admin updates the GC schedule.</li>
          </ol>`
      },
      {
        id: "fdi-13uaa-rainouts",
        insertAfterRule: "21",
        title: "13U AA — Rain-Out Procedure",
        badge: "13U AA Interlock",
        content: `
          <ol class="nl">
            <li>The <strong>home team must contact the visiting team within 72 hours</strong> to reschedule.</li>
            <li>The home team must offer a make-up date taking both teams' schedules into account.</li>
            <li>If the visiting team refuses, the home team must offer a <strong>second date</strong>.</li>
            <li>If the visiting team refuses the second date, the game may be scored as a <strong>default win for the home team</strong>.</li>
            <li>If the home team does not contact the visiting team within 72 hours, the visiting team should contact the Interlock Coordinator.</li>
            <li>If the home team refuses to provide any make-up date, the game may be scored as a <strong>default win for the visiting team</strong>.</li>
          </ol>
          <p class="note">Default wins are at the discretion of the Interlock Coordinator.</p>`
      },
      {
        id: "fdi-13uaa-umpires",
        insertAfterRule: "17",
        title: "13U AA — Umpires",
        badge: "13U AA Interlock",
        content: `<p>The <strong>home team is responsible for supplying umpires</strong>. Umpire interaction during Fraser Delta Interlock play is governed by <a href="#13-02" class="bcm-link">BC Minor Rule 13.02</a>. Violations of umpire interaction rules may result in ejection or suspension per applicable conduct provisions.</p>`
      },
      {
        id: "fdi-13uaa-playoffs",
        insertAfterRule: "29",
        title: "13U AA — Playoff Format & Awards",
        badge: "13U AA Interlock",
        content: `
          <div class="callout red">
            <p><strong>All teams qualify for and must participate in the playoffs.</strong> No team may blackout any June dates for tournaments. Playoffs must be complete by Father's Day.</p>
          </div>
          <ul class="rl">
            <li>Typically two tiered pools — round robin format, top two play a final.</li>
            <li>Team with best regular season record is home team in the final.</li>
            <li>Standings by winning percentage. Tie-breakers per <a href="#29-01" class="bcm-link">BC Minor Rule 29.01</a>.</li>
            <li><strong>Medallions</strong> to 1st place regular season team. <strong>Trophies</strong> to 1st and 2nd place in each pool playoff.</li>
            <li><strong>Team Fee (2026): $160/team</strong> — due before the start of the season.</li>
          </ul>`
      },
      {
        id: "fdi-13uaa-pitching",
        insertAfterRule: "24",
        title: "13U AA — Pitch Count Rules",
        badge: "13U AA Interlock",
        content: `<p>Pitch count rules follow <a href="#rule-24" class="bcm-link">BC Minor Rule 24: Pitching Rules</a> in full.</p>`
      },
      {
        id: "fdi-13uaa-fairplay",
        insertAfterRule: "25",
        title: "13U AA — Fair Play Rules",
        badge: "13U AA Interlock",
        content: `<p>Fair play rules follow <a href="#rule-25" class="bcm-link">BC Minor Rule 25: Fair Play Rule</a> in full.</p>`
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════
     15U A — Fraser Delta Interlock
     ═══════════════════════════════════════════════════════════ */
  "15ua": {
    name: "15U A — Fraser Delta Interlock",
    badge: "15U A Interlock",
    color: "#6c3483",
    group: "interlock",
    description: "Fraser Delta Interlock · Spring 2026",

    overrides: {

      "28.01": {
        type: "differs",
        label: "15U A Interlock — No Protests",
        bcMinorSummary: "Protests based on ineligible or illegal player use are permitted in summer league play.",
        tabaSummary: "No protests allowed during regular Fraser Delta Interlock play.",
        content: `<div class="callout red"><p><strong>No protests are allowed during regular Fraser Delta Interlock play.</strong></p></div>`
      },

      "26.08": {
        type: "differs",
        label: "15U A Interlock — 5 Run Limit Per Inning",
        bcMinorSummary: "15U A: 6 runs per inning limit, with last at-bat unlimited.",
        tabaSummary: "Fraser Delta Interlock sets a 5-run limit per inning (not 6). Open inning is unlimited.",
        content: `
          <table>
            <thead><tr><th>Innings</th><th>Run Limit</th></tr></thead>
            <tbody>
              <tr><td class="hi">All regular innings</td><td>5 runs maximum</td></tr>
              <tr><td class="hi">Open inning (last)</td><td>Unlimited</td></tr>
            </tbody>
          </table>
          <p>Mercy rule applies as per <a href="#22-08" class="bcm-link">BC Minor Rule 22.08</a>.</p>`
      },

      "22.07": {
        type: "differs",
        label: "15U A Interlock — Time Limit Applies to All Games",
        bcMinorSummary: "BC Minor time limits apply to Provincial Championships only.",
        tabaSummary: "No new innings after 2 hours and 15 minutes running time.",
        content: `
          <ul class="rl">
            <li>No new inning shall start after <strong>2 hours and 15 minutes</strong> of running time.</li>
            <li>All delays count as part of the running time.</li>
            <li>In the event of a tie, one extra inning may be played if the time limit allows.</li>
          </ul>`
      },

      "22.01": {
        type: "differs",
        label: "15U A Interlock — 7 Inning Games",
        bcMinorSummary: "BC Minor does not mandate a fixed inning count for 15U league play.",
        tabaSummary: "All Fraser Delta Interlock games are 7 innings.",
        content: `<p>All Fraser Delta Interlock games are <strong>7 innings</strong>.</p>`
      }
    },

    additions: [
      {
        id: "fdi-15ua-overview",
        insertAfterRule: "1",
        title: "Fraser Delta Interlock — Overview & Order of Precedence",
        badge: "15U A Interlock",
        content: `
          <div class="callout blue">
            <p>These rules apply to Fraser Delta Interlock play unless the host association has a published local or home rule for the situation.</p>
          </div>
          <div class="callout navy">
            <p><strong>Order of Precedence (highest to lowest):</strong></p>
            <ol class="nl">
              <li><strong>Home/Host Association Local Rules</strong> — the host association's published local rules take priority at their home fields</li>
              <li><strong>Fraser Delta Interlock Rules</strong> — where no host local rule covers the situation</li>
              <li><strong><a href="#bcminor-rules-section" class="bcm-link">BC Minor Baseball Rules</a></strong> — where the above are silent</li>
              <li><strong>Official Rules of Baseball</strong> — where BC Minor is silent</li>
            </ol>
          </div>
          <p>The Fraser Delta Interlock schedules and administers regular season and playoff games and standings for 13U A and AA, 15U A, and 18U AA divisions.</p>
          <table>
            <thead><tr><th>Contact</th><th>Role</th><th>Email</th></tr></thead>
            <tbody>
              <tr><td>Steve Ormston</td><td>Website Coordinator (scores/standings)</td><td>scheduler@ndbaseball.com</td></tr>
              <tr><td>Brent Dingsdale</td><td>Interlock Coordinator</td><td>coaching@ndbaseball.com</td></tr>
            </tbody>
          </table>
          <p>Schedule and standings are hosted at <strong>ndbaseball.com</strong> (SportsEngine).</p>`
      },
      {
        id: "fdi-15ua-schedule",
        insertAfterRule: "20",
        title: "15U A — Game Days & Start Times",
        badge: "15U A Interlock",
        content: `
          <div class="sub-rule">
            <div class="sub-rule-title">Game Days</div>
            <p>Scheduling works around the <strong>Bantam AA and AAA schedules</strong>. AA typically plays Tues/Thurs/weekends; AAA typically plays weekends and Wednesdays.</p>
          </div>
          <div class="sub-rule">
            <div class="sub-rule-title">Start Times</div>
            <table>
              <thead><tr><th>Period</th><th>Weekday Start</th><th>Weekend Starts</th></tr></thead>
              <tbody>
                <tr><td class="hi">April</td><td>5:30 PM</td><td>9:00 AM · 12:00 PM · 2:30 PM · 5:30 PM</td></tr>
                <tr><td class="hi">May 1 onward</td><td>6:00 PM</td><td>9:00 AM · 12:00 PM · 3:00 PM · 6:00 PM</td></tr>
              </tbody>
            </table>
            <p class="note">Start times may vary for parks with lights.</p>
          </div>`
      },
      {
        id: "fdi-15ua-scoring",
        insertAfterRule: "22",
        title: "15U A — Score Reporting",
        badge: "15U A Interlock",
        content: `<p>The <strong>home team</strong> emails game results to <a href="mailto:scheduler@ndbaseball.com">scheduler@ndbaseball.com</a>. Scores are entered on SportsEngine at ndbaseball.com.</p>`
      },
      {
        id: "fdi-15ua-rainouts",
        insertAfterRule: "21",
        title: "15U A — Rain-Out Procedure",
        badge: "15U A Interlock",
        content: `
          <ol class="nl">
            <li>The <strong>home team must contact the visiting team within 72 hours</strong> to reschedule.</li>
            <li>The home team must offer a make-up date. If refused, a second date must be offered.</li>
            <li>If the visiting team refuses both dates, the game may be scored as a <strong>default win for the home team</strong>.</li>
            <li>If the home team refuses to provide any make-up date, the game may be scored as a <strong>default win for the visiting team</strong>.</li>
          </ol>
          <p class="note">Default wins are at the discretion of the Interlock Coordinator.</p>`
      },
      {
        id: "fdi-15ua-umpires",
        insertAfterRule: "17",
        title: "15U A — Umpires",
        badge: "15U A Interlock",
        content: `<p>The <strong>home team is responsible for supplying umpires</strong>. Umpire interaction during Fraser Delta Interlock play is governed by <a href="#13-02" class="bcm-link">BC Minor Rule 13.02</a>. Violations of umpire interaction rules may result in ejection or suspension per applicable conduct provisions.</p>`
      },
      {
        id: "fdi-15ua-playoffs",
        insertAfterRule: "29",
        title: "15U A — Playoff Format & Awards",
        badge: "15U A Interlock",
        content: `
          <div class="callout red">
            <p><strong>All teams qualify for and must participate in the playoffs.</strong> No team may blackout any June dates for tournaments. Complete by Father's Day.</p>
          </div>
          <ul class="rl">
            <li>Typically two tiered pools — round robin, top two play a final.</li>
            <li>Standings by winning percentage. Tie-breakers per <a href="#29-01" class="bcm-link">BC Minor Rule 29.01</a>.</li>
            <li><strong>Medallions</strong> to 1st place regular season team. <strong>Trophies</strong> to 1st and 2nd place in each pool playoff.</li>
            <li><strong>Team Fee (2026): $210/team</strong> — due before the start of the season.</li>
          </ul>`
      },
      {
        id: "fdi-15ua-pitching",
        insertAfterRule: "24",
        title: "15U A — Pitch Count Rules",
        badge: "15U A Interlock",
        content: `<p>Pitch count rules follow <a href="#rule-24" class="bcm-link">BC Minor Rule 24: Pitching Rules</a> in full.</p>`
      },
      {
        id: "fdi-15ua-fairplay",
        insertAfterRule: "25",
        title: "15U A — Fair Play Rules",
        badge: "15U A Interlock",
        content: `<p>Fair play rules follow <a href="#rule-25" class="bcm-link">BC Minor Rule 25: Fair Play Rule</a> in full.</p>`
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════
     18U AA — Fraser Delta Interlock
     ═══════════════════════════════════════════════════════════ */
  "18uaa": {
    name: "18U AA — Fraser Delta Interlock",
    badge: "18U AA Interlock",
    color: "#78281f",
    group: "interlock",
    description: "Fraser Delta Interlock · Spring 2026",

    overrides: {

      "28.01": {
        type: "differs",
        label: "18U AA Interlock — No Protests",
        bcMinorSummary: "Protests based on ineligible or illegal player use are permitted in summer league play.",
        tabaSummary: "No protests allowed during regular Fraser Delta Interlock play.",
        content: `<div class="callout red"><p><strong>No protests are allowed during regular Fraser Delta Interlock play.</strong></p></div>`
      },

      "26.08": {
        type: "differs",
        label: "18U AA Interlock — 5 Run Limit Per Inning",
        bcMinorSummary: "18U AA: 6 runs per inning limit, with the last at-bat unlimited.",
        tabaSummary: "Fraser Delta Interlock sets a 5-run limit per inning (not 6). Open inning is unlimited.",
        content: `
          <table>
            <thead><tr><th>Innings</th><th>Run Limit</th></tr></thead>
            <tbody>
              <tr><td class="hi">All regular innings</td><td>5 runs maximum</td></tr>
              <tr><td class="hi">Open inning (last)</td><td>Unlimited</td></tr>
            </tbody>
          </table>
          <p>Mercy rule applies as per <a href="#22-08" class="bcm-link">BC Minor Rule 22.08</a>.</p>`
      },

      "22.07": {
        type: "differs",
        label: "18U AA Interlock — Time Limit Applies to All Games",
        bcMinorSummary: "BC Minor time limits apply to Provincial Championships only.",
        tabaSummary: "No new innings after 2 hours and 15 minutes running time.",
        content: `
          <ul class="rl">
            <li>No new inning shall start after <strong>2 hours and 15 minutes</strong> of running time.</li>
            <li>All delays count as part of the running time.</li>
            <li>In the event of a tie, one extra inning may be played if the time limit allows.</li>
          </ul>`
      },

      "22.01": {
        type: "differs",
        label: "18U AA Interlock — 7 Inning Games",
        bcMinorSummary: "BC Minor does not mandate a fixed inning count for 18U league play.",
        tabaSummary: "All Fraser Delta Interlock games are 7 innings.",
        content: `<p>All Fraser Delta Interlock games are <strong>7 innings</strong>.</p>`
      },

      "6.01": {
        type: "differs",
        label: "18U AA Interlock — Pick-Up Player Rules",
        bcMinorSummary: "BC Minor Rule 6 governs player eligibility and releases — no provision for pick-up players in league play.",
        tabaSummary: "Pick-up players are allowed for 18U AA regular season spring games under specific conditions.",
        content: `
          <div class="callout blue">
            <p>Pick-up players are allowed for <strong>18U AA regular season spring games</strong> if not enough call-ups are available.</p>
          </div>
          <ul class="rl">
            <li><strong>Call-ups are always the priority</strong> over pick-ups.</li>
            <li>Pick-up players <strong>cannot pitch</strong>.</li>
            <li>A player may only be picked up a <strong>maximum of 4 times</strong> for the spring season.</li>
            <li><strong>Pick-ups are not allowed for playoff games.</strong></li>
          </ul>`
      }
    },

    additions: [
      {
        id: "fdi-18uaa-overview",
        insertAfterRule: "1",
        title: "Fraser Delta Interlock — Overview & Order of Precedence",
        badge: "18U AA Interlock",
        content: `
          <div class="callout blue">
            <p>These rules apply to Fraser Delta Interlock play unless the host association has a published local or home rule for the situation.</p>
          </div>
          <div class="callout navy">
            <p><strong>Order of Precedence (highest to lowest):</strong></p>
            <ol class="nl">
              <li><strong>Home/Host Association Local Rules</strong> — the host association's published local rules take priority at their home fields</li>
              <li><strong>Fraser Delta Interlock Rules</strong> — where no host local rule covers the situation</li>
              <li><strong><a href="#bcminor-rules-section" class="bcm-link">BC Minor Baseball Rules</a></strong> — where the above are silent</li>
              <li><strong>Official Rules of Baseball</strong> — where BC Minor is silent</li>
            </ol>
          </div>
          <p>The Fraser Delta Interlock schedules and administers regular season and playoff games and standings for 13U A and AA, 15U A, and 18U AA divisions.</p>
          <table>
            <thead><tr><th>Contact</th><th>Role</th><th>Email</th></tr></thead>
            <tbody>
              <tr><td>Steve Ormston</td><td>Website Coordinator (scores/standings)</td><td>scheduler@ndbaseball.com</td></tr>
              <tr><td>Brent Dingsdale</td><td>Interlock Coordinator</td><td>coaching@ndbaseball.com</td></tr>
            </tbody>
          </table>
          <p>Schedule and standings are hosted at <strong>ndbaseball.com</strong> (SportsEngine).</p>`
      },
      {
        id: "fdi-18uaa-schedule",
        insertAfterRule: "20",
        title: "18U AA — Game Days & Start Times",
        badge: "18U AA Interlock",
        content: `
          <p>18U AA scheduling is based on <strong>field availability and requests</strong>.</p>
          <table>
            <thead><tr><th>Period</th><th>Weekday Start</th><th>Weekend Starts</th></tr></thead>
            <tbody>
              <tr><td class="hi">April</td><td>5:30 PM</td><td>9:00 AM · 12:00 PM · 2:30 PM · 5:30 PM</td></tr>
              <tr><td class="hi">May 1 onward</td><td>6:00 PM</td><td>9:00 AM · 12:00 PM · 3:00 PM · 6:00 PM</td></tr>
            </tbody>
          </table>
          <p class="note">Start times may vary for parks with lights.</p>`
      },
      {
        id: "fdi-18uaa-pickups",
        insertAfterRule: "6",
        title: "18U AA — Pick-Up Player Rules",
        badge: "18U AA Interlock",
        content: `
          <div class="callout blue">
            <p>Pick-up players are allowed for <strong>18U AA regular season spring games</strong> if not enough call-ups are available from <a href="#5-06" class="bcm-link">BC Minor Rule 5.06 (Temporary Call-Up)</a>.</p>
          </div>
          <ul class="rl">
            <li><strong>Call-ups are always the priority</strong> over pick-ups — exhaust call-up options first.</li>
            <li>Pick-up players <strong>cannot pitch</strong>.</li>
            <li>A player may only be picked up a <strong>maximum of 4 times</strong> during the spring season total.</li>
            <li><strong>Pick-ups are not permitted for any playoff games.</strong></li>
          </ul>`
      },
      {
        id: "fdi-18uaa-scoring",
        insertAfterRule: "22",
        title: "18U AA — Score Reporting",
        badge: "18U AA Interlock",
        content: `<p>The <strong>home team</strong> emails game results to <a href="mailto:scheduler@ndbaseball.com">scheduler@ndbaseball.com</a>. Scores are entered on SportsEngine at ndbaseball.com.</p>
        <p class="note">18U AA GameChanger use is under consideration for 2026 — confirm with Brent Dingsdale at coaching@ndbaseball.com.</p>`
      },
      {
        id: "fdi-18uaa-rainouts",
        insertAfterRule: "21",
        title: "18U AA — Rain-Out Procedure",
        badge: "18U AA Interlock",
        content: `
          <ol class="nl">
            <li>The <strong>home team must contact the visiting team within 72 hours</strong> to reschedule.</li>
            <li>The home team must offer a make-up date. If refused, a second date must be offered.</li>
            <li>If the visiting team refuses both dates, the game may be scored as a <strong>default win for the home team</strong>.</li>
            <li>If the home team refuses to provide any make-up date, the game may be scored as a <strong>default win for the visiting team</strong>.</li>
          </ol>
          <p class="note">Default wins are at the discretion of the Interlock Coordinator.</p>`
      },
      {
        id: "fdi-18uaa-umpires",
        insertAfterRule: "17",
        title: "18U AA — Umpires",
        badge: "18U AA Interlock",
        content: `<p>The <strong>home team is responsible for supplying umpires</strong>. Umpire interaction during Fraser Delta Interlock play is governed by <a href="#13-02" class="bcm-link">BC Minor Rule 13.02</a>. Violations of umpire interaction rules may result in ejection or suspension per applicable conduct provisions.</p>`
      },
      {
        id: "fdi-18uaa-playoffs",
        insertAfterRule: "29",
        title: "18U AA — Playoff Format & Awards",
        badge: "18U AA Interlock",
        content: `
          <div class="callout red">
            <p><strong>All teams qualify for and must participate in the playoffs.</strong> No team may blackout any June dates for tournaments. Complete by Father's Day.</p>
          </div>
          <ul class="rl">
            <li>Typically two tiered pools — round robin, top two play a final.</li>
            <li>Standings by winning percentage. Tie-breakers per <a href="#29-01" class="bcm-link">BC Minor Rule 29.01</a>.</li>
            <li><strong>Medallions</strong> to 1st place regular season team. <strong>Trophies</strong> to 1st and 2nd place in each pool playoff.</li>
            <li><strong>Team Fee (2026): $210/team</strong> — due before the start of the season.</li>
          </ul>`
      },
      {
        id: "fdi-18uaa-pitching",
        insertAfterRule: "24",
        title: "18U AA — Pitch Count Rules",
        badge: "18U AA Interlock",
        content: `<p>Pitch count rules follow <a href="#rule-24" class="bcm-link">BC Minor Rule 24: Pitching Rules</a> in full.</p>`
      },
      {
        id: "fdi-18uaa-fairplay",
        insertAfterRule: "25",
        title: "18U AA — Fair Play Rules",
        badge: "18U AA Interlock",
        content: `<p>Fair play rules follow <a href="#rule-25" class="bcm-link">BC Minor Rule 25: Fair Play Rule</a> in full.</p>`
      }
    ]
  }

,
  /* ═══════════════════════════════════════════════════════════
     9U — Tadpole (TABA Local)
     ═══════════════════════════════════════════════════════════ */
  "9u": {
    name: "9U — Tadpole",
    badge: "9U Tadpole",
    color: "#1e6b3a",
    group: "taba",
    description: "Spring 2026 · TABA Local Rules",

    overrides: {

      "31.03": {
        type: "differs",
        label: "9U TABA — Pitching Structure (Two Phases)",
        bcMinorSummary: "BC Minor Rule 31.03 allows player pitching from 42 or 46 feet, one inning per player, max 35 pitches. All players may only pitch 1 inning per game.",
        tabaSummary: "TABA uses a two-phase pitching structure split at the May long weekend. Before the May long weekend, coach/slinger pitches first 3; after, second-year players pitch first 3. In both phases, coach pitches the final 3. If the batter does not get a hit and a third strike is recorded, the batter is out.",
        content: `
          <div class="callout red">
            <p><strong>TABA 9U pitching has two phases separated by the May long weekend.</strong> The structure ensures all batters get a fair chance to put the ball in play while introducing player pitching progressively through the season.</p>
          </div>

          <div class="sub-rule">
            <div class="sub-rule-title">Phase 1 — Before May Long Weekend</div>
            <table>
              <thead><tr><th>Pitches</th><th>Who Pitches</th><th>If No Hit After 3 Pitches</th></tr></thead>
              <tbody>
                <tr><td class="hi">Pitches 1–3</td><td>The slinger (coach or designated helper)</td><td rowspan="2" style="vertical-align:middle;">If the batter has not made contact and pitch 6 is a third strike — <strong>batter is out</strong></td></tr>
                <tr><td class="hi">Pitches 4–6</td><td>Coach</td></tr>
              </tbody>
            </table>
            <p class="note">The slinger pitches from the standard 9U pitching distance. The batter gets up to 6 pitches total to put the ball in play.</p>
          </div>

          <div class="sub-rule">
            <div class="sub-rule-title">Phase 2 — After May Long Weekend</div>
            <table>
              <thead><tr><th>Pitches</th><th>Who Pitches</th><th>If No Hit After 3 Pitches</th></tr></thead>
              <tbody>
                <tr><td class="hi">Pitches 1–3</td><td>A <strong>second-year TABA player</strong> (player who played 9U the previous year)</td><td rowspan="2" style="vertical-align:middle;">If the batter has not made contact and pitch 6 is a third strike — <strong>batter is out</strong></td></tr>
                <tr><td class="hi">Pitches 4–6</td><td>Coach</td></tr>
              </tbody>
            </table>
            <p class="note">Second-year players pitch from the standard 9U pitching distance. First-year players do not pitch in Phase 2 — this is a development opportunity for returning players. <a href="#31-03" class="bcm-link">BC Minor Rule 31.03</a> pitch count and inning limits still apply to player pitching in Phase 2.</p>
          </div>

          <div class="callout navy">
            <p><strong>Rule summary for both phases:</strong></p>
            <ul class="rl">
              <li>Batter receives up to <strong>6 pitches total</strong> (3 from pitcher/slinger, then 3 from coach).</li>
              <li>If the batter makes contact at any point, normal play resumes.</li>
              <li>If the batter does not make contact and a <strong>third strike is recorded on pitch 6 (or earlier)</strong>, the batter is out.</li>
              <li>Foul balls on pitch 6 are not an out — the batter continues until a fair contact, a swing-and-miss third strike, or a called third strike.</li>
            </ul>
          </div>`
      }
    },

    additions: [
      {
        id: "taba-9u-pitching-overview",
        insertAfterRule: "31",
        title: "9U TABA — Pitching Structure Overview",
        badge: "TABA 9U Only",
        content: `
          <div class="callout blue">
            <p>TABA 9U uses a <strong>two-phase pitching structure</strong> through the season, designed to develop batting confidence early and introduce player pitching progressively.</p>
          </div>

          <div class="sub-rule">
            <div class="sub-rule-title">Phase 1 — Before May Long Weekend</div>
            <ul class="rl">
              <li>The <strong>slinger</strong> (a coach or designated helper) delivers the first <strong>3 pitches</strong>.</li>
              <li>If the batter has not made contact after 3 pitches, the <strong>coach</strong> delivers the next <strong>3 pitches</strong>.</li>
              <li>If the batter still has not made contact after all 6 pitches and a third strike is recorded — the <strong>batter is out</strong>.</li>
            </ul>
          </div>

          <div class="sub-rule">
            <div class="sub-rule-title">Phase 2 — After May Long Weekend</div>
            <ul class="rl">
              <li>A <strong>second-year TABA player</strong> (a player who played 9U the previous year) delivers the first <strong>3 pitches</strong>.</li>
              <li>If the batter has not made contact after 3 pitches, the <strong>coach</strong> delivers the next <strong>3 pitches</strong>.</li>
              <li>If the batter still has not made contact after all 6 pitches and a third strike is recorded — the <strong>batter is out</strong>.</li>
              <li>First-year players do not pitch in Phase 2.</li>
            </ul>
          </div>

          <div class="callout">
            <p><strong>In both phases:</strong> If the batter makes contact at any point, normal play resumes per <a href="#rule-31" class="bcm-link">BC Minor Rule 31</a>. Pitch count and inning limits from <a href="#31-03" class="bcm-link">Rule 31.03</a> apply to all player pitching in Phase 2.</p>
          </div>

          <p class="note">This rule has no equivalent in BC Minor Baseball Rule 31. It is a TABA-specific developmental rule. BC Minor Rule 31 governs all other aspects of 9U play.</p>`
      },
      {
        id: "taba-9u-bcminor-note",
        insertAfterRule: "1",
        title: "9U — Governing Rules Overview",
        badge: "TABA 9U Only",
        content: `
          <div class="callout red">
            <p><strong>Order of Precedence (highest to lowest):</strong></p>
            <ol class="nl">
              <li>TABA 9U Local Rules (this section)</li>
              <li><a href="#bcminor-rules-section" class="bcm-link">BC Minor Baseball Rules</a> — in particular <a href="#rule-31" class="bcm-link">Rule 31: 9U Specific Rules</a></li>
              <li>Official Rules of Baseball</li>
            </ol>
          </div>
          <p>All aspects of <a href="#rule-31" class="bcm-link">BC Minor Rule 31</a> apply to TABA 9U play unless specifically modified by a TABA local rule shown in this section. The primary TABA modification is the two-phase pitching structure — all other 9U rules follow BC Minor Rule 31 exactly.</p>`
      }
    ]
  }

};
