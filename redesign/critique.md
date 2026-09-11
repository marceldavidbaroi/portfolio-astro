# Design critique

Audience: recruiting agencies and hiring managers (plus peers / clients).  
Scope: design system, color, type, layout, chrome — not copy.  
Date: 11 Sep 2026. Pass 2 (live site after the stationery rewrite).

Related contracts: [system.md](./system.md), [home.md](./home.md), [work.md](./work.md), [about.md](./about.md), [header.md](./header.md).

---

## Pass 3 status (11 Sep 2026)

Implemented against the seven-phase fix plan. Verified on `localhost:4330` after build.

| Priority | Issue | Status |
| --- | --- | --- |
| P1 | Product stills at ~40% band scale; Tradeflow = `shipments-list.webp`; no Home KPI row | **Done** |
| P2 | Live `[draft]` strings on About / attic | **Done** — `/about`, `/skills`, `/philosophy`, `/archive`, `/research` clean in build output |
| P3 | Work filters above focus; bands + catalog honor tab/search; catalog one still | **Done** — Mobile tab hides `#focus-list` |
| P4 | Case TOC ≤5 structured sections; no Email in hero without live URL | **Done** — Tradeflow TOC = Overview / Decisions / Before→after / Stack / Security |
| P5 | Geist metric values, 2px buttons, solid scrolled header, `pre` 6px no shadow, no NDot gallery H1 | **Done** |
| P6 | Education / research / HSC gallery on Home paper | **Done** — ink institution links, facts rails, 2-col HSC grid |

**Leftovers (out of scope or minor):**

- `aboutLayoutDummy.ts` still exists for credentials / beyond padding imports — not wired to About masthead anymore.
- Work focus bands still show Geist metrics (by design on `/work`, not Home).
- Support-row kickers on Home remain wine; plan kept NType on kickers/CTAs.
- Phone Menu pill stays round (locked decision).

---

## Anti-patterns verdict

Pass as “AI SaaS.” Soft fail as “2024 engineer portfolio kit.”

Not cyan-on-dark, not glass cards, not a centered Inter splash. Warm paper, left type, hairlines, one wine accent, spelled Geist name, real portrait — that is a real point of view. A recruiter would not say “ChatGPT made a dark dashboard.”

Tells that still read as generated or templated:

- **Geist + heavy NType.** Geist is the default 2024 sans. Mono still owns status, kickers, metrics, CTAs, footer, filter chrome, and every project chip. That is the lazy “technical” signal now that the dotted name is gone.
- **Wine pills** (`EMAIL ME`) at `border-radius: 9999px`. Recruiter software uses that red family for errors and rejects. One solid action is correct; the capsule shape is still app chrome on letterhead.
- **Hero-metric leftovers.** Feature bands still lead with `100%` / `17+` / `4 Surfaces` in mono. Transcript opens with a KPI strip. Research still uses the About proof-tile pattern. The case hero is a painterly port illustration with numbers on it — mood board, not a shipped screen.
- **Leftover product-UI in the attic.** Global `pre` is 16px radius + drop shadow (`!important`). `.card` still hover-lifts. HSC gallery is a dense mosaic. Unused education CSS still defines 16px wells, teal DIU pills, green success badges.

The kit is quieter. It is not gone.

---

## Overall impression

The site now feels like **letterhead**. That is the right emotion for agencies: calm, printable, senior. Home in eight seconds is a person with a name, a face, and two product bands — not a card catalog.

The single biggest remaining change: **make the work look like shipped software, not like a well-typeset CV with thumbnails.** The portrait and the spelled name win the first glance. The ERP stills are 280px postage stamps. The flagship case opens on a watercolor of containers, then an Email pill, then a 20-item TOC. A hiring manager being forwarded this file still cannot *see the product* without squinting.

Do not add more color, more fonts, or more motion. Enlarge and crop real UI. Kill draft markers. Put filters above the catalog. Sharpen corners on buttons and code.

---

## What’s working

1. **Paper / ink / line.** `#fffcf8`, `#2b251e`, warm hairlines. Neutrals are tinted, not gray. This still feels like a document, which agencies trust.
2. **Left column, three-word nav, Menu overflow.** Active Work/Home/About is wine + 2px underline. Phone Menu is the one wine pill. Footer is one status line. Recruiters do not hunt six icon buttons.
3. **Layout grammar held.** Feature bands vs support rows vs date rail vs one-line education vs mid-dot stack. Size still means something. Education’s masthead + facts rail finally matches Home instead of being a second product.

