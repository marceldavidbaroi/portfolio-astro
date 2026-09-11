# Home — design source

Live page: `/` (`src/pages/index.astro`).  
This file is the design contract for Home. Work, About, and Header should borrow from here, not copy the old card grid.

## Concept

Editorial stationery, not a product splash or a card catalog.

- Warm paper field, burgundy used sparingly (one solid button, labels, one close rule).
- Left-aligned identity. NDot **once** (the name). Geist for titles and body. Mono for status, dates, kickers, links.
- Hierarchy by **layout type**, not by repeating rounded cards.
- Recruiter scan in ~8 seconds: who, what they ship, proof, next action.

## Tokens

| Token | Value | Use |
|---|---|---|
| Paper | `#fffdfa` | Page background |
| Card / slot | `#f4f0e7` | Portrait empty, shot empty |
| Ink | `#2b251e` | Name, titles, body |
| Muted | `#746855` | Role, dates, captions |
| Accent | `#b42135` | Labels, primary button, close rule |
| Accent hover | `#96192a` | Button hover |
| Line | `rgba(95, 80, 56, 0.10–0.14)` | Section hairlines |
| Sans | Geist | Body, titles |
| Display | NDot 55 | Name only |
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
10+          100%          3.91
[ EMAIL ME ]  [ RESUME ]  LinkedIn  GitHub
────────────────────────────────────────────

WORK                              All 14 →
ENTERPRISE ERP & SAAS
Title (XYZ paragraph)
100%     17+     4 Surfaces          Read case study →
────────────────────────────────────────────
(same band ×2 — TradeflowBD, Service Desk)

chip · title                              [shot fan]
chip · title                              [shot fan]
… (5 supporting rows, 2 columns)
See all work · 14 case studies            View archive →
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
10+   100%   3.91
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
| Work focus | Text band + 3 metrics + CTA | Two stories, size = importance | 2×2 equal cards |
| Work support | Row + small stacked shots | Catalog glance | Large mosaics |
| Work exit | Index row | Path to all 14 | Dead end into Experience |
| Experience | Date \| role rail | Scan line | Photo stacks |
| Education | Logo + one line | Compact credential | Twin of a job card |
| Stack | Typeset mid-dot line | Colophon | Chip cloud |
| Close | Wide band, 2px accent rule | Last action | Hobbies, extra cards |

### Work data on Home

- Focus: `01-tradeflowbd`, `02-service-desk`
- Support: `07-pennyperfect`, `03-thrift-inventory`, `14-microfinance-loan-app`, `11-quizzes-streaming`, `08-docstach`
- Exit: `/work` (count from collection)

Shot fans: first 3 non-`thumb-` images, slight rotate per layer. Phone projects use a taller stack.

### Experience

Vertical rail. Period left (11.5rem desktop), role / badge / company / one clamped highlight / up to 2 case links. Stacks to one column ≤900px. No photo collage.

### Education

Two rows: B.Sc. CSE DIU 3.91 and HSC Science Notre Dame 4.67. Home keeps college; do not promote HSC to a full card.

## Type roles

| Role | Face | Size (desktop) | Color |
|---|---|---|---|
| Name | NDot | clamp 1.85–3.35rem | ink |
| Section H3 | Geist 800 | ~1.15–1.55rem | ink |
| Body / bio | Geist | 1.05rem | ink |
| Role | Geist 500 | 1.02rem | muted |
| Close title | Geist 800 | clamp 2–3rem | ink |
| Label / kicker | Mono 700 uppercase | 0.62rem | accent |
| Status / dates | Mono | 0.68rem | muted |
| Metric value | Mono/Geist | 0.92–1.35rem | ink |
| Metric label | Mono uppercase | 0.58rem | muted |
| Pill button | Mono 700 uppercase | 0.72rem | cream on accent / ink ghost |

Known issue: labels at 0.58–0.72rem feel small. If we bump type, raise **size** first (body ~16px, labels ~12–13px). Do not darken the whole palette. Body contrast is already 14.9:1; muted on paper is 5.4:1 (AA at normal size, weak at caption size).

## Motion

Portrait: slight rotate (−1.1deg), `rise` fade if `prefers-reduced-motion: no-preference`.  
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
- Use NDot on anything except the name
- Treat education as a second experience card
- Hide the path to all work
