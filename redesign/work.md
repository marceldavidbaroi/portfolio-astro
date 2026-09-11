# Work — design source

Tokens, type, buttons, motion: [system.md](./system.md). This file is page layout only.

Live pages: `/work` (`src/pages/work.astro`), `/work/[slug]` (`src/pages/work/[slug].astro`).  
Feature bands and shot fans match the live Home (`src/pages/index.astro`). Chrome is [header.md](./header.md) — already shipped. Do not restyle the bar on these pages.

## Concept

Editorial index + long articles. Same stationery as Home. Not the current equal-card gallery.

- Home already told two stories (`01-tradeflowbd`, `02-service-desk`) and glanced at five more. Work is every case, then the article.
- Size still means importance: copy Home’s two **feature bands**, then the rest as **work rows + shot fans**.
- NDot is **not** used. Geist titles. Mono for kickers, filters, dates, CTAs.
- Header hides on scroll-down ([header.md](./header.md)). Work uses that: more reading room, filters can pin in the vacated strip.
- Recruiter path: filter or scroll → open a case → XYZ + metrics + decisions in one sitting.

## Tokens

Identical to Home. Do not invent a second palette.

| Token | Value | Use |
|---|---|---|
| Paper | `#fffcf8` | Page |
| Slot | `#f4f0e7` | Empty shot, hero well |
| Ink | `#2b251e` | Titles, XYZ, body |
| Muted | `#746855` | Role, dates, tab idle, captions |
| Accent | `#84353f` | Kickers, active tab, CTAs, close rule |
| Line | `rgba(95, 80, 56, 0.10–0.14)` | Bands, rows, filter hairline |

Shell: `BaseLayout` with `isWide` **and** `alignStart` (Home). Column ~1180px, left-aligned, `overflow-x: clip`. Today’s `/work` is centered and card-wrapped — that goes away.

## Chrome (do not rebuild)

Use the live header. Work does not draw its own nav, resume, or ATS.

| Rule | On `/work` and `/work/[slug]` |
|---|---|
| Active | **Work** is accent. `/work/*` counts as Work. |
| Hide | Scroll down past ~72px → bar slides off. Scroll up / top / Menu open / focus in header → bar returns. |
| Menu | Desktop `Menu` + `⌘K`. Phone solid Menu. Resume, ATS, copy-email stay in Menu. |
| Footer | Shared status line only. Pages own the close band on the case, not a second Email in the footer. |
| Sticky vs hide | Index filter may pin at `top: 0` **after** the header has hidden, so they do not stack. Case TOC (if any) uses `top: 0.75rem` — it must not fight a always-visible bar. |

## Wireframe — index `/work`

Desktop (~1180). Header from [header.md](./header.md) sits above this; not drawn in the page.

```
WORK · 14 CASE STUDIES
Selected work
Production SaaS, ERP, mobile, and internal tools.

All 14   Enterprise  FinTech  Mobile  Tools     Search ________
Vue 3 · PostgreSQL · NestJS · Capacitor · Reset     (text links)
Showing 4 of 14 · Clear                             (only when filtered)
────────────────────────────────────────────

ENTERPRISE ERP & SAAS
Title (XYZ, clamp 4)
100%     17+     4 Surfaces          Read case study →
────────────────────────────────────────────
(same .feature-band ×2 — TradeflowBD, Service Desk; hidden when filter/search excludes them)

chip · title                              [one 16:10 still]
subtitle (clamp 1)
────────────────────────────────────────────
…remaining, 1 column, data.order, skip the two focus ids

See all work is already this page
View archive →
```

When scrolling the index: header hides; the filter row (tabs + search) may stick as a paper strip with the same hairline as `header.is-scrolled`. It unsticks / sits normally at the top of the page when `scrollY` is small.

Phone (≤900 / ≤768):

```
WORK · 14
Selected work
lead

All 14  Enterprise  …     (horizontal scroll tabs)
search (full width)
stack links wrap

Title
XYZ
metrics
Read case study →

title                              [fan]
…

Archive →
```

Phone Menu is the burgundy pill. Tabs must not collide with it; they live in the page, not the header.

## Wireframe — case `/work/[slug]`

Desktop (~1180). Long read; header hide is the point.

