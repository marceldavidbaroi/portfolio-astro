# Home — design source

Tokens, type, buttons, motion: [system.md](./system.md). This file is page layout only.

Live page: `/` (`src/pages/index.astro`).  
This file is the design contract for Home. Sibling contracts: [header.md](./header.md), [work.md](./work.md), [about.md](./about.md). Those pages borrow tokens, type roles, and layout grammar from the system — they do not copy the old card grid.

## Concept

Editorial stationery, not a product splash or a card catalog.

- Warm paper field, burgundy used sparingly (one solid button, labels, one close rule).
- Left-aligned identity. Geist 800 spelled name (no NDot). Mono for status, dates, kickers, links.
- Hierarchy by **layout type**, not by repeating rounded cards.
- Recruiter scan in ~8 seconds: who, what they ship, proof, next action.

## Tokens

| Token | Value | Use |
|---|---|---|
| Paper | `#fffcf8` | Page background |
| Card / slot | `#f4f0e7` | Portrait empty, shot empty |
| Ink | `#2b251e` | Name, titles, body |
| Muted | `#746855` | Role, dates, captions |
| Accent | `#84353f` | Labels, primary button, close rule |
| Accent hover | derived (`color-mix` 75% accent + ink) | Button hover — ~`#6d3136` |
| Line | `rgba(95, 80, 56, 0.10–0.14)` | Section hairlines |
| Sans | Geist | Body, titles |
| Mono | NType 82 Mono | Status, kickers, CTAs, dates |

Page shell: `BaseLayout` with `isWide` + `alignStart`. Content column ~1180px, left-aligned, `overflow-x: clip`.

## Wireframe

Desktop (~1180):

```
[ Home  Work  About ]                    [ Menu ]

AVAILABLE · REMOTE / RELOCATION · DHAKA     ┌──────────┐
Marcel David Baroi                          │ portrait │
Full-Stack Engineer — multi-tenant SaaS     │  3:4     │
I design and ship Vue / Quasar…             └──────────┘
[ EMAIL ME ]  [ RESUME ]  LinkedIn  GitHub
────────────────────────────────────────────

WORK                              All 14 →
ENTERPRISE ERP & SAAS
Title
100%     17+     4 Surfaces
XYZ paragraph
Read case study →                    [16:10 still]
────────────────────────────────────────────
(same band ×2 — TradeflowBD, Service Desk)

chip · title                              [shot fan]
chip · title                              [shot fan]
… (5 supporting rows, 2 columns)
See all work · 14 case studies  All 14 →    View archive →  (/archive, muted)
────────────────────────────────────────────

EXPERIENCE
Nov 2024 — Present    Software Engineer  CURRENT
                      Company
                      One highlight
                      Case · Case
────────────────────────────────────────────

EDUCATION
[logo] B.Sc. in CSE · DIU · CGPA 3.91     Transcript →
[logo] HSC Science · NDC · GPA 4.67       Details →
────────────────────────────────────────────

STACK    Vue 3 · Quasar · TypeScript · …  Full matrix →
════════════════════════════════════════════  (burgundy 2px)
Available for full-time · remote or relocation
Let’s talk.
[ EMAIL ME ]  [ LINKEDIN ]
```

Phone (≤900 / ≤640):

```
AVAILABLE · REMOTE / …
Marcel David          ┌─────┐
Baroi                 │ 3:4 │
Full-Stack Engineer —  └─────┘
(role + bio full width)
[EMAIL] [RESUME] LinkedIn GitHub

WORK                    All 14 →
Title
XYZ (3 lines)
metric  metric  metric
Read case study →

title                         [fan]
…1 column…

See all work
14 case studies
View archive →

Nov 2024 — Present
Software Engineer
…

[logo] degree · school · gpa
       Transcript →
```

Hero grid areas, desktop: `status | portrait`, `name | portrait`, `role | portrait`, `bio | portrait`, `proof | portrait`, `actions | portrait`.  
≤900px: portrait only beside **name**; role/bio/proof/actions full width. Portrait ~128px (104px ≤420).

## Section recipes

Each block is a different layout. Do not turn them back into identical cards.

| Section | Layout | What it is | What it is not |
|---|---|---|---|
| Hero | 60/40 identity + portrait | Person + hire facts | Product screenshot, centered splash |
| Work focus | Copy + CTA + 16:10 still (~40% band) | Two stories, size = importance | 2×2 equal cards, metrics as third column |
| Work support | Row + small stacked shots | Catalog glance | Large mosaics |
| Work exit | Index row | Path to all 14 | Dead end into Experience |
| Experience | Date \| role rail | Scan line | Photo stacks |
| Education | Logo + one line | Compact credential | Twin of a job card |
| Stack | Typeset mid-dot line | Colophon | Chip cloud |
| Close | Wide band, 2px accent rule | Last action | Hobbies, extra cards |

### Work data on Home

- Focus: `01-tradeflowbd`, `02-service-desk`
- Support: `07-pennyperfect`, `03-thrift-inventory`, `14-microfinance-loan-app`, `11-quizzes-streaming`, `08-docstach`
- Exit: “See all work” → `/work`; “View archive →” → `/archive` (muted secondary)

Shot fans: first 3 non-`thumb-` images, slight rotate per layer. Phone projects use a taller stack.

### Experience

Vertical rail. Period left (11.5rem desktop), role / badge / company / one clamped highlight / up to 2 case links. Stacks to one column ≤900px. No photo collage.

### Education

Two rows: B.Sc. CSE DIU 3.91 and HSC Science Notre Dame 4.67. Home keeps college; do not promote HSC to a full card.

## Type roles

| Role | Face | Size (desktop) | Color |
|---|---|---|---|
| Name | Geist 800 | clamp 1.85–3.35rem | ink |
| Section H3 | Geist 800 | ~1.15–1.55rem | ink |
| Body / bio | Geist | 1.05rem | ink |
| Role | Geist 500 | 1.02rem | muted |
| Close title | Geist 800 | clamp 2–3rem | ink |
| Label / kicker | Mono 700 uppercase | 0.62rem | accent |
| Status / dates | Mono | 0.68rem | muted |
| Pill button | Mono 700 uppercase | 0.72rem | cream on accent / ink ghost |

Known issue: kickers still at 0.62–0.72rem in some specs may feel small. Metric captions use `--type-caption` (`0.75rem`). If we bump type further, raise **size** first. Do not darken the palette. Body contrast is already 14.9:1; muted on paper is 5.4:1 (AA at `0.75rem` and up).

## Motion

Portrait: straight frame, light shadow, `rise` fade if `prefers-reduced-motion: no-preference`. No caption on real photo.  
Work row hover: title → accent; shot layers lift slightly.  
No `translateY` lift on every block.

## Actions

Hero: Email (solid) + Resume (ghost) + LinkedIn + GitHub (text).  
Close: Email + LinkedIn.  
Work: band → case study; index row → `/work`.

## Source

- Page: `src/pages/index.astro`
- Shell: `src/layouts/BaseLayout.astro`
- Data: `src/content/projects/`, `src/content/experience/`, `src/data/education.ts`, `src/data/aboutData.ts` (`metrics`)
- Portrait: `public/images/portrait.webp` (jpg/jpeg/png fallback). Missing → MDB slot.

## Do not

- Restore `01 // CREATION` NDot section stamps
- Center the hero
- Wrap every section in 16px cards
- Put hobbies on Home
- Put ATS in the hero
- Use NDot on the Home name
- Treat education as a second experience card
- Hide the path to all work