---

## Design system

### Color

| Token                        | Now                                      | Problem for agencies                                                                                         | Change                                                                                          |
| ---------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Paper `#fffcf8`              | Keep                                     | Fine                                                                                                         | Do not cool it.                                                                                 |
| Slot `#f4f0e7`               | Keep                                     | Fine for empty wells and transcript tables                                                                   | Keep. Do not use as a marketing card fill.                                                      |
| Ink `#2b251e`                | Keep                                     | Strong                                                                                                       | Keep.                                                                                           |
| Muted `#746855`              | Keep                                     | Captions are sized (`0.75rem`); they fail when tracking + uppercase + wrap hits a 280px metric column        | Do not darken. Shorten metric labels; give the still more width.                                |
| Accent `#84353f`             | Keep                                     | Budget is mostly held. Education institution link is still wine. About proof links should be ink.            | One solid button, kickers, active nav/tabs, 2px close rule. Text links stay ink.                |
| Accent hover                 | Derived `color-mix`                      | Fine                                                                                                         | Keep.                                                                                           |
| Header glass                 | `paper 82%` + `blur(14px)` while scrolled | Spec’d, still a product-UI tell on an otherwise flat page                                                    | Solid paper + hairline is enough. Blur is the last glass.                                       |


**Budget rule is mostly enforced.** Wine is for: active nav, kickers/labels, one solid button, 2px close rule, active filter tabs. Exceptions still live: `.edu-doc-inst a`, case TOC active hash (acceptable), search underline on focus.

### Type

- **Spelled name** is the strongest type on the site. Geist 800, tight tracking, Home and About. Keep it.
- Three families is the max. NDot must not return on the name. It still appears on leftover `GalleryPage` titles (`font-dot`).
- Home role wraps so **“systems” sits alone on a second line** (`max-width: 28rem` vs a 53.6px name). Recruiter scan stumbles. Widen the role or shorten the line; do not shrink the name.
- Kickers at `0.75rem` / tracking `0.12–0.16em` are the stationery voice. There are too many of them — every support chip is a wine label. That is a lot of “technical” stamp ink on one page.
- **Metric values are still NType 700 at 16px.** They read as a terminal, not as proof. Set values in Geist 800; keep labels in mono if you must. Shorten labels so they do not wrap under the number (`TENANT DATA ISOLATION` under `100%` is unreadable at band width).
- About proof line lowercases the labels in JS (`100% rls data isolation · 3.91 b.sc. in cse cgpa`). That looks broken, not quiet.

### Space and shape

- 1180px left column is right. Do not center.
- Hairlines at 0.10–0.14 opacity are right. Portrait shadow is now `0 6px 18px` — light enough. Feature stills and shot fans still carry their own drop shadows; one floating object (the portrait) is the budget.
- Stationery corners are ~0–6px. Live exceptions: pills `9999px`, shot layers `7px`, feature still frame `5px`, global `pre` **16px !important**, leftover `.card` 16px + lift. Philosophy mermaid inherits the 16px `pre` radius inside the slot well.
- **Pill radius `9999px` on buttons** is the roundest object on the page besides the portrait. A 2px capsule or a sharp rectangle with the wine fill would match letterhead better. Same for the `CURRENT` rail badge.

### Motion

The budget is still good. Portrait rise once, title → wine, shot lift, header hide. Do not add scroll-reveal lists.

Header hide is nice for reading case studies; for agency bounce-around it is slightly hostile. Keep hide, but the case **Email** and **Work** path must stay possible without the bar (close band does this; the 20-line TOC does not replace it).

---

## Page by page

### Chrome (header, Menu, footer)

**What works:** Sentence nav. Desktop Menu as muted `⌘K`, not a wine button. Command menu is a ~420px paper panel with human meta (“Page”, “File”, “Link”, “Copy”). Footer as one status line.

**Change:**

- Header scrolled state still blurs. Solid paper is enough.
- Resume stays out of the bar — keep that.
- At ≤420px watch the three nav words colliding with the Menu pill (unchanged risk).

### Home `/`

This is the 8-second agency scan. Scan order today: **portrait → name → wine pill → bio → tiny product still.** Product proof is present and still loses.

