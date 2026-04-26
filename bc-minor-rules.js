/**
 * bc-minor-rules.js
 * ─────────────────
 * All 35 BC Minor Baseball rules as structured data.
 * Edit ONLY when BCMBA issues rule changes — typically once per year.
 *
 * Each rule has:
 *   id       {string}  — rule number, e.g. "1", "26"
 *   title    {string}  — rule title
 *   sections {Array}   — sub-rules, each with:
 *     id      {string} — sub-rule number, e.g. "1.01", "26.08"
 *     title   {string} — sub-rule title
 *     content {string} — HTML content
 *
 * Section `id` values are what taba-divisions.js references in `overrides`.
 */

window.BCMinorRules = [

  /* ══════════════════════════════════════════════════════════
     RULE 1 — Membership
     ══════════════════════════════════════════════════════════ */
  {
    id: "1",
    title: "Membership in BC Minor Baseball",
    sections: [
      {
        id: "1.01", title: "Definition of an Association",
        content: `<p>An executive committee, officers, or sponsoring organization who have been elected or appointed to foster, improve, and govern the game of baseball in their respective communities subject to the Constitution and By-Laws, Rules and Regulations as defined by the BCMBA and Baseball BC's SafeSport Policies.</p>`
      },
      {
        id: "1.02", title: "Annual Responsibilities of an Association",
        content: `<ol class="al">
          <li>An association shall apply annually for membership with the BCMBA on the membership application form furnished by the BCMBA.</li>
          <li>An association must submit a boundary description to the BCMBA as per Article XVIII (also see Rule 3).</li>
          <li>An association must submit the affiliation fees due to the BCMBA no later than <strong>April 1st</strong> of the current year. Associations who do not submit their membership application and affiliation fees by the due date may have the BCMBA Board bar that association and they will not be eligible to compete in post-season play.</li>
          <li>Associations must submit data for their entire registration of players including first and last name, the entire address with the postal code, gender, birth date, and division. Failure to provide this information by <strong>June 1st</strong> may result in the association being ineligible to participate in any level of summer play.</li>
        </ol>`
      },
      {
        id: "1.03", title: "Conditions of Membership",
        content: `<p>Annual Membership is granted to each association by BCMBA, subject to the following conditions:</p>
        <ol class="al">
          <li>The BCMBA Board of Directors has the authority, with the Association having the right of appeal, to withdraw or refuse membership for just cause by giving written notice to the presiding officers of the Association.</li>
          <li>Membership does not imply that in future seasons a new Association cannot make application for operation within a portion of the present boundaries of an existing Association.</li>
          <li>Members must be in good standing throughout the year. Good standing means meeting all requirements under Rule 1.02. Affiliation Fees are considered past due if unpaid for more than 30 days and all other monies to BCMBA are not more than 60 days past due.</li>
          <li>Members must have a functioning and up-to-date website.</li>
          <li>Members may NOT affiliate with any other registered baseball organization at the same time they are a member of BCMBA, with the exception of Challenger Baseball division.</li>
        </ol>`
      },
      {
        id: "1.04", title: "Conditions of Membership for New Associations",
        content: `<ol class="al">
          <li><strong>Application:</strong> An application to join BCMBA must demonstrate a constitution, an executive, and a voting membership.</li>
          <li><strong>New Boundaries:</strong> All new associations joining BCMBA must establish a new boundary within BCMBA in consultation with BCMBA and existing member association(s) whose current boundaries would be affected.</li>
          <li><strong>Programs Offered:</strong> All BCMBA member associations must offer BCMBA baseball programs for all age divisions for which they currently run any baseball program. New and existing members who do not currently meet this requirement will have a maximum one (1) year after affiliating with BCMBA to comply.</li>
          <li>New or existing BCMBA associations that do not offer programming at all age levels will have their catchment area at those age levels deemed open territory. Players from these areas will not be deemed imports but will require a release.</li>
          <li>Rule 1.04(E) — Repealed AGM 2023.</li>
          <li>Players impacted by boundary changes due to new affiliations may be permitted to remain in their former association by creation of a "grandfather" player list created at the time of new affiliation, pursuant to rule 3.02.</li>
        </ol>`
      },
      {
        id: "1.05", title: "Right to Field Teams",
        content: `<p>Each Member Association should have the opportunity (but not the obligation) to offer all BCMBA-recognized divisions sanctioned by BCMBA.</p>`
      },
      {
        id: "1.06", title: "Extensions",
        content: `<p>Extensions of the date of filing of the Membership Application form may be considered and granted upon written application to the BCMBA, in the case of new Associations still in the process of organization or those Associations renewing their memberships who are facing unusual organization problems.</p>`
      },
      {
        id: "1.07", title: "Internal Association Dispute Resolution Process",
        content: `<p>Members must establish an Internal Dispute Resolution Process which must include a process to appeal a decision, to resolve coach, player, fan, and parent concerns and disputes at the member association level.</p>
        <p>All concerns initiated by the Local Association must follow the Local Association's Internal Dispute Resolution. BCMBA will not become involved in internal matters of the Local Association unless requested to do so by the Association President or designate.</p>`
      },
      {
        id: "1.08", title: "Playing Outside British Columbia",
        content: `<p>All BCMBA teams are reminded that they may not have adequate insurance coverage when playing outside of British Columbia. Teams travelling outside the province should visit BC Minor Baseball's website for information on how to obtain insurance coverage.</p>`
      },
      {
        id: "1.09", title: "Risk Management",
        content: `<p>Each association must establish a Risk Management process. Every volunteer, coach, employee and/or contractor who at any time could be expected to have direct contact with any minor aged person must have on file with their association the results of a valid Criminal Record Check (CRC).</p>
        <p class="note">This rule does not apply to umpires.</p>`
      },
      {
        id: "1.10", title: "Independent Teams",
        content: `<p>BC Minor Baseball shall identify independent teams (defined as teams who do not belong to established leagues) who recruit and/or poach BC Minor Baseball players and declare that associations shall not play exhibition games against such teams. Independent teams identified by BC Minor Baseball shall not play in BC Minor Baseball sanctioned tournaments.</p>
        <p class="note">Approved Ruling: BC Minor Baseball teams are permitted to play tournament games against identified independent teams in non-BC Minor Baseball sanctioned tournaments. Not all independent teams are covered under this rule.</p>`
      },
      {
        id: "1.11", title: "Conflict of Interest Policy",
        content: `<p>All employees and volunteers of BC Minor Baseball are expected to arrange their private affairs in a manner that will prevent conflicts of interest from arising or appearing to arise. They should not place themselves in a position where they are under obligation to any person who might benefit from special consideration or favour on their part or seek in any way to gain special treatment from them.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 2 — Affiliation Fees
     ══════════════════════════════════════════════════════════ */
  {
    id: "2",
    title: "Affiliation Fees",
    sections: [
      {
        id: "2.01", title: "Per Player Fees",
        content: `<p>Affiliation fees are determined as per By-Laws, Article XIII and are set as follows:</p>
        <table>
          <thead><tr><th>Division</th><th>Fee per Player</th></tr></thead>
          <tbody>
            <tr><td>Challenger Baseball</td><td>$4.00</td></tr>
            <tr><td>5U</td><td>$3.50</td></tr>
            <tr><td>7U</td><td>$17.00</td></tr>
            <tr><td>9U</td><td>$17.50</td></tr>
            <tr><td class="hi">11U</td><td class="hi">$20.00</td></tr>
            <tr><td>13U</td><td>$23.00</td></tr>
            <tr><td>15U</td><td>$25.50</td></tr>
            <tr><td>18U</td><td>$29.50</td></tr>
            <tr><td>26U</td><td>$18.50</td></tr>
            <tr><td>Coaches</td><td>$12.00 per coach</td></tr>
          </tbody>
        </table>`
      },
      {
        id: "2.02", title: "Per Single Season Team Fees",
        content: `<p>13U AAA, 15U AA/AAA and 18U AAA/CP Teams — <strong>$750.00</strong></p>`
      },
      {
        id: "2.03", title: "Per Summer League Team Fees (due July 1)",
        content: `<ul class="rl">
          <li>10U, 11U, 13U A, 15U A — <strong>$250.00</strong></li>
          <li>13U AA, 18U AA — <strong>$350.00</strong></li>
        </ul>`
      },
      {
        id: "2.04", title: "Repealed",
        content: `<div class="repealed">Rule 2.04 — Repealed 2025 AGM.</div>`
      },
      {
        id: "2.05", title: "Per Provincial (all divisions)",
        content: `<p>All teams qualifying for a provincial tournament will pay an additional <strong>$750.00</strong> entry fee to the provincial host prior to being allowed to participate. In the 11U Division, part of this fee is to cover the cost of 3rd place (bronze) medals.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 3 — Association Boundaries
     ══════════════════════════════════════════════════════════ */
  {
    id: "3",
    title: "Association Boundaries",
    sections: [
      {
        id: "3.01", title: "General",
        content: `<ol class="al">
          <li>Each Association will provide confirmation of their current boundaries to the Boundaries Chair no later than the BCMBA AGM and BCMBA will identify all boundaries by <strong>February 1st</strong> of each year.</li>
          <li>All association boundaries will be posted on the BCMBA website and sent to all member associations. In the event of any overlapping boundaries or boundary disputes, the BCMBA will seek a resolution with the affected associations prior to March 1st.</li>
          <li>It is expected that each person residing within the Association boundaries, as approved by the BCMBA, will be given an opportunity to become a player candidate for the Association.</li>
          <li>Unless specifically stated otherwise, the center of the street shall be considered the actual dividing line when streets are used as boundaries.</li>
          <li>Maps must indicate specific boundaries such as streets, railroad tracks, rivers, etc., or school districts, postal zones, city limits, or similarly specified areas. A definition such as "five-mile radius" is not acceptable.</li>
        </ol>`
      },
      {
        id: "3.02", title: "Grandfathering",
        content: `<p>BC Minor Baseball supports the concept of grandfathering as a method of resolving boundary disputes, particularly in areas where boundaries are changed. A grandfather agreement must be approved by the associations involved and BC Minor Baseball. Players included in grandfather clauses do not require a release and do not count as import players.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 4 — Competitive Levels of Play
     ══════════════════════════════════════════════════════════ */
  {
    id: "4",
    title: "BC Minor Baseball Competitive Levels of Play",
    sections: [
      {
        id: "4.01", title: "Single Seasons",
        content: `<p>BC Minor Baseball Association will administer single season leagues and provincial championships for the following divisions: 13U AAA · 15U AA · 15U AAA · 18U AAA · 18U College Prep.</p>
        <p>A single season begins with competitive games counting toward division standings in April and ends at the Provincial Tournament at the discretion of the division director.</p>`
      },
      {
        id: "4.02", title: "Spring Seasons",
        content: `<p>It is the responsibility of each association to organize and administer local interlock or house leagues for spring play.</p>`
      },
      {
        id: "4.03", title: "Summer Seasons",
        content: `<p>BC Minor Baseball will administer summer season leagues and provincial championships for: 10U · 11U A · 11U AA · 11U AAA · 13U A East · 13U A West · 13U AA · 15U A · 18U AA.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 5 — Age Requirements
     ══════════════════════════════════════════════════════════ */
  {
    id: "5",
    title: "Age Requirements",
    sections: [
      {
        id: "5.01", title: "Cut-off Dates/Times",
        content: `<p>Age limitation cut-off date is 11:59 p.m. as of <strong>December 31st</strong> of the current year.</p>
        <p class="note">Exception: 18U AAA/18U CP players must be 18 years of age or younger as of August 15th and enrolled in full-time secondary school (with approval from the Eligibility Chair).</p>`
      },
      {
        id: "5.02", title: "Age by Division",
        content: `<table>
          <thead><tr><th>Division</th><th>Max Age (end of year)</th><th>Min Age (start of year)</th></tr></thead>
          <tbody>
            <tr><td>26U</td><td>26</td><td>18</td></tr>
            <tr><td>18U</td><td>18</td><td>15</td></tr>
            <tr><td>15U</td><td>15</td><td>13</td></tr>
            <tr><td>13U</td><td>13</td><td>11</td></tr>
            <tr><td class="hi">11U</td><td class="hi">11</td><td class="hi">9</td></tr>
            <tr><td>10U</td><td>10</td><td>8</td></tr>
            <tr><td>9U</td><td>9</td><td>7</td></tr>
            <tr><td>7U</td><td>7</td><td>5</td></tr>
            <tr><td>5U</td><td>5</td><td>3</td></tr>
            <tr><td>Challenger</td><td>Open</td><td>Open</td></tr>
          </tbody>
        </table>`
      },
      {
        id: "5.03", title: "Proof of Age — Acceptable Documents",
        content: `<ol class="al">
          <li>Dates of birth shall be certified by birth certificates, baptismal certificates, hospital certificates, religious/legal documents, driver's license, Canadian Passport, or immigration documents, which should be presented to a League official prior to the League's first regularly scheduled game.</li>
          <li>Photostat copies of any of the above certificates are acceptable.</li>
          <li>Documents must be legible and bear the signature of an authorized official of the issuing authority.</li>
          <li>Notarized statements from parents or guardians are <strong>not acceptable</strong>.</li>
          <li>For all Provincial Championships, a Coach or Team Manager must bring proof of age for every team member, to be presented at the coaches' meeting before the start of the tournament upon request.</li>
        </ol>`
      },
      {
        id: "5.04", title: "Overage Players",
        content: `<p>Any over-aged player who lacks baseball ability due to a physical handicap may play in one lower age division at the discretion of the Association President or Player Agent provided:</p>
        <ol class="al">
          <li>The Association applies in writing to the BCMBA Player Eligibility Chair providing full particulars.</li>
          <li>Written approval has been obtained from the BCMBA Player Eligibility Chair.</li>
          <li>Overage players will not be permitted to pitch.</li>
          <li>Overage players will not be permitted to play summer.</li>
        </ol>`
      },
      {
        id: "5.05", title: "Permanent Move Up",
        content: `<p>Any under-aged player who has the baseball ability may play in one higher age division provided:</p>
        <ol class="al">
          <li>The Association applies in writing to the BCMBA Player Eligibility Chair providing full particulars.</li>
          <li>Written approval has been obtained from the BCMBA Player Eligibility Chair prior to June 1st.</li>
          <li>Only 9U player(s) that an Association moves up to 11U for the Spring Season are eligible to participate at any level of 10U/11U Summer Season.</li>
          <li>Only 9U player(s) that an Association moves up to 11U for the Summer season only may participate only at the 10U level.</li>
          <li>Once approved for a Permanent Move Up, the player will be allowed to pitch and will be governed by the rules/limits of the division they are approved to play in.</li>
        </ol>`
      },
      {
        id: "5.06", title: "Temporary Call Up",
        content: `<p>The maximum number of games a player may play in an older age group (including league, exhibition, tournament, and summer league) is as follows:</p>
        <table>
          <thead><tr><th>Player's Division</th><th>Max Games Up</th><th>Division(s) Allowed</th></tr></thead>
          <tbody>
            <tr><td class="hi">9U</td><td class="hi">5 games + 1 tournament</td><td class="hi">10U and/or 11U only</td></tr>
            <tr><td>10U &amp; 11U</td><td>3 games + 1 tournament</td><td>13U only</td></tr>
            <tr><td>13U</td><td>4 games + 1 tournament</td><td>15U only</td></tr>
            <tr><td>15U</td><td>8 games</td><td>18U only</td></tr>
            <tr><td>18U</td><td>12 games</td><td>Higher level</td></tr>
          </tbody>
        </table>
        <p class="note">Players being called up will not be allowed to pitch, except 18U may pitch in 26U. If a player exceeds the number of games allowed, the player cannot return to their age division for the balance of the year, and the Association may face a penalty of up to $250 per game played up.</p>`
      },
      {
        id: "5.07", title: "Overage Players for 18U AA",
        content: `<p>Overage players will be permitted within the 18U AA Division (Spring Season only) provided:</p>
        <ol class="al">
          <li>Overage players must be 18 years of age on January 1st of the current baseball season.</li>
          <li>Overage players must receive written permission from BC Minor Baseball before being allowed to participate.</li>
          <li>Each team will be permitted a maximum of two (2) overage players per team, if required to achieve a roster of fourteen (14) players.</li>
          <li>Overage players are not permitted to participate in Summer Baseball.</li>
          <li>Overage players will not be permitted to pitch.</li>
          <li>Overage players cannot have played 18U AAA, 18U College Prep, or Premier in the previous season.</li>
        </ol>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 6 — Player Eligibility & Release Procedure
     ══════════════════════════════════════════════════════════ */
  {
    id: "6",
    title: "Player Eligibility — Release Procedure",
    sections: [
      {
        id: "6.01", title: "Residence Eligibility",
        content: `<p>Only persons of eligible age whose residence (as determined by the residence of their parents or legal guardians, or by school records) is within the boundaries determined by the Association and approved by the BCMBA shall be eligible for active participation. If residence is not in an area currently covered by a BCMBA Member Association, the player may play in any association.</p>`
      },
      {
        id: "6.02", title: "Permission to Play Outside Boundaries",
        content: `<p>A player may be eligible to play in an association outside the boundaries of their residence to try out for a higher-level team not offered by the releasing association. In order for this to apply, the candidate must make the roster of a team in another Association at the higher level. If not successful, they will return to the Association of residence.</p>`
      },
      {
        id: "6.03", title: "Obtaining Releases",
        content: `<p>Written approval in the form of the BCMBA Player Movement Form must be obtained from the ruling Association executive. The completed Player Movement Form agreed to and signed by two Association presidents must be submitted to the BCMBA Player Eligibility Chair for approval. This release shall not be considered valid until an approved copy has been returned to the Receiving Association by BCMBA.</p>
        <p>Player movement application deadlines: Single Season — April 1st. Spring Season — April 1st. Summer Season — July 1st.</p>
        <p class="note">An Association using any player prior to approval of that player's Application for Player Movement will be fined a minimum of $200.00 per player and may be subject to suspension. The maximum fine under this clause is $3,000.</p>`
      },
      {
        id: "6.04", title: "Completing an Age Division",
        content: `<p>A player who changes addresses and moves outside the boundaries of their current association is permitted to continue playing for their previous association until they reach a new age division.</p>`
      },
      {
        id: "6.05", title: "Release Dates",
        content: `<p>A yearly release shall be in effect from <strong>January 1st through August 31st</strong>. A Summer release is for the Summer Season only. Player Movement must be signed by the Presidents of both Associations and email approval from the BCMBA Player Eligibility Chairperson.</p>
        <ul class="rl">
          <li>Single Season Teams: on or before April 1st.</li>
          <li>Spring Leagues: on or before April 1st.</li>
          <li>Summer Leagues: on or before July 1st.</li>
        </ul>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 7 — Single Season Procedures
     ══════════════════════════════════════════════════════════ */
  {
    id: "7",
    title: "Single Season Procedures: 13U AAA, 15U AA, 15U AAA & 18U AAA",
    sections: [
      { id: "7.01", title: "Declaration Dates", content: `<p>Refer to the BC Minor Baseball rulebook for current declaration dates for single season divisions.</p>` },
      { id: "7.02", title: "Submission of Rosters", content: `<p>Rosters must be submitted to BCMBA as per the schedule outlined in the full BC Minor Baseball rulebook for the applicable single season division.</p>` },
      { id: "7.03", title: "Roster Changes", content: `<p>Roster changes are subject to the rules and deadlines set out in the full BC Minor Baseball rulebook for each single season division.</p>` },
      { id: "7.04", title: "Deletion of Players from Roster", content: `<p>Players deleted from a roster are subject to release procedures as outlined in the full BC Minor Baseball rulebook.</p>` },
      { id: "7.05", title: "Player Eligibility — Provincial Championships", content: `<p>Players must meet the eligibility requirements outlined in the full BC Minor Baseball rulebook to participate in Provincial Championships for single season divisions.</p>` },
      { id: "7.06", title: "Number of Players", content: `<p>Refer to the BC Minor Baseball rulebook for roster size requirements applicable to each single season division.</p>` },
      { id: "7.07", title: "Boundaries: 18U AAA Only", content: `<p>18U AAA has no boundary restrictions. Refer to the full BC Minor Baseball rulebook for details.</p>` },
      { id: "7.08", title: "Required Rest", content: `<p>All pitching rest rules apply as per Rule 24. Refer to the full BC Minor Baseball rulebook for any single-season specific rest provisions.</p>` }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 8 — Spring Play
     ══════════════════════════════════════════════════════════ */
  {
    id: "8",
    title: "Spring Play",
    sections: [
      {
        id: "8.01", title: "Player Eligibility",
        content: `<p>Each person residing within the Association's boundaries, as approved by BCMBA, is eligible for player selection for that association. 13U, 15U A, and 18U AA spring teams can have a maximum of <strong>3 players</strong> who do not reside within the boundaries of their Association on their roster.</p>`
      },
      {
        id: "8.02", title: "Notice of Tiered Intentions",
        content: `<p>Associations operating a tiered system in any division must provide written notice to BCMBA of their intentions, clearly indicating the division, number of teams to be tiered at each level (AAA, AA, A), and the interlock they intend to compete in. This written notice is due to BCMBA <strong>14 days prior</strong> to the start of the regular season.</p>`
      },
      {
        id: "8.03", title: "Violations",
        content: `<p>Tiered associations who do not comply with Rule 8 will not be eligible to compete in post-season play in the age division in which the violation has occurred.</p>`
      },
      { id: "8.04", title: "5U", content: `<p>Tiered teams not permitted.</p>` },
      { id: "8.05", title: "7U", content: `<p>Tiered teams not permitted.</p>` },
      { id: "8.06", title: "9U", content: `<p>Tiered teams not permitted.</p>` },
      {
        id: "8.07", title: "11U",
        content: `<p>Associations are allowed to tier internally for 11U, provided they do not play in league games or tournaments outside of their association for the spring season. Programs such as MSET and Prospects are permitted; however, associations may not do both tiering and the MSET or Prospects programs.</p>
        <p>Associations must notify BCMBA of their intentions by <strong>April 1st</strong> before the start of each spring season.</p>`
      },
      {
        id: "8.08", title: "13U",
        content: `<p>Tiered teams permitted. Registered players must be divided through a common draft and created as evenly as possible. Associations with multiple 13U AA teams must submit president-signed rosters by <strong>April 1st</strong> each year to the Division Chair.</p>`
      },
      { id: "8.09", title: "15U", content: `<p>Tiered teams permitted. Refer to the full BC Minor Baseball rulebook for eligibility thresholds and requirements.</p>` },
      { id: "8.10", title: "18U", content: `<p>Tiered teams permitted. Associations may choose to field any number of AAA or AA teams.</p>` }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 9 — Summer Play Procedures
     ══════════════════════════════════════════════════════════ */
  {
    id: "9",
    title: "Summer Play Procedures",
    sections: [
      {
        id: "9.01", title: "Player Eligibility",
        content: `<p>To be eligible for summer play and Provincial Championships a player must:</p>
        <ol class="al">
          <li>Be a registered player in an Association's spring program.</li>
          <li>Be listed on the "Team Registration Form."</li>
          <li>Have participated in at least <strong>one-half (½) of their team's spring games</strong> in the Division Spring League, unless in attendance at school (boarding), or unless injury or illness prohibited them from playing (Doctor's certificate required).</li>
          <li>Have participated in one-half (½) of their team's summer league or zone schedule to be eligible for provincial tournament competition, unless injury or illness prohibited them (Doctor's certificate required).</li>
        </ol>
        <p class="note">A player who has played one-half of their team's games and has moved within the boundaries of another Association during the current season will be eligible for tournament competition with the Association with which they were initially registered. A player may play on only one tournament team in a calendar year at the same level.</p>`
      },
      {
        id: "9.02", title: "Right to Participate",
        content: `<p>Each affiliated Association in good standing is eligible to participate in post-season tournament competition.</p>`
      },
      {
        id: "9.03", title: "Declaration Dates",
        content: `<p>Each Association wishing to enter a team into post-season play (summer league, zone, or provincial) must submit their intention in writing to BCMBA prior to <strong>June 15</strong> and must submit their all-star entry fee for each team to BCMBA by <strong>July 1</strong>.</p>
        <p class="note">Any Association who commits to playing in a summer program and withdraws after July 1st may be fined $250.00.</p>`
      },
      {
        id: "9.04", title: "Number of Teams Required",
        content: `<p><strong>11U and 10U Summer Play:</strong></p>
        <ul class="rl">
          <li>For 11U AA and AAA, players cannot be 12 by December 31st of the current playing year.</li>
          <li>Only 11U registered players who have played in the 11U Division Spring League may participate.</li>
          <li><strong>AAA:</strong> Associations with 96 or more registered 11U spring players.</li>
          <li><strong>AA:</strong> Associations with 49–95 registered players.</li>
          <li><strong>A:</strong> Associations with fewer than 49 registered players (may request to compete in AAA).</li>
        </ul>
        <p>For any 11U summer team, a request may be made to the 11U Chair to have the team compete at an appropriate level other than the one Rule 9.04 places them.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 10 — Managing and Coaching
     ══════════════════════════════════════════════════════════ */
  {
    id: "10",
    title: "Managing and Coaching",
    sections: [
      {
        id: "10.01", title: "Age",
        content: `<p>Managers and coaches should be of the legal age of <strong>nineteen (19)</strong>. However, in the event underage managers and coaches are to be utilized, the Association executive must satisfy itself that these managers and/or coaches display the necessary qualifications to be in full control of their team.</p>`
      },
      {
        id: "10.02", title: "General",
        content: `<ol class="al">
          <li>Two coaches may be used on the baseline as base coaches.</li>
          <li>Should only one coach be in attendance, only eligible players in uniform may be used as the other base coach.</li>
          <li>A coach or coaches may not switch coaching boxes during an inning.</li>
          <li>Players, managers, and coaches must remain in the dugouts, on the benches or in the prescribed areas throughout the game.</li>
          <li>Cell phones are not permitted to be used on the field during play. Cell phones may be used in the dugout/bench area for medical emergencies and other non-game related purposes.</li>
        </ol>`
      },
      {
        id: "10.03", title: "Field Decorum",
        content: `<p>Managers and coaches must display leadership and sportsmanlike conduct at all times.</p>`
      },
      {
        id: "10.04", title: "Number of Coaches",
        content: `<p>There is no limit to the number of coaches that may be on a roster. However, the number of coaches allowed on a line-up card for a Zone qualifier or Provincial Championship is <strong>four (4)</strong>. If a team has more than four (4) coaches on their roster prior to a Zone qualifier or Provincial Championship, they must declare the four (4) that will attend as official team coaches.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 11 — Coaching Development and Training
     ══════════════════════════════════════════════════════════ */
  {
    id: "11",
    title: "Coaching Development and Training",
    sections: [
      {
        id: "11.01", title: "Coaching Development",
        content: `<p>BCMBA will develop, provide and access coaching initiatives from year to year correlated to BCMBA programming generally. Costs and coaching program outlines for the coming season will be established and provided by BCMBA to the Affiliated Associations prior to the Annual General Meeting each year.</p>`
      },
      {
        id: "11.02", title: "Coaching Certification",
        content: `<div class="callout red"><p>⚠ <strong>Article XX Temporary Interpretation</strong> — The coaching certification requirements below reflect an active interpretation effective February 23, 2026, which remains in effect until ratified at the next AGM.</p></div>
        <table>
          <thead><tr><th>Division</th><th>Certification Requirement</th></tr></thead>
          <tbody>
            <tr><td class="hi">11U (ALL)</td><td class="hi">11U Trained — All coaches</td></tr>
            <tr><td>13U A</td><td>One coach 13U Trained; all others Coach Initiation in Sport + Coach Initiation in Baseball (online)</td></tr>
            <tr><td>13U AA / AAA</td><td>One coach 13U Certified; all others 13U Trained</td></tr>
            <tr><td>15U A</td><td>One coach 15U Trained; all others 13U in training</td></tr>
            <tr><td>15U AA / AAA</td><td>One coach 15U Certified; all others 15U Trained</td></tr>
            <tr><td>18U AA / AAA / CP</td><td>One coach 16+ Certified; all others 16+ Trained</td></tr>
          </tbody>
        </table>
        <p><strong>All Coaches — Safe Sport eLearning is mandatory.</strong></p>
        <p>NCCP training deadlines: April 1st — all coaches must be "In Training." June 1st — all coaches must have completed NCCP requirements for the division.</p>
        <p class="note">Failure to comply with training requirements will result in the coach being ineligible to be on the field.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 12 — Non-Affiliated Leagues
     ══════════════════════════════════════════════════════════ */
  {
    id: "12",
    title: "Participation in Non-Affiliated Leagues or Associations",
    sections: [
      {
        id: "12.01", title: "Playing in Other Baseball Programs",
        content: `<p>Players selected for any Association team will be prohibited from participating on any team in another baseball program. The primary purpose of this rule is to prevent possible injury to a young ball player, particularly in the case of pitchers.</p>
        <p class="note">Approved Ruling: A baseball team/program attached to a public or private educational institution (school) is not interpreted as a baseball program for the purpose of this rule. Exception: 15U AAA players may practice with PBL programs at the discretion of their home association.</p>`
      },
      {
        id: "12.02", title: "15U and 18U Exceptions",
        content: `<ol class="al">
          <li>A 15U or 18U player may be on the roster of one 15U or 18U team.</li>
          <li>A player on an 18U AAA Team Roster may not play 18U AA at any time.</li>
          <li>A player on an 18U AA Roster may play on a call-up basis at 18U AAA. Should that player play more than five games at 18U AAA in one calendar month, they may not return to 18U AA at any point in the season.</li>
          <li>A 15U or 18U player may temporarily play on a second team for the purposes of skills evaluation by post-secondary or Baseball Canada evaluation staff, with written approval of their BCMBA Head Coach, for one tournament or four games only during the current season.</li>
        </ol>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 13 — Conduct
     ══════════════════════════════════════════════════════════ */
  {
    id: "13",
    title: "Conduct for Managers, Coaches, Players, Parents and Spectators",
    sections: [
      {
        id: "13.01", title: "BCMBA Code of Conduct",
        content: `<div class="callout red"><p>The BCMBA Code of Conduct applies to all managers, coaches, players, parents, and spectators at all BCMBA events. Violations are subject to suspension, fines, and other disciplinary action administered by the BCMBA Discipline Committee.</p></div>`
      },
      {
        id: "13.20", title: "Disciplinary Direction for Corrective Measures",
        content: `<p>Where the Discipline Chair deems it appropriate, the Discipline Chair may direct an LSO Official, Coach, Player, or Spectator to:</p>
        <ol class="al">
          <li>Undertake a recommended Conflict Resolution Process.</li>
          <li>Conduct Training as required to facilitate safe play.</li>
          <li>Complete a review of any required section of the Rule Book.</li>
          <li>Complete a written apology.</li>
        </ol>`
      },
      {
        id: "13.21", title: "Provincial Championship Discipline",
        content: `<p>Discipline ejections of a coach, manager, player, parent, or other team official during a Provincial Championship do not carry an automatic suspension and are instead reviewed by the BCMBA Director in charge of the Championship who will determine if a suspension is warranted.</p>`
      },
      {
        id: "13.22", title: "Appeals",
        content: `<p>Any portion of Rule 13 may be appealed pursuant to Rule 16.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 14 — Director Power to Intervene
     ══════════════════════════════════════════════════════════ */
  {
    id: "14",
    title: "BCMBA Director Power to Intervene",
    sections: [
      {
        id: "14.01", title: "Power to Intervene",
        content: `<p>In the event that at any BCMBA sanctioned event an elected BCMBA director feels that an umpire(s) has allowed a manager, coach, player, or parent to persist in violating the BCMBA Code of Conduct without taking appropriate actions, the Director may identify himself to the participants and issue one warning to the offenders in consultation with the umpire(s). If the offences continue and the umpire(s) do not act, the Director may remove the offender(s) from the game.</p>
        <p>This authority extends to any tournament director or umpire supervisor at any BCMBA sanctioned tournament hosted by a local association, and to local association executive members at any BC Minor Baseball sanctioned event.</p>`
      },
      {
        id: "14.02", title: "Reporting",
        content: `<p>Should Rule 14.01 be invoked, a written report must be filed with the governing League body and a copy forwarded to the Board of Directors of BCMBA outlining: names of teams and coaches involved, name of umpire(s), offender(s) involved, violations that occurred and actions taken, and recommended action if any.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 15 — Sponsorship & Fundraising
     ══════════════════════════════════════════════════════════ */
  {
    id: "15",
    title: "Sponsorship & Fundraising",
    sections: [
      {
        id: "15.01", title: "Standards",
        content: `<p>Teams or Leagues should be sponsored only by those organizations, firms, or companies whose activities or products are not detrimental to the welfare of youth. Specifically, no firm or company whose advertisements reflect the sale of tobacco products shall be permitted to sponsor the program, League, or team.</p>
        <p>Any advertising reflecting the sale of alcoholic beverages would need to be approved and deemed acceptable and responsible by the BCMBA Board. Failure to comply will result in the association being liable for a <strong>$250.00 fine</strong>.</p>`
      },
      {
        id: "15.02", title: "Fundraising",
        content: `<p>The BCMBA may seek the help of outside fundraising sources when deemed prudent whether for itself or for affiliated associations.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 16 — Appeals
     ══════════════════════════════════════════════════════════ */
  {
    id: "16",
    title: "Appeals",
    sections: [
      {
        id: "16.01", title: "Appeal Process",
        content: `<p>An Appeal may be made by a coach, an Association, or a parent (when it involves the eligibility of their child) and must be received by the BCMBA President from an Affiliated Association President within <strong>48 hours</strong> of the Affiliated Association President having received the original ruling from BCMBA.</p>
        <ol class="al">
          <li>Upon receiving an Appeal, the BCMBA President will form an Appeal Committee of three directors including a Chair from the Executive Committee who was not directly involved in the original decision. This committee will render a decision in writing within four days.</li>
          <li>In exceptional circumstances, the President may choose to have the entire board of directors hear an appeal.</li>
          <li>Any decision made by the entire board of directors is final and cannot be appealed.</li>
          <li>An appeal may be based on: process; an alleged misinterpretation or misapplication of a rule; an alleged error in findings; or, in the case of discipline, the severity of the consequence.</li>
          <li>If an appeal is denied the association shall be invoiced a <strong>$100 administration fee</strong>.</li>
        </ol>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 17 — Umpires
     ══════════════════════════════════════════════════════════ */
  {
    id: "17",
    title: "Umpires",
    sections: [
      {
        id: "17.01", title: "Qualified Umpires",
        content: `<p>Associations must assign qualified and competent umpires to all games. A <strong>3-person umpire system</strong> is recommended for semi-finals and finals at provincial championships.</p>`
      },
      {
        id: "17.02", title: "Umpire Authority & Pitch Count",
        content: `<p>Umpires have full authority over the conduct of games and may eject any participant who persists in violating the Code of Conduct. All ejections must be reported.</p>
        <div class="callout red"><p><strong>Under no circumstances will umpires be expected to track or enforce pitch count.</strong> Pitch count tracking is the responsibility of managers.</p></div>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 18 — Playing Field Dimensions
     ══════════════════════════════════════════════════════════ */
  {
    id: "18",
    title: "Playing Field Dimensions",
    sections: [
      {
        id: "18.01", title: "Specific Dimensions by Division",
        content: `<table>
          <thead><tr><th>Measurement</th><th>7U</th><th>9U</th><th>10U &amp; 11U</th><th>13U</th><th>15U</th><th>18U</th></tr></thead>
          <tbody>
            <tr><td>Bases</td><td>50 ft</td><td>60 ft</td><td class="hi">60 ft</td><td>70 ft</td><td>80 ft</td><td>90 ft</td></tr>
            <tr><td>Pitching distance</td><td>36 ft</td><td>42/46 ft</td><td class="hi">46 ft</td><td>48 ft</td><td>54 ft</td><td>60½ ft</td></tr>
            <tr><td>Batter's box</td><td>3×6</td><td>3×6</td><td class="hi">3×6</td><td>3×6</td><td>3×6</td><td>4×6</td></tr>
            <tr><td>Foul lines</td><td>150–200</td><td>150–200</td><td class="hi">180–200</td><td>200–225</td><td>245–270</td><td>285–320</td></tr>
            <tr><td>Mound height</td><td>6 in</td><td>6 in</td><td class="hi">8 in</td><td>10 in</td><td>10 in</td><td>10 in</td></tr>
          </tbody>
        </table>`
      },
      {
        id: "18.02", title: "Fence Top Markers",
        content: `<p>Any fence top marker band on any outfield fence is considered part of the fence and therefore part of the playing field. If a ball hits any part of the outfield fence (including a top marker band) and goes over, it shall be a home run, unless the ball hit the ground first (ground rule double). If the ball hits the marker band and bounces back into the field of play, the ball is in play.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 19 — Equipment
     ══════════════════════════════════════════════════════════ */
  {
    id: "19",
    title: "Equipment",
    sections: [
      { id: "19.01", title: "Athletic Support/Cup", content: `<p>Recommended for all players. <strong>Mandatory for catchers in all divisions.</strong></p>` },
      {
        id: "19.02", title: "Helmets",
        content: `<p>All batters, on-deck batters, base runners, and players used as base coaches must wear <strong>double ear flap helmets</strong> providing protection to the temple, ears, base of skull, and top of head. Skull caps and wraparound headgear are not permitted.</p>
        <p>For divisions 13U and younger, all player helmets must have a chin strap or have been manufactured with a C-flap (chin protector) and not contain the snaps for a chin strap.</p>`
      },
      {
        id: "19.03", title: "Catcher's Equipment",
        content: `<p>Mandatory for all catchers: full catcher's helmet or skull cap, chest protector, shin guards, face mask with throat protector, and athletic supporter with cup. Required in all practice and warm-up situations. Coaches must wear at least a mask in all practice and warm-up situations. Associations not enforcing this rule will be subject to a fine.</p>`
      },
      {
        id: "19.04", title: "Bats",
        content: `<table>
          <thead><tr><th>Division</th><th>Max Length</th><th>Max Diameter</th><th>Drop / Stamp Required</th></tr></thead>
          <tbody>
            <tr><td>7U</td><td>30 in</td><td>2⅝ in</td><td>USABB or BPF 1.15</td></tr>
            <tr><td>9U</td><td>30 in</td><td>2⅝ in</td><td>USABB or BPF 1.15</td></tr>
            <tr><td class="hi">10U &amp; 11U</td><td class="hi">32 in</td><td class="hi">2¾ in</td><td class="hi">USSSA 1.15 BPF or USA stamp</td></tr>
            <tr><td>13U</td><td>32 in</td><td>2¾ in</td><td>−10 max drop, BPF 1.15 or USABB</td></tr>
            <tr><td>15U A/AA</td><td>—</td><td>2¾ in</td><td>−10 max drop</td></tr>
            <tr><td>15U AAA</td><td>—</td><td>—</td><td>−10 or −3 BBCOR; Wood/Bamboo also OK</td></tr>
            <tr><td>18U AA</td><td>—</td><td>—</td><td>−3 BBCOR</td></tr>
            <tr><td>18U AAA/CP</td><td>—</td><td>—</td><td>Wood/Bamboo or −3 BBCOR</td></tr>
          </tbody>
        </table>
        <p>Wood, bamboo, and wood composite bats are permitted in all divisions.</p>`
      },
      {
        id: "19.05", title: "Ball",
        content: `<p>The ball must weigh not less than 5 nor more than 5¼ ounces avoirdupois, and measure not less than 9 nor more than 9¼ inches in circumference. A soft or resilient ball is recommended for 7U and 9U. A regulation hardball is used at 11U and above.</p>`
      },
      {
        id: "19.06", title: "Uniforms",
        content: `<p>7U and 9U — sweater with distinctive number and cap. All other divisions — conventional baseball uniforms including shirt, pants, and socks. Coaches must wear at least a team cap in spring season play. Managers or coaches occupying a coach's box must be dressed in full uniform.</p>
        <div class="callout red"><p><strong>NO SHORTS · NO SLEEVELESS SHIRTS · NO CUT-OUT SLEEVE JERSEYS</strong><br>Coaches and Managers not adhering to this rule will not be allowed on the field during the game.</p></div>`
      },
      {
        id: "19.07", title: "Footwear",
        content: `<p><strong>Metal cleats are not permitted</strong> in 7U, 9U, 10U &amp; 11U, and 13U. Metal cleats are permitted at 15U and 18U provided they are not sharpened or pointed.</p>`
      },
      {
        id: "19.08", title: "Gloves",
        content: `<p>Recommended that all players wear fingered fielder's gloves. At 11U and higher, catchers <strong>must</strong> wear a standard catcher's mitt. At 13U and higher it is recommended that first basepersons wear a "trapper" glove.</p>`
      },
      {
        id: "19.09", title: "Bases",
        content: `<p>At the 10U and 11U levels, it is recommended that the use of a <strong>safety base at first base</strong> be used during the spring and summer seasons. It is recommended that a post or pin design be used to prevent accidental slippage of the base.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 20 — Scheduling Games
     ══════════════════════════════════════════════════════════ */
  {
    id: "20",
    title: "Scheduling Games",
    sections: [
      { id: "20.01", title: "Spring League", content: `<p>Scheduling and rescheduling of Spring Season games shall be the responsibility of the associations.</p>` },
      {
        id: "20.02", title: "Summer League",
        content: `<p>Scheduling and rescheduling of Summer League and Provincial Championships shall be the responsibility of the officers and executive committee. The BCMBA will appoint a director or group of directors to administer each single season, summer season league, or summer season zone. Directors must make available to all teams: a complete schedule, a policy for rescheduling games, a rule for the calculation of final standings, a format for how many teams qualify for provincials, a procedure for breaking ties, and a policy for prompt reporting of scores.</p>`
      },
      {
        id: "20.04", title: "Provincial Championships",
        content: `<p>Scheduling and rescheduling of Provincial Championships shall be the responsibility of BCMBA in conjunction with the host committee. All tournaments leading to the selection of Provincial champions shall usually be a 'round robin' format.</p>`
      },
      {
        id: "20.06", title: "Maximum Number of Games per Day",
        content: `<p>Under no circumstances can a team be expected to play more than <strong>two (2) games in a calendar day</strong> during league play. During Provincial Championships, no team will be expected to play more than two (2) complete games in one calendar day, except they may have to complete a suspended game and then play two (2) more complete games in that day.</p>`
      },
      {
        id: "20.07", title: "Required Rest Between Games (Provincial Championships only)",
        content: `<p>There must be a minimum of <strong>one (1) hour rest</strong> between games in all 11U, 13U, 15U, and 18U divisions at Provincial Championships.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 21 — Obligation of Scheduled Games
     ══════════════════════════════════════════════════════════ */
  {
    id: "21",
    title: "Obligation of Scheduled Games",
    sections: [
      {
        id: "21.01", title: "League / Zone / Provincials",
        content: `<p>All teams participating in a single season format, a provincial tournament (summer leagues, zones, or finals), Western Canada Tournament, or National Tournament are obligated to play all games as scheduled and to participate in all scheduled events including pre-tournament meeting and skills competitions.</p>`
      },
      {
        id: "21.02", title: "Exhibition / Invitational Tournaments",
        content: `<p>Exhibition games and invitational tournaments entered are secondary to BCMBA scheduled games. Entry into exhibition and invitational tournaments requires approval as per Article XV. Any change to a BCMBA scheduled game requires the approval of both teams and the BCMBA director of the division.</p>`
      },
      {
        id: "21.03", title: "Forfeit Fine",
        content: `<p>Failure to participate in a scheduled game or event will result in the offending team's Association being fined <strong>$1,000.00 per game</strong> or per event by BCMBA, and the Head Coach being suspended the equal amount of games/events that were not participated in.</p>`
      },
      {
        id: "21.04", title: "Rain Outs (Single Season and Summer League)",
        content: `<p>All rainout games between same zone teams must be made up. The game must be rescheduled within 48 hours of the rainout and the makeup date forwarded to the Division Director. Games that are not made up will count as a 'forfeit' for both teams.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 22 — Administration of Games
     ══════════════════════════════════════════════════════════ */
  {
    id: "22",
    title: "Administration of Games",
    sections: [
      {
        id: "22.01", title: "Length of Game",
        content: `<p>All games shall consist of the number of innings defined for each division unless shortened due to weather, darkness, time limits, or the mercy rule. Refer to each division's specific rules for the number of innings.</p>`
      },
      {
        id: "22.07", title: "Time Limit (11U and 10U Provincials Only)",
        content: `<p>In 11U &amp; 10U Provincial Championships, during all games played in the round robin portion of the schedule, <strong>no new inning will commence after 2 hours from the official start time</strong>.</p>
        <p>If a game is within 20 minutes of the time limit after a complete inning, the umpires will declare the next inning to be an open inning. If the open inning finishes before the 2-hour limit expires, then an additional open inning shall be played.</p>
        <p>In the event that a coach engages in tactics meant to delay the game for the purpose of having the time limit expire, they shall be warned by the umpires. If the tactics continue, the coach shall be ejected.</p>`
      },
      {
        id: "22.08", title: "Mercy Rule",
        content: `<div class="callout red"><p>If a team is leading its opponent by at least <strong>ten (10) runs</strong> after five or more equal innings have been played, or after four and one-half innings if the team second at bat has a ten-run lead, the game shall be terminated and the team in front declared the winner.</p>
        <p>Should a team hit a "walk-off" out-of-the-park home run to end a game under the mercy rule, all runners including the batter shall be permitted to score.</p></div>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 23 — Line-up & Substitutions
     ══════════════════════════════════════════════════════════ */
  {
    id: "23",
    title: "Line-up & Substitutions",
    sections: [
      {
        id: "23.01", title: "Spring Play",
        content: `<p>Associations forming house or interlock leagues are free to make their own rules regarding substitution during spring play.</p>`
      },
      {
        id: "23.02", title: "Summer Play (all bat) — 10U & 11U (all levels), 13U A & AA, 15U A, 18U AA",
        content: `<ol class="al">
          <li>All players will bat in the order they are placed on the line-up sheet, whether they are on the playing field or the bench in any given inning.</li>
          <li>Should a player arrive late to a game, their name may be added to the bottom of the batting order.</li>
          <li>In the event of an injury: (i) to a runner — the last out will be allowed to replace the injured player; (ii) to a batter — the last out will be allowed to complete the turn at bat (assumes count); (iii) to a fielder — any replacement from the bench. This rule may not be used in the case of pre-existing injuries.</li>
          <li>Once an injured player misses part of or their entire turn at bat, they may not return to the game.</li>
          <li>If a player must leave the park, is injured, or is ejected by the umpire, they are simply skipped in the batting order. They are not an automatic out.</li>
          <li>Defensive changes may be made at any time.</li>
        </ol>`
      },
      {
        id: "23.03", title: "Single Season Nine-Player Ball (13U AAA, 15U AA, 15U AAA, 18U AAA, 18U CP)",
        content: `<p>Any of the nine starting players may withdraw and re-enter once, provided such player occupies the same batting position whenever they are in the line-up. This player may re-enter at any defensive position, except they may not pitch twice in the same game. A substitute who is withdrawn may not re-enter.</p>
        <p class="note">If, for any reason, a team makes an incorrect substitution and is not able to make a legal substitution, the game is forfeited to the other team. Wildcard and Provincial Championship tournaments will be 9-player ball only.</p>`
      },
      {
        id: "23.07", title: "Designated Hitter Rule",
        content: `<p>The DH rule shall only be an option in the 15U AAA and 18U AAA/CP Divisions. All aspects of Baseball Canada Rule 5.11 apply.</p>`
      },
      {
        id: "23.08", title: "Extra Hitter (EH)",
        content: `<p>This rule may be used in any BCMBA league playing 9-player ball as described in Rule 23.03. Each team has the option to use an extra hitter (EH) and bat 10 players. The EH must be marked on the line-up at the start of the game and must be used for the entire game. The EH may be interchanged with any other position during the game.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 24 — Pitching Rules
     ══════════════════════════════════════════════════════════ */
  {
    id: "24",
    title: "Pitching Rules",
    sections: [
      {
        id: "24.01", title: "Number of Pitches and Required Rest",
        content: `<table>
          <thead><tr><th>Division</th><th>Spring &amp; Summer Season</th></tr></thead>
          <tbody>
            <tr><td class="hi">10U &amp; 11U</td><td class="hi">1–25 = No rest · 26–40 = 2 nights · 41–55 = 3 nights · 56–65 = 4 nights · 66–75 = 5 nights</td></tr>
            <tr><td>13U</td><td>1–35 = No rest · 36–55 = 2 nights · 56–75 = 3 nights (summer: 1–45/46–70/71–85)</td></tr>
            <tr><td>15U</td><td>1–35 = No rest · 36–65 = 2 nights · 66–85 = 3 nights (summer: 1–45/46–75/76–95)</td></tr>
            <tr><td>18U</td><td>1–45 = No rest · 46–65 = 2 nights · 66–100 = 3 nights (summer: 1–50/51–75/76–115)</td></tr>
          </tbody>
        </table>
        <p class="note">Pitches thrown in warm-up, bullpen, or ruled no pitch by the umpire do not count toward pitch count. If a pitcher has two appearances in the same day, the combined total is used for rest purposes. "Night's rest" is defined as the night following the game — e.g., 3 nights rest after a Sunday game means the pitcher may pitch when they wake up Wednesday morning.</p>`
      },
      {
        id: "24.02", title: "Exceeding Limits to Finish a Batter",
        content: `<p>A pitcher is permitted to exceed the maximum limit (for a day) to complete pitching to a batter already in progress. The final pitch count (including finish-batter pitches) is used for rest purposes, capped at the daily maximum for rest calculation.</p>`
      },
      {
        id: "24.03", title: "Pitching on Consecutive Days",
        content: `<p>Pitchers are not permitted to pitch on <strong>four (4) consecutive days</strong>. A player can only pitch on a third (3rd) consecutive day if ALL of the following conditions are met:</p>
        <ol class="al">
          <li>Games are during spring tournaments, summer, single seasons, or Provincials.</li>
          <li>Their total pitch count on the 2 previous days does not exceed the spring "no rest" limit for their division (e.g., 25 pitches for 11U).</li>
        </ol>`
      },
      {
        id: "24.04", title: "Pitching and Catching on the Same Day",
        content: `<p>Pitching and catching on the same day is permitted at all age divisions in league and championship play between BCMBA teams, unless a tournament is a Western or National hosted in BC, in which case the current Canadian Baseball Rule applies.</p>`
      },
      {
        id: "24.05", title: "Suspended Games",
        content: `<p>If a game is suspended, the pitcher's rest is determined based on the number of pitches thrown to that point, recorded for that day. If a pitcher is ineligible to pitch at the beginning of a game that is suspended after the first pitch, the pitcher remains ineligible when the game is completed at a later date.</p>`
      },
      {
        id: "24.06", title: "Pitcher Removed",
        content: `<p>A pitcher may not pitch twice in the same game. A pitcher who is removed for a pinch hitter or pinch runner during an offensive inning is considered to have been removed from the game as a pitcher for the purpose of this rule.</p>`
      },
      {
        id: "24.07", title: "Rules Always in Effect",
        content: `<p>BCMBA pitching rules are always in effect for all BCMBA teams at all times regardless of whether or not the event is sanctioned by BCMBA. BCMBA pitching rules will not be in effect for any team participating in a Western or National or other tournament where the team will be required to follow only the regulations of that governing body.</p>`
      },
      {
        id: "24.08", title: "Penalty for Violations",
        content: `<p><strong>Maximum Pitch Count Violation:</strong> The opposing manager and/or official scorekeeper must inform the pitcher's manager before the violation occurs. If a violation is discovered after it occurs, the pitcher is simply removed from the mound and no further penalty is invoked.</p>
        <p><strong>Rest Rule Violation:</strong> If a pitcher pitches without proper rest, the game will be forfeited to the opposing team. Such a violation may be protested by the opposing team up to 48 hours after the game upon discovery.</p>
        <p><strong>No Eligible Players Available to Pitch:</strong> If a team does not have any player available to pitch at any point during a game due to Pitch Count and/or Rest Rule, the game shall be forfeited to the non-offending team.</p>`
      },
      {
        id: "24.09", title: "Enforcement and Tracking",
        content: `<p>Managers will be responsible for tracking the pitch count of their pitchers and maintaining a log on the form provided by BC Minor Baseball. A team may request to view their opposition's pitch count log prior to a game. A manager failing to maintain an accurate log may face supplemental discipline including the forfeiture of games.</p>
        <div class="callout red"><p><strong>Under no circumstances will umpires be expected to track or enforce pitch count.</strong></p></div>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 25 — Fair Play Rule
     ══════════════════════════════════════════════════════════ */
  {
    id: "25",
    title: "Fair Play Rule",
    sections: [
      {
        id: "25.00", title: "General",
        content: `<div class="callout red"><p><strong>Failure to adhere to any stipulations of the Fair Play Rule</strong> will result in a minimum forfeiture of the game and a minimum five-game suspension to the coach in charge.</p></div>`
      },
      {
        id: "25.01", title: "10U & 11U Spring",
        content: `<p>All players in attendance at league games must play at least <strong>three (3) complete innings</strong> of a six-inning game.</p>`
      },
      {
        id: "25.02", title: "10U & 11U Summer",
        content: `<p>No player may sit off for <strong>2 consecutive innings</strong>. With the exception of the pitcher, upon re-entering the game defensively, the player MUST play 1 full defensive inning comprised of 3 outs or the opposing team scoring the run maximum.</p>`
      },
      {
        id: "25.03", title: "13U A, 13U AA, 15U A, 18U AA (Spring & Summer) / 13U AAA (April 1 to June 14)",
        content: `<p>All players must play at least three complete defensive innings of a six or seven inning game. All players must play at least two complete defensive innings of a five-inning game. 13U AAA begins 9-player baseball (with the EH option) June 15 and goes to the end of the season.</p>`
      },
      {
        id: "25.04", title: "Repealed",
        content: `<div class="repealed">Rule 25.04 — Repealed 2025 AGM.</div>`
      },
      {
        id: "25.05", title: "Repealed",
        content: `<div class="repealed">Rule 25.05 — Repealed 2024 AGM.</div>`
      },
      {
        id: "25.06", title: "Single Season Teams",
        content: `<p>No fair play rules are mandated for 15U AA, AAA, and 18U AAA teams. Coaching staffs are required to provide a player agreement form acknowledging the no-minimum rule, to be signed by each player and a parent/guardian before the start of league play.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 26 — General Playing Rules
     ══════════════════════════════════════════════════════════ */
  {
    id: "26",
    title: "General Playing Rules",
    sections: [
      {
        id: "26.01", title: "Slide or Avoid",
        content: `<div class="callout"><p>If a play is being made, or is about to be made, it is <strong>MANDATORY</strong> for players of all age groups to slide or make an effort to avoid a collision at all bases and home plate. Failure to do either will result in an automatic 'out'. The ball is dead, and no runner may advance beyond the base that was last legally acquired. An umpire will have the option of ejection if the incident warrants such a measure.</p></div>`
      },
      {
        id: "26.02", title: "Force Play Slide Rule",
        content: `<p>On any force play, the runner must slide directly into the base — the runner's entire body (feet, legs, trunk, and arms) must stay in a straight line between the bases. The runner's momentum may carry them through the base on the baseline extended, provided the slide begins before the base.</p>
        <p><strong>Interference is ruled when:</strong> (A) any contact occurs between the runner and fielder outside of the straight line between bases, or (B) the fielder is forced to avoid contact outside of the straight line between bases. <strong>Exception:</strong> a runner may slide or run away from a base to avoid contact with a fielder — interference shall not be called.</p>
        <p><strong>Penalty — less than 2 outs:</strong> both the batter-runner and interfering runner shall be declared out; all other runners must return to the base they occupied prior to the pitch. <strong>With 2 outs:</strong> the interfering runner shall be declared out. If the runner's slide is flagrant and injures or had a high likelihood of injuring the fielder, the runner shall be ejected.</p>`
      },
      {
        id: "26.03", title: "Headfirst Slides",
        content: `<div class="callout red"><p><strong>No intentional headfirst slides</strong> to a base or home plate are allowed in 13U, 11U, 9U, and 7U. All offending players will be automatically called out. Diving headfirst back to a base already legally acquired will be allowed.</p></div>
        <p class="note">If a player, after initially sliding feet-first and not legally acquiring the base or home plate, reaches back with their hand, they shall be deemed safe. If a player, while attempting to legally acquire the base, inadvertently stumbles or trips causing them to fall headfirst into the bag, they shall be deemed safe.</p>`
      },
      {
        id: "26.04", title: "Bodily Fluids Rule (Blood)",
        content: `<ol class="al">
          <li>Any player during a game who is bleeding or who has an open wound shall be removed from the field of play by the umpires. The player may return to the game only after the bleeding has stopped and the affected or open wound has been completely and securely covered to the satisfaction of the umpires.</li>
          <li>Should the same player start bleeding again or the affected area shows signs of bleeding, the umpires may remove the player for the duration of the game.</li>
          <li>Should any blood be on the player's uniform, it must be washed out completely to the satisfaction of the umpire prior to the player returning to the game.</li>
          <li>The substitute player is only a courtesy player until the original player returns.</li>
          <li>If a pitcher, while pitching, suffers an injury referred to in paragraph (A) above, the umpire will call a courtesy time for no longer than <strong>fifteen (15) minutes</strong>. If the pitcher cannot return in this time, a pitching change must be made.</li>
          <li>Should a team only have nine players available at the time of such an injury, a courtesy time will be called for no longer than <strong>fifteen (15) minutes</strong>. If the affected player is unable to return after this time, the game will be forfeited.</li>
        </ol>`
      },
      {
        id: "26.05", title: "Helmet Removal",
        content: `<p>Any base runner who removes (i.e., throws helmet off) their helmet while running the base paths is subject to put out. If, in the judgment of the game officials, a violation occurs the player will receive one warning. If the player in question, after receipt of one warning, is in violation a second time they are automatically called out. If in a given situation the violator represents the 3rd out in any given inning, any previous runs scored will count.</p>`
      },
      {
        id: "26.06", title: "Infield Fly",
        content: `<div class="callout red"><p>The Infield Fly Rule applies to divisions <strong>13U and up only</strong>. It is NOT in effect for 11U and younger.</p></div>`
      },
      {
        id: "26.07", title: "Minimum Players",
        content: `<p>A team failing to field at least <strong>nine uniformed players</strong> within fifteen minutes of the scheduled starting time of the game shall forfeit the game.</p>`
      },
      {
        id: "26.08", title: "Run Limits",
        content: `<p><strong>House and interlock leagues</strong> are free to set their own rules regarding run limits for spring play.</p>
        <p><strong>10U &amp; 11U (Summer Play):</strong> 3 outs or 4 runs will constitute an inning (except that a team may score unlimited runs in its last at-bat in the 6th inning). A 10-run mercy rule will apply after 5 innings. If, in the top of the sixth inning (or the top of the fifth if declared open), the visiting team goes ahead by ten or more runs, the coach of the home team will have the option of declaring the game over and conceding the win to the visiting team.</p>
        <p><strong>13U A, 13U AA, 15U A, and 18U AA:</strong> An inning will end after three outs or six runs, whichever comes first, except that a team may score an unlimited number of runs during its final at-bat in the 7th inning, as well as in any extra innings played in the event of a tie.</p>`
      },
      {
        id: "26.09", title: "Leadoffs",
        content: `<div class="callout red"><p>Leadoffs are <strong>not permitted</strong> at the 10U &amp; 11U divisions. If there is a lead-off, the ball is dead, a no pitch shall be called, and the runner(s) will be declared out. Leadoffs are permitted at all other divisions.</p></div>
        <p>When the pitcher is in contact with the pitching rubber, with the ball in their possession, preparatory to the act of pitching, all base runners shall return to their bases and cannot leave until the pitched ball crosses the plate.</p>
        <p>After a pitch, if the catcher has possession of the ball in fair territory, any runner between third and home who stops advancing must return to third base. If the catcher chooses to make a play on a runner returning to third base, the ball is alive and in play.</p>`
      },
      {
        id: "26.10", title: "Dropped Third Strike",
        content: `<div class="callout red"><p>At the <strong>10U &amp; 11U</strong> divisions, on a dropped third strike the batter is <strong>out</strong> and may not become a base runner. At all other divisions the batter is permitted to run on a dropped third strike subject to normal baseball rules.</p></div>`
      },
      {
        id: "26.11", title: "BCMBA Authority to Overrule Forfeit",
        content: `<p>BCMBA has the authority to overrule any umpire's decision to forfeit a game when BCMBA feels the forfeit was not in the best interests of the game or contrary to playing rules. In these circumstances BCMBA may rule the game to be replayed, completed, or left unplaced as they determine is fit.</p>`
      },
      {
        id: "26.12", title: "Balks / Failure to Deliver the Pitch",
        content: `<p>Balks are called at the <strong>13U division and higher</strong> as per general baseball rules.</p>
        <div class="callout"><p><strong>At 10U &amp; 11U:</strong> Balks are not called except as follows: when with runners on base, the pitcher fails to deliver the pitch after beginning their pitching motion, the umpire shall call "Time…no pitch." The umpire shall relate to the pitcher that they must deliver the ball without stopping their motion as this is a ball. No runner may advance on the call. Any subsequent failure to deliver the pitch after starting their motion, the umpire shall call "Time, ball," and then charge the pitcher with a ball. No runners may advance on the call.</p></div>
        <p class="note">Intent: prevent pitchers from stopping their delivery to home plate when they see a batter square to bunt.</p>`
      },
      {
        id: "26.13", title: "Warming-Up Pitchers",
        content: `<p>Any Manager, Coach, Player, Parent and/or any other person that is warming up a pitcher <strong>must wear a catcher's mask</strong>.</p>
        <p>Where the location to warm up the pitcher is located within the field of play, a Manager, Coach, Player, Parent, or another person must be used as a spotter to protect the players from any batted or thrown baseballs. If a player is used as a spotter, they must wear a batting helmet.</p>`
      },
      {
        id: "26.14", title: "Intentional Walks",
        content: `<div class="callout red"><p><strong>No intentional walks permitted in the 11U Division.</strong> Other divisions: dictated by Baseball Canada; currently allowed.</p></div>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 27 — Illegal & Ineligible Players
     ══════════════════════════════════════════════════════════ */
  {
    id: "27",
    title: "Illegal & Ineligible Players",
    sections: [
      {
        id: "27.01", title: "Definition of Illegal Player",
        content: `<p>An illegal player is one who is not legally a member of the League or Team for any reason including but not limited to the requirements as to age and/or residence.</p>`
      },
      {
        id: "27.02", title: "Penalty for Illegal Player",
        content: `<p>Playing illegal players shall result in forfeiture of games in which players participated illegally if protested by any of the League managers or officers in writing at any time during the season.</p>
        <p>Any manager or coach who has an illegal player(s) on their roster and plays the said player(s) shall be <strong>immediately suspended</strong> from coaching within BCMBA pending a ruling and decision by the discipline committee of BCMBA.</p>`
      },
      {
        id: "27.03", title: "Definition of Ineligible Player",
        content: `<p>An ineligible player is one who is legally a member of the League, but who is ineligible to pitch because of a pitching regulation or rule violation or is ineligible to play a particular game because they have been in the lineup once and has been removed from the game or has been declared ineligible for other cause.</p>`
      },
      {
        id: "27.04", title: "Penalty for Ineligible Player",
        content: `<p>Penalty for the use of an ineligible player/pitcher shall be the immediate removal of the pitcher from the mound as pitcher or other player from the game and the removal of the manager/head coach from the game upon appeal by the opposing manager, or notification by the official scorer or League official. The manager/head coach also becomes ineligible to manage/coach in the team's next game (incorrect substitution) or next two games (pitching violation).</p>`
      },
      {
        id: "27.05", title: "Duty to Report Ineligible Player",
        content: `<p>It is the responsibility and duty of the Tournament Director, official scorekeeper, opposing manager or coach, or any other official to prevent a player from becoming ineligible (such as a pitcher pitching too many pitches) by warning the manager or coach of the player concerned.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 28 — Protests and Penalties
     ══════════════════════════════════════════════════════════ */
  {
    id: "28",
    title: "Protests and Penalties",
    sections: [
      {
        id: "28.01", title: "7U, 9U, 10U & 11U",
        content: `<p>It is strongly recommended that Member Associations include in their local rules that no protests be allowed in 7U, 9U, or 10U &amp; 11U Divisions.</p>
        <div class="callout red"><p>Protests shall <strong>not be permitted</strong> at the 10U &amp; 11U levels during summer league play and zones except those based on the use of ineligible or illegal players. Protests are permitted at the 10U &amp; 11U Provincial Championships.</p></div>`
      },
      {
        id: "28.02", title: "Protest Procedure (Summer League or Single Season)",
        content: `<ol class="al">
          <li>A protest based on a play which involved an umpire's judgment call is not permitted.</li>
          <li>If a protest is based on an interpretation of the rules, the objecting manager must at the time the play occurs, notify the head umpire, the opposing manager, and official scorer that the game is being played under protest, and submit the protest in writing within <strong>48 hours</strong> of the completion of the game.</li>
        </ol>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 29 — Provincial Championship Tiebreaking
     ══════════════════════════════════════════════════════════ */
  {
    id: "29",
    title: "Provincial Championship Tiebreaking Rules",
    sections: [
      {
        id: "29.01", title: "Tiebreaking Sequence",
        content: `<p>Refer to the full BC Minor Baseball rulebook for the current complete tiebreaking sequence for Provincial Championships. Tiebreaking generally proceeds through: head-to-head record between tied teams, run differential (capped per game), fewest runs allowed, most runs scored, and coin flip.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 30 — 7U Specific Rules
     ══════════════════════════════════════════════════════════ */
  {
    id: "30",
    title: "7U Specific Rules",
    sections: [
      {
        id: "30.01", title: "Overview",
        content: `<p>Rule 30 contains playing rules specific to the 7U division including tee ball and coach-pitch provisions. Refer to the full BC Minor Baseball rulebook for complete 7U specific rules.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 31 — 9U Specific Rules
     ══════════════════════════════════════════════════════════ */
  {
    id: "31",
    title: "9U Specific Rules",
    sections: [
      {
        id: "31.01", title: "Preamble",
        content: `<p>The BCMBA is pleased to provide to its member affiliates the following rule variations covering minor divisional play in the 9U Division. It is hoped that the SUGGESTED FORMAT be adopted into each organization's respective programs. It is designed to get young people interested in the game of baseball by stressing and maintaining active participation of all the players, with mandatory and total free substitutions each inning, and <strong>EMPHASIS PLACED ON TEACHING THE FUNDAMENTALS OF BASEBALL</strong>.</p>
        <p>All rules as listed in this handbook shall apply and unless specifically mentioned, all regular rule interpretations shall apply. The only differences are contained in Rule 31.</p>`
      },
      {
        id: "31.02", title: "Playing Line",
        content: `<p>The Playing Line is an arched chalk line from the first and third base lines, <strong>15 feet</strong> from the tip of home plate. A <strong>Fair Hit Ball</strong> is a legally batted ball that in the plate umpire's opinion will or could have firmly crossed the playing line in fair territory, even if it is fielded before crossing the line. A <strong>Dead Hit Ball</strong> is a legally batted ball that in the plate umpire's opinion will not or could not have firmly crossed the playing line, even if it is fielded. However, if the ball is in flight and is caught, the batter is out and the ball is alive.</p>`
      },
      {
        id: "31.03", title: "General Rules (9U)",
        content: `<ol class="nl">
          <li>All players turning 8 or 9 years old in the current year (or younger) are eligible to play.</li>
          <li>Before a game, each head coach must give a copy of their batting line-up (with first and last name and uniform number of each player and coach) to the opposing team and home plate umpire.</li>
          <li>The batting line-up must be legible to the plate umpire prior to game start. The umpire may delay the game until satisfied with the line-up cards.</li>
          <li>Home teams are to supply the umpires for their game.</li>
          <li>During a game, coaches or parents cannot position themselves on the outside of the backstop behind the umpire in order to coach the team or umpire. There will be a warning and if this continues, the coach will be ejected.</li>
          <li>The BCMBA Code of Conduct applies.</li>
          <li>No new inning shall be started later than <strong>2 hours and 15 minutes</strong> from the start of the game.</li>
          <li>The length of a legal game is <strong>4 complete innings</strong> but no more than 6 innings of pitched baseball.</li>
          <li>9 players allowed on the field per inning.</li>
          <li>You must have a minimum of 9 players starting the game.</li>
          <li>You can only dress 13 players per game, although you may carry as many spares as you like.</li>
          <li>Three (3) outs or a maximum of four (4) runs per inning, with the last inning of play having a (10 run) maximum limit. See mercy exception in 31.03(16).</li>
          <li>All players must play the infield for a minimum of 2 innings and the outfield for a minimum of 1 inning per game.</li>
          <li>No player may play more than 2 innings in one position with the exception of the catcher who may play a maximum of 3 innings per game.</li>
          <li>All players must sit once before another player sits twice.</li>
          <li>The Home team will only take their last bats if the run differential is less than 10. If the run differential is 10 or more then the mercy rule will apply. If in their last bats the home team goes ahead by 10 or more runs, the game will end.</li>
          <li>When at bat, any team may pull their catcher off the bases to dress for the next inning when there are 2 outs. The last player out will replace them.</li>
          <li>Everyone bats.</li>
          <li>A regulation hard ball is used.</li>
          <li>Base paths are set at 60 feet.</li>
          <li>Pitching shall be from 42 feet. Players may pitch from 46 feet, but it is not mandatory. If a player elects to pitch from 46 feet, they must start and finish that inning from 46 feet.</li>
          <li>All players may only pitch 1 inning per game. (Does not apply to tournament play.)</li>
          <li>Pitchers in 9U may only pitch one inning per game to a maximum of 35 pitches. After delivering one (1) pitch to a batter, that player shall not pitch in any other inning that game. (Does not apply to tournament play.) A pitcher may pitch in two (2) games in a single day so long as the total number of pitches in the first game is 25 or less. A pitcher may pitch in consecutive days, so long as the total number of pitches the previous day is 25 or less. A pitcher may not pitch three (3) days in a row.</li>
          <li>Rule 31.03(24) — Removed 2020 (changed to rule 22 above).</li>
          <li>Any pitcher who delivers 1 pitch to a batter shall be considered to have pitched one inning.</li>
          <li>The pitcher may pitch from the "set position" without coming to a full stop before delivery. No "balk balls" will be called against the pitcher.</li>
          <li>One (1) trip to the mound by coaches per inning — per player. Pitcher is to be removed on a 2nd trip to the mound by coaches. The pitcher removed due to this rule cannot return as a pitcher in this game in a later inning.</li>
          <li>If a batter is hit by a pitched ball, the batter is awarded first base.</li>
          <li>Any pitcher that hits 2 batters must be removed from the pitching mound.</li>
          <li>Base stealing is allowed. A base runner can never go home based on a throw during an attempted stolen base. Base runners may only score when the ball is initially hit into play, or when forced home (by a walk, hit batter, catcher interference, etc.).</li>
          <li>No stealing home on a passed ball or on a missed throw back to the pitcher.</li>
          <li>Base runners must stop running once the pitcher has possession of the ball on the mound.</li>
          <li>Any runner that stops advancing to a base, when the pitcher has possession of the ball on the mound, the runner must return to the base they came from.</li>
          <li>Any base runner that overruns another base runner is declared out.</li>
          <li>Leadoffs are not allowed. The ball must cross home plate before any runner(s) can leave the base(s).</li>
          <li>No headfirst sliding allowed. The runner will be called out.</li>
          <li>Bunting is allowed. A bunt is considered a strike if missed or fouled. A batter that fouls a bunt on strike 3 is out.</li>
          <li>The batter cannot run on a third strike dropped by the catcher.</li>
          <li>The catcher interference rule is in effect. No pitch is to be called. One warning is to be issued to the catcher and if interference occurs again the batter will be awarded 1st base (per batter).</li>
          <li>The slide or avoid rule is in effect.</li>
          <li>The umpire will call obstruction on a defensive player if the bag or plate is not partly exposed. The runner will be awarded the base. A catcher in possession of the ball, or in the act of fielding the ball, is allowed to block the plate.</li>
          <li>Players will be called out for throwing their bat. If the batter is called out, no base runners will advance on the play.</li>
          <li>If a player leaves a game because of an injury or an emergency, that player will be scratched from the line-up and the team will not be penalized.</li>
          <li>Players who arrive late will be added to the line-up.</li>
        </ol>`
      },
      {
        id: "31.04", title: "Tournament Rules (same as regular season with these exceptions)",
        content: `<ol class="al">
          <li>Home team is decided by a coin toss, unless specified in the tournament schedule.</li>
          <li>Tie breakers as per BC Minor Baseball Rules.</li>
          <li>Winning team must report game score to concession stand.</li>
          <li>Birth certificates must be provided prior to the start of the tournament.</li>
          <li>The home team is required to have the umpires sign their scorebook.</li>
          <li>In the event of a protest, the tournament committee will review and make the ruling.</li>
          <li>Home team in semi-finals will be decided as to how they place in the round robin. Home team in the final will be decided by a coin toss.</li>
          <li>Rule H — Repealed 2025 AGM.</li>
          <li>One MVP will be selected from each team for each game.</li>
          <li>Pitching in tournament play — Players may pitch in more than one inning.</li>
          <li>Pitching in tournament play: (i) max 65 pitches; (ii) may pitch in 2 games in one day if first game total is 25 or less; (iii) may pitch on consecutive days if previous day's total is 25 or less; (iv) more than 40 pitches in a day requires 2 nights rest; (v) more than 55 pitches in a day requires 3 nights rest.</li>
          <li>All teams must provide a pitching log for the current week at the beginning of the tournament.</li>
          <li>Each team must sign the pitching log after each tournament game.</li>
        </ol>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 32 — Application to Host Provincial Championships
     ══════════════════════════════════════════════════════════ */
  {
    id: "32",
    title: "Application to Host Provincial Championships",
    sections: [
      {
        id: "32.01", title: "Application to Host",
        content: `<p>Associations wishing to host a provincial championship must apply to BCMBA. The application must demonstrate adequate facilities, field quality, accommodation availability, and administrative capacity. Refer to the full BC Minor Baseball rulebook for the complete application requirements and timeline.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 33 — Host Responsibilities
     ══════════════════════════════════════════════════════════ */
  {
    id: "33",
    title: "Host Responsibilities",
    sections: [
      {
        id: "33.01", title: "Associations Hosting Provincial Tournaments Are Required To:",
        content: `<ol class="al">
          <li>Appoint an Official Scorer and an Official Pitch Count Tracker for all games.</li>
          <li>Assign qualified and competent umpires. A 3-person system is recommended for semi-finals and finals.</li>
          <li>Provide and maintain fields to an adequate standard and ensure fields and surrounding areas are kept clean.</li>
          <li>Maintain accurate and updated standings and results.</li>
          <li>Arrange for a location for the Pre-Tournament Meeting.</li>
          <li>Support the BCMBA Director in ensuring the Code of Conduct is followed by spectators, including ensuring that spectators are not consuming alcohol during games.</li>
          <li>Designate an individual to provide regular game updates and other information to BCMBA point of contact for dissemination to social media subscribers and the BCMBA website.</li>
        </ol>`
      },
      {
        id: "33.02", title: "Associations Hosting Provincial Tournaments Are Encouraged To:",
        content: `<ol class="al">
          <li>Have an Opening Ceremony.</li>
          <li>Have a Skills Competition or Home Run Derby (particularly at 13U and lower).</li>
          <li>Use a public-address system/announcer.</li>
          <li>Create a tournament program.</li>
          <li>Supply game MVPs or other tournament awards such as a Team Sportsmanship Award.</li>
          <li>Have a concession that includes healthy choices.</li>
          <li>Provide umpires with a dressing area.</li>
          <li>Provide basic first aid.</li>
          <li>Provide water to the teams.</li>
          <li>Inform local law enforcement of the tournament dates and request drive/cycle/walk-through on the dates of the tournament.</li>
        </ol>`
      },
      {
        id: "33.03", title: "At Provincial Championships BCMBA Is Responsible For:",
        content: `<ol class="al">
          <li>Supplying baseballs.</li>
          <li>Supplying gold and silver medals.</li>
          <li>Assigning a BCMBA Tournament Director.</li>
          <li>Chairing the Coaches Meeting.</li>
        </ol>`
      },
      {
        id: "33.04", title: "Provincial Berth Distribution",
        content: `<p>Each traditional region in the Province (Interior, Lower Mainland/Fraser Valley, North, and Vancouver Island) is to receive at minimum one team at each division/tier if declared. BCMBA Provincial Championship berth allocation shall be by proportional representation by region.</p>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 34 — Repealed
     ══════════════════════════════════════════════════════════ */
  {
    id: "34",
    title: "Repealed",
    sections: [
      {
        id: "34.00", title: "Repealed",
        content: `<div class="repealed">Rule 34 was repealed at the 2022 AGM. No content remains.</div>`
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     RULE 35 — 26U Division
     ══════════════════════════════════════════════════════════ */
  {
    id: "35",
    title: "26U Division",
    sections: [
      {
        id: "35.01", title: "General",
        content: `<p>BC Minor Baseball will coordinate and administer a 26U division. The BCMBA director responsible for the 26U division has the responsibility, in consultation with the teams, to make scheduling decisions and to establish general playing rules at the beginning of each season.</p>
        <p><strong>Rule 35 is the only BCMBA rule that is applied to the 26U Division.</strong> This division is not bound by any other BCMBA rules unless directly referenced in this rule.</p>`
      },
      {
        id: "35.02", title: "26U Division Rules",
        content: `<ol class="al">
          <li><strong>Age:</strong> Players who are 18–25 years old, as of January 1st of the current playing year, are eligible to play. The business manager of each team must be age 25 or older.</li>
          <li><strong>Discipline:</strong> The BC Minor Baseball Discipline Committee will rule on all ejections and violations. The committee has authority to suspend or fine any player or coach. Maximum individual or team fine is $100.</li>
          <li><strong>Declaration Dates &amp; Bonds:</strong> All teams who wish to field a 26U team must declare in writing and submit a performance bond of $500 per team to the BCMBA director by March 1st. This performance bond will not be refunded if a team drops out after March 1st.</li>
          <li><strong>Performance Bonds &amp; Fines:</strong> Forfeit fines — team forfeits game at the park due to lack of players: $150. Team cancels game with less than 48 hours' notice: $100.</li>
          <li><strong>Affiliation Fees:</strong> Per rule 2.01 for insurance and administration fees. Divisional league fees are $200 per team, due to BC by May 1st.</li>
          <li><strong>Boundaries:</strong> There are no boundaries in this division.</li>
          <li><strong>Appeals:</strong> The appeal process outlined in Rule 16 applies to the 26U Division.</li>
        </ol>`
      }
    ]
  }

];