```
Work / Title                               8 min
ENTERPRISE ERP & SAAS · Proprietary · Live

Title in Geist 800
Role · Timeline
XYZ description (same sentence as the index, not a second slogan)

[ EMAIL / LIVE if real ]  Repo  Docs     (Home .btn-solid / .btn-ghost / .text-link)

[ one hero 16:10 still — or 9:16 for phone projects ]

Role          Timeline         Class
Engineer      2025 — Present   Proprietary

OVERVIEW
executiveOverview

DECISIONS
Challenge                 Decision                  Outcome

BEFORE → AFTER
pain                      gain

STACK    Frontend · · ·    Backend · · ·     (Home mid-dot colophon)

SECURITY / ROADMAP        short bullets

…markdown…

← Previous title          Next title →
════════════════════════════════════════════  (2px accent)
More work → /work              [ EMAIL ME ]
```

Phone: stack meta; hero in column; decisions stack; prev/next stack. No TOC.

## Section recipes — index

Reuse Home class grammar. Copy layout from `index.astro`, then add catalog fields. Do not wrap in `.card`.

| Section | Layout | What it is | What it is not |
|---|---|---|---|
| Masthead | Home `.label` + Geist H1 + one lead. Count in the kicker (`WORK · 14 CASE STUDIES`) | Directory | NDot “SELECTED WORK”, `01 // DIRECTORY`, burgundy subtitle |
| Filters | Hairline tabs + underline search. Optional sticky once header is hidden | Find a case | Pill toolbar card, filled active chip, “Quick Stack” button cloud |
| Focus | Home `.feature-band` ×2 (copy + metrics under title + CTA + 16:10 still) | The hire stories | Flat catalog where every row is equal |
| Catalog | Chip + title + one-line subtitle + fan, **one column** | The rest | XYZ + metrics + CTA CV dump |
| Empty | One muted sentence + `Clear` | Honest miss | Illustration |
| Exit | Home `.work-index` energy: `View archive →` | Civic / non-case | Dead end, second close CTA |

### Focus vs catalog (no duplicates)

- Focus IDs locked to Home: `01-tradeflowbd`, `02-service-desk`.
- Catalog = collection sorted by `data.order`, **excluding** those two ids.
- Home support five stay a Home-only glance. On `/work` they appear in the catalog in `order`, not as a second featured pair.

### Filters

Keep the mapping in `work.astro`: All, Enterprise SaaS & ERP, FinTech & Accounting, Mobile & IoT, Tools & Architecture.  
Tab = Geist label + mono count. Active = accent word + 2px accent rule under the tab (same idea as header active: color, not a fill).

Search: title, chip, role, stack. Short placeholder (`Vue, PostgreSQL, role…`).  
Stack shortcuts: **text links** with mid-dots, like Home `.skills-line`. Reset is a text control, not a dashed pill.

Status when filtering: `Showing 4 of 14` + `Clear` in mono 0.68rem.

Sticky filter (index only):

- `position: sticky; top: 0; z-index: 40` (header is 50).
- Solid paper (`var(--paper)`) + bottom hairline when pinned — no blur or glass.
- Because the header **hides on the way down**, the filter can sit at the physical top without a 57px offset. Do **not** add `top: 57px` “for the header”; that leaves a dead gap when the bar is gone.
- If JS is easier: add `is-pinned` when `header` has `is-hidden`. Either way, never show header + filter stacked as two bars.

### Catalog row

Home `.work-item` is chip + title | fan. On Work catalog, same density + one subtitle line:

```
chip
title (~1.08rem)
subtitle clamp 1                 (muted)
                              [ .shot-stack ]
```

Metrics and “Read case study →” live on focus bands and case pages only.

Fan: first 3 non-`thumb-` images, `--i` rotate per layer (Home). `platformType === 'mobile'` → `.shot-stack.is-phone`. Missing → one empty slot, not four placeholders.

Whole row links to `/work/{id}`. Hover: title → accent; layers lift (Home). No card `translateY`.

Classification = one muted mono word (Proprietary / Open source / Independent). No colored IP chips.

## Section recipes — case study