**Now:** Geist name, real 3:4 photo in a straight frame, one solid Email, Resume ghost, LinkedIn/GitHub as ink. Two 16:10 stills on TradeflowBD + Service Desk. Support fans ~104×65px at −6deg. Education is one line. Close is 2px wine rule + “Let’s talk.”

**Change:**

1. **Stills too small.** Feature still max-width is 280px on an 1180 column. Crop a real UI tighter and let it take ~40% of the band, or full-bleed the still under the title on the two hire stories.
2. **Metrics fight the still.** Three mono KPIs + a 4-line XYZ + “Read case study →” leave no room for the picture. Move metrics under the title in Geist, or drop them on Home (the case already carries Role / Timeline / Class).
3. **Role line break.** “Full-Stack Engineer — multi-tenant SaaS & enterprise / systems” is an orphan. Fix the measure.
4. **Wine chip rain.** Seven project kickers in accent on one scroll. Mute support chips to ink/muted; keep wine on the two focus kickers only.

### Work `/work`

Masthead (kicker + Geist title + lead) is correct. Tabs as words + underline, search as an underline — correct. Catalog is chip + title + subtitle + fan, one column — correct. Do not bring back chips.

**Change:**

- **Filters sit under the two feature bands.** A recruiter who clicks Mobile still sees the ERP and the helpdesk first. Featured stories are Home’s job. On `/work`, put tabs + search at the top of the catalog (or the top of the page) and let the two hire stories live only as larger rows *inside* the unfiltered “All” list — or pin them, but they must hide when the filter would exclude them.
- **Duplicate of Home.** Same two bands, same stills, same metrics. The jump Home → Work currently feels like a replay, then a long list of 104px fans.
- Catalog fans are too small to prove UI. Prefer one cropped still per row over a rotated stack.

### Case `/work/[slug]`

This is where an agency decides “I can send this to a hiring manager.” Long-read + hide-header is the right chrome. Geist title, Role / Timeline / Class, hairline decisions table — correct.

**Change:**

- **Hero image is not the product.** TradeflowBD’s `heroMockup` (`dashboard.webp`) reads as a watercolor port with numbers. Home’s tiny crop of the same file looks slightly more like UI; the case blow-up looks like a poster. Put a real 16:10 screen here (orders, stock, desk). Illustration can live later in the article, not as the first evidence.
- **Email is the only solid button** because there is no live URL. That is honest — and it makes the first action “contact me” before “look at this system.” Keep Email in the close band. In the hero, a ghost “All work” or nothing is calmer than another wine pill.
- **TOC is a second article.** Structured sections *plus* every markdown `h2` produces ~20 items, with duplicates (Overview / At a Glance, Decisions / Core Technical Decisions, Stack / Tech Stack, Security twice). Cap it at the structured set, or at 6–8 hashes. A forwarded hiring manager will not use a thesis sidebar.

### About `/about`

Same stationery, longer file. Correct that there is no second portrait. Jump as wrapping mono links — correct. How I work as `01` + Geist title — correct. Certs as table rows — correct. Beyond after hire evidence — correct.

**Change:**

- **`[draft]` is on the live page.** How I work proof links render `[draft] TradeflowBD ERP →`. Stack legend is `[draft] Primary = ink · Prior = muted…`. Dummy layout data leaking into a recruiter file reads as unfinished, not as WIP comments. Wire real case links or omit the row.
- Proof line is one muted sentence (right shape) with lowercased metric labels (wrong). Keep the mid-dot line; stop forcing `toLowerCase()` on proper nouns.
- Career wraps Home’s experience rail and tries to hide its kicker. Screen readers still hear “Career” then “Work experience.” Hide or reuse one heading.

### Satellites (where the system still splits)


