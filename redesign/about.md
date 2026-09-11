# About — design source

Tokens, type, buttons, motion: [system.md](./system.md). This file is page layout only.

Live page: `/about` (`src/pages/about.astro` + `src/components/about/*`).  
Close band and actions match Home. Chrome from [header.md](./header.md).

## Concept

The person file. Home is the 8-second hire scan. About is the 90-second “who is this, how do they work, can I trust the pedigree.”

- Same stationery. Same left edge. Same burgundy budget (labels, one solid button, one 2px close rule).
- Spelled name in Geist 800 (no NDot). Section titles Geist 800. No `00 // EXECUTIVE PROFILE` stamps.
- Hierarchy by **layout type**, not a stack of identical cards.
- Hobbies, thesis, certs, and philosophy live here. They do not leak onto Home.

## Tokens

Identical to Home. Page shell: `BaseLayout` with `isWide` + `alignStart`. Column ~1180px.

Do not invent a second cream gradient for the close block. Use Home’s close: paper, 2px accent rule, left type.

## Wireframe

Desktop (~1180):

```
ABOUT
Marcel David Baroi
Full-Stack Engineer — multi-tenant SaaS
Longer bio (3–5 lines). Architecture-first. Vue / Quasar / PostgreSQL.
10+ platforms shipped · 100% RLS … · 3.91 B.Sc. … · +60% code reusability
[ EMAIL ME ]  [ RESUME ]  LinkedIn  GitHub
Jump  How I work · Stack · Career · School · Certs · Beyond
────────────────────────────────────────────

HOW I WORK                         Full philosophy →
01  Architecture-first AI synthesis
    Two to four sentences. Proof → case
02  Zero-trust relational data
03  Atomic reusability
04  Measurable velocity
────────────────────────────────────────────

STACK                              Full matrix →
ARCHITECTURE & AI     Primary · Prior as quieter lines
BACKEND & DATA        Vue 3 · Quasar · …
FRONTEND & MOBILE
DEVOPS
────────────────────────────────────────────

CAREER                             All work →
Nov 2024 — Present    Software Engineer  CURRENT
                      Company
                      One highlight
                      Case · Case
(same rail as Home)
────────────────────────────────────────────

SCHOOL
[logo] B.Sc. CSE · DIU · 3.91 · 142 cr     Transcript →
       Thesis · Bangla HWCR · 97.93%       Paper →
[logo] HSC Science · NDC · 4.67            Details →
Civic years → Archive
────────────────────────────────────────────

CERTS                              All 33 →
Google Cloud     Responsible AI …          Aug 2025  ↗
… (6 featured rows)
────────────────────────────────────────────

BEYOND
Tabla · Drawing · Theatre · Cinema   (one line each + date)
────────────────────────────────────────────
════════════════════════════════════════════  (burgundy 2px)
Available for full-time · remote or relocation
Let’s talk.
[ EMAIL ME ]  [ LINKEDIN ]
```

Phone (≤900):

```
ABOUT
Marcel David Baroi
role + bio
proof line (muted)
[EMAIL] [RESUME] LinkedIn GitHub
Jump as wrapping mono links

01
Title
Body
Proof →

STACK as stacked category blocks

date
role
…

[logo] degree · school · gpa
       Transcript →

issuer
title                         date ↗

pursuit
one sentence
```

No portrait on About. Home already owns the 3:4. Repeating it here makes two identity pages compete.

## Section recipes

Each block is a different layout. Do not wrap them in `card`.

| Section | Layout | What it is | What it is not |
|---|---|---|---|
| Hero | Masthead + bio + one proof line + Home actions | Identity with more room than Home | KPI dashboard, ATS, pill triage bar, on-this-page card |
| Jump | Mono links on one hairline | In-page index | Numbered `01. Impact` chip bar |
| How I work | Numbered essay list (01–04) | Method | Icon tiles, 2×2 principle cards |
| Stack | Category columns / stacked lists | Hire-me-for-this vs prior | Chip clouds, emoji category headers |
| Career | **Same rail as Home Experience** | Jobs + 1 highlight + case links | Duplicate “executive highlight” cards of Tradeflow / packaging |
| School | Logo + one-to-two lines (Home education + thesis) | Credential scan | Twin job cards, SVG mortarboards |
| Certs | Table rows: issuer · title · date · ↗ | Verifiable list | Icon-in-box pills |
| Beyond | Compact definition list | Human, after the hire case | Four equal hobby cards, IMDb as a hero |
| Close | Copy Home close exactly | Last action | Centered gradient `Let’s Build Something Resilient` |