| Section | Layout | What it is | What it is not |
|---|---|---|---|
| Top | Mono breadcrumb `Work / {title}` + read time | Orientation | `CASE STUDY // 01` NDot, clock pill |
| Title | Chip · class · status. Geist title. Role · timeline. XYZ | CV entry expanded | NDot subtitle, emoji in class |
| Meta rail | Role · Timeline · Class (3-cell) | Proof at a glance | KPI metric row under title |
| Actions | Home `.hero-actions`: one `.btn-solid` max | Live if `isRealUrl` | SVG on every button |
| Hero | One 16:10 still (9:16 phone) | Evidence | Shot fan, fake browser chrome, 4-up mosaic |
| Meta | 3-cell rail, hairline, no cards | Role, time, class | “Recruiter Review Budget” |
| Overview | Paragraph | `executiveOverview` | `01 // IMPACT FORMULA` |
| Decisions | Rows: challenge → decision → outcome | Trade-offs | Icon accordion |
| Value | Two columns, Before / After | Friction vs gain | Nested cards |
| Stack | Home skills mid-dot lines per `techStack` bucket | Colophon | Logo clouds |
| Security / roadmap | Bullets | Hygiene | Card grid |
| Body | Markdown, global `pre` theme from BaseLayout | Narrative | |
| Adjacent | Hairline prev / next titles | Continue | Giant thumbs |
| Close | Home `.close`: 2px accent rule + Email + `All work →` | Leave | Duplicate hero, hobbies |

### Links

Keep `isRealUrl`. Solid = Live only when a real URL exists. Ghost / text = repos, docs, parent. Email lives in the close band, not the hero.

### TOC (structured only)

Overview · Decisions · Before → after · Stack · Security — from structured case fields only. Do not append markdown `h2`s.

Optional. Desktop only, viewport ≳1200, ≥4 sections, sticky `top: 0.75rem`, `z-index: 30`. Phone: omit. Not a card under the title. Must remain usable while the header is hidden (no offset that assumes a persistent bar).

### Data contract (unchanged)

`.agents/rules/project-standards.md`: XYZ `description`, `role`, `timeline`, `executiveOverview`, 3–6 `impactMetrics`, categorized `techStack`, 3–5 `keyDecisions`, `valueProposition`. Design displays those fields. It does not invent a marketing layer.

## Type roles

Home table, plus:

| Role | Face | Size (desktop) | Color |
|---|---|---|---|
| Index / case title | Geist 800 | index clamp 1.85–2.6rem; case clamp 1.85–3.1rem | ink |
| Feature title | Geist 800 | clamp 1.15–1.55rem | ink |
| XYZ / lead | Geist | 1.05rem index lead; 0.9rem band body | ink |
| Filter tab | Geist 500 | 0.88rem | muted / accent |
| Filter count | Mono | 0.62rem | muted |
| Breadcrumb / dates | Mono | 0.68rem | muted |
| Kicker / CTA | Mono 700 uppercase | 0.62–0.72rem | accent |
| Metric value | Mono | 0.92rem | ink |
| Metric label | Mono uppercase | 0.75rem | muted |

If type feels small, raise **size** first (Home note). Do not darken the palette. No NDot on Work.

## Motion

- Index / bands: title → accent; shot layers lift (Home). No lift on the row box.
- Header: hide/show from [header.md](./header.md). Work must not `transition: transform` on `body` or `main` in a way that breaks sticky filter.
- Case hero: Home `rise` only if `prefers-reduced-motion: no-preference`.
- Reduced motion: header snaps; filter pin snaps; no fan lift.

## Actions

| Surface | Actions |
|---|---|
| Index | Row / band → case. Masthead has no Email. Archive at the foot. |
| Case | Live (if real) + text repos. Close: Email + `All work →`. |
| Header / Menu | Resume, ATS, copy email — never on the Work hero. |

## Source

- Index: `src/pages/work.astro` (rewrite against this file)
- Case: `src/pages/work/[slug].astro`
- Copy-from: `src/pages/index.astro` (`.feature-band`, `.work-item`, `.shot-stack`, `.metric-row`, `.hero-actions`, `.close`)
- Chrome: `src/layouts/BaseLayout.astro`, `src/components/CommandMenu.astro`
- Data: `src/content/projects/`
- Home lists: [home.md](./home.md) “Work data on Home”

## Do not

- Restore NDot titles or `01 // DIRECTORY` / `CASE STUDY //`
- Keep the 2-column card grid or 4-thumb mosaics
- Fake device chrome (notches, traffic-light browsers, dummy URLs)
- Put ATS, Copy Email, or Resume in the Work masthead (Menu already has them)
- Offset sticky filters by header height — the bar hides
- Repeat Home’s experience / education / stack / close-hobbies on the index
- Show the two focus projects again in the catalog
- Hide the path back to `/work` from a case
- Color-code IP chips
- Turn filters into a faceted sidebar
- Center the page or drop `alignStart`