| Page                       | Now                                                                                          | What to change                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Skills**                 | Tabs + name/desc rows. Closest to the system.                                                | Draft descriptions must not ship as `[draft] Description pending…`. Muted text, not a gray box.         |
| **Credentials**            | Hairline lists, featured first, tabs + underline search.                                     | Fine. Watch tab wrap as issuer count grows.                                                             |
| **Philosophy**             | One principle per band. Slot well for mermaid.                                               | Slot is right; global `pre` still rounds and shadows the diagram. Override radius to 0–6px, no shadow.  |
| **Education / transcript** | **Masthead + facts rail + slot table — this landed.**                                        | Institution link is wine; Overview repeats the lead. Dead `.edu-hero` / badge / gradient CSS is a trap. |
| **HSC gallery**            | Dense 2-col / auto-fill mosaic, more “designed” than Work.                                   | Date-rail + fans, or a quiet 1–2 col document. Civic photos must not out-design the case studies.       |
| **Research**               | Article masthead, then KPI tiles (`about-hero-proof`) and slot tables.                       | Treat as a case: meta rail, not a metric dashboard.                                                     |
| **Archive**                | Date rail — right idea.                                                                      | `[draft]` dates/subtitles if content is missing. Photos as fans, not mosaics.                           |
| **Leftover galleries**     | `GalleryPage` without attic crumb still uses **NDot titles**.                                | Geist 800, same as every other H1.                                                                      |


---

## Priority issues (do these in order)

### 1. Product proof, not portrait-adjacent thumbnails

**What:** Home/Work stills cap at 280px. The flagship case hero is a painterly illustration, not a readable ERP screen.  
**Why:** Agencies need UI proof in the first scroll *and* on the page they forward. Face + watercolor ≠ “this person ships multi-tenant SaaS.”  
**Fix:** Crop real app chrome (orders, inbox, stock) into the 16:10 well. Give Home/Work feature stills ~40% of the band. Drop or demote the illustration.  
**Command:** `arrange` + `distill`

### 2. Unfinished markers on the hire file

**What:** About ships `[draft]` proof links and a `[draft]` stack legend. Skills/archive/philosophy still have the same dummy strings.  
**Why:** A recruiter who opens About will assume the rest of the CV is also placeholder.  
**Fix:** Real case hrefs or no link. Strip `aboutLayoutDummy` from anything rendered to `/about`.  
**Command:** `polish`

### 3. Work is a replay, then a filter that does not apply

**What:** The two Home bands sit above Work filters. Filtering never hides them. Catalog proof is a 104px rotated fan.  
**Why:** The index should *find* a case. Right now it restates Home, then makes search feel broken.  
**Fix:** Filters first (or sticky on the catalog only). Featured rows honor the active tab. One still per catalog row, no stack.  
**Command:** `distill`

### 4. Case TOC and hero action

**What:** ~20 TOC hashes; wine Email as the first case action; illustration as hero.  
**Why:** The forwarded page looks like a thesis with a contact button, not a product file.  
**Fix:** TOC = structured sections only (≤8). Email lives in the close band. Hero = UI still.  
**Command:** `quieter`

### 5. Type kit and leftover product radius

**What:** Mono metrics, wine chip rain, 9999px pills, `pre` 16px + shadow, dead `.card` / `.edu-hero` CSS, NDot on leftover galleries.  
**Why:** The stationery story breaks the moment a recruiter hits a code block, a gallery, or the CTA.  
**Fix:** Geist 800 for metric values and all H1s. Support kickers in muted ink. Button radius 2–6px. `pre` 4–8px, no shadow. Delete unused education card CSS.  
**Command:** `typeset` + `normalize`

---

## Minor observations

- Home support grid is 2 columns; Work catalog is 1. That is fine. Do not 2-column the catalog.
- Shot fan rotation (`-6deg`, hover `-4deg`) is calmer than −11deg. At 104px it is still decoration. Prefer crop over tilt.
- Feature still frame is 5px + `0 6px 16px` shadow — a tiny product card. 0–2px radius, hairline only.
- `CURRENT` on the experience rail is a 9999px outline pill. A small caps word is enough.
- Education Overview restates the masthead lead. One or the other.
- Case `hero-well` pads the image in slot cream like a mat. Good for stationery; bad if the image is already a poster.
- Inline `code` is ink on slot — good. Do not put it back in wine.
- Header hide vs sticky Work filters: the pin-on-header-hidden behavior is right. Do not offset `top: 57px`.

---

## Questions

- If a recruiter has **eight seconds**, should they remember a face, or a spelled name plus one unmissable product still?
- What would a **confident** version look like: two photographed systems at band scale, one Email button, no draft strings, no TOC novel?
- Does this need to feel like a **developer toy** (mono KPIs, wine chips, tilted fans) to prove you can design — or like **stationery from someone who ships ERP**?