### Hero copy

- Status line optional; if used, match Home (`AVAILABLE · REMOTE / RELOCATION · DHAKA`), not a green-glow pill.
- Bio may be longer than Home (still concrete verbs, no “disciplined full-stack specializing in…” filler).
- Proof: one muted mid-dot line with all four (`10+`, `100%`, `3.91`, `+60%`) — not a KPI grid.
- Actions: Email solid, Resume ghost, LinkedIn + GitHub text. No Copy Email button in the hero (Menu already copies). No ATS.

### How I work

Data: `principles` in `src/data/aboutData.ts`.  
Each item: mono `01`, Geist title, body, one proof link into `/work/…`.  
Exit: `Full philosophy →` `/philosophy`.

### Stack

Data: `skillCategories`.  
Show **names** on About; keep long `desc` for `/skills`.  
Primary = ink. Prior = muted, still readable. Legend as one mono sentence, not color dots in a card.  
Exit: `Full matrix →` `/skills`.

### Career

Do not invent a second highlight grid. Bind the experience collection the same way Home does (`src/content/experience/`, period left 11.5rem, stack ≤900px).  
Exit: `All work →` `/work`.

### School

Three rows max:

1. B.Sc. CSE · DIU · CGPA 3.91 → `/education/bsc-cse`
2. Thesis · Bangla HWCR · DenseNet 97.93% → `/research/01-bangla-hwcr-ekush`
3. HSC Science · Notre Dame · 4.67 → `/education/hsc-science` (quiet; do not promote to a card)

One archive sentence under the list → `/archive`.

### Certs

Featured six from `compactCerts`. Row is the hit target (external verify).  
Exit: `/credentials` with live count (not a hardcoded “33” if the collection changes).

### Beyond

`compactPursuits`: title, mono date/tag, one sentence. Cinema may keep IMDb as a text link.  
This is the only primary surface for hobbies.

## Satellite pages (same grammar, later pass)

These are attics of About. When they are redesigned, they inherit this file + Home tokens. They are not a third visual language.

| Route | Job | Layout hint |
|---|---|---|
| `/skills` | Full matrix + descriptions | Category essays + name/desc rows; filter as tabs like Work, not a dashboard |
| `/credentials` | All verified certs | Issuer groups as hairline lists; featured first |
| `/philosophy` | Long method | One principle per band (number + title + body + mermaid optional + proof links). No emoji headers |
| `/education/[slug]` | Transcript / program | Masthead + facts rail + table (tables may sit on card-slot `#f4f0e7`, not 16px rounded marketing cards) |
| `/research/[slug]` | Thesis | Article like a case study ([work.md](./work.md) case recipe) |
| `/archive` | Civic / pre-career | Date rail like Experience. Photos as shot fans, not mosaics |

Breadcrumb on satellites: `About / Skills` in mono, left, no card.

## Type roles

Home table, plus:

| Role | Face | Size (desktop) | Color |
|---|---|---|---|
| Page kicker `ABOUT` | Mono 700 uppercase | 0.62rem | accent |
| Principle number | Mono | 0.68–0.85rem | muted |
| Principle title | Geist 800 | ~1.15rem | ink |
| List name (skill/cert) | Geist 500 | ~0.95rem | ink / muted if prior |
| Jump links | Mono | 0.68rem | muted → accent hover |

Known issue from Home still applies: bump **size** before darkening the palette.

## Motion

Same as Home. Principle rows: title → accent on hover. No lift on every section. Respect `prefers-reduced-motion`.

## Actions

Hero: Email + Resume + LinkedIn + GitHub (Home).  
Close: Email + LinkedIn (Home).  
In-body exits: philosophy, skills, work, education, research, credentials, archive — text `→` links, not full-width buttons.

## Source

- Page: `src/pages/about.astro`
- Sections (to be rewritten against this contract): `src/components/about/*`
- Data: `src/data/aboutData.ts`, `src/data/education.ts`, `src/data/research.ts`, `src/content/experience/`
- Shell: `src/layouts/BaseLayout.astro`

## Do not

- Restore `00 //` NDot section stamps
- Center the hero or the close
- Wrap every section in 16px cards
- Put ATS, Copy Email, or a six-button action row in the hero
- Duplicate Home’s work focus bands
- Use NDot on the role, section titles, or “Let’s Build…”
- Green status glow, glassmorphism, emoji category icons
- Make education a second experience card
- Put hobbies above the hire evidence (stack / career / school / certs come first)
