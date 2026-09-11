# Design system

Source of truth for tokens, type, components, and motion.  
Live reference: Home (`src/pages/index.astro`) and Work list (`src/pages/work.astro`).  
Page layout contracts: [home.md](./home.md), [work.md](./work.md), [header.md](./header.md), [about.md](./about.md).

CSS lives in `BaseLayout.astro` `:root`. Prefer those vars over magic numbers.

---

## Purpose

Editorial stationery portfolio for recruiters and hiring managers.  
Scan Home in ~8 seconds. Browse Work as an index, then a long article.  
Easy to read: raise type size before darkening color.

---

## Principles

1. **Stationery, not product UI.** Warm paper, hairlines, left type. Not a SaaS dashboard or card catalog.
2. **Size means importance.** Feature bands are bigger than support rows. Do not make every block equal.
3. **Burgundy is a budget.** Labels, one solid button, active nav word, 2px close rule. Nowhere else by default.
4. **Raise type size before darkening color.** Body contrast is already strong. Captions fail when they are too small.
5. **Spelled name, not a dotted wordmark.** Geist 800 for the Home H1 and page titles. No NDot on the name. Mono for status, dates, kickers, CTAs.

---

## Color

| Name | CSS var | Value | Use |
|---|---|---|---|
| Paper | `--bg-color` / `--paper` | `#fffcf8` | Page background; cream on solid buttons (~1% warmer than `#fffdfa`) |
| Slot | `--card-bg` / `--slot` | `#f4f0e7` | Empty portrait / shot wells; code block fill |
| Ink | `--text-main` / `--ink` | `#2b251e` | Titles, body, metric values |
| Muted | `--text-muted` / `--muted` | `#746855` | Role, dates, idle nav, captions |
| Accent | `--accent` | `#84353f` | Kickers, solid button, active word, close rule — wine on paper |
| Accent hover | `--accent-hover` | `color-mix(in oklch, var(--accent) 75%, var(--ink))` | Solid button hover — dried ink (derived from accent) |
| Line | `--card-border` / `--line` | `rgba(95, 80, 56, 0.12)` | Hairlines; range 0.08–0.14 opacity |

**Do not use:** `--btn-primary` / `--btn-primary-hover` (legacy brown). Buttons use accent.

Contrast notes: ink on paper ~14.9:1. Muted on paper ~5.4:1 (AA at normal size; weak below ~12px — bump size, do not darken muted).

---

## Type

| Role | Face | Size | Color | CSS var |
|---|---|---|---|---|
| Name | Geist 800 | clamp(1.85rem, 6vw, 3.35rem) | ink | Home H1 — spelled, Slack-safe |
| Page title | Geist 800 | clamp(1.85rem, 5vw, 2.6rem) | ink | — |
| Section / feature title | Geist 800 | clamp(1.15rem, 2.1vw, 1.55rem) | ink | — |
| Body / lead | Geist | 1.05rem / 1.55 lh | ink | `--type-body` |
| XYZ / band body | Geist | 1rem / 1.55 lh | ink | `--type-xyz` |
| Kicker / label | Mono 700 uppercase | 0.75rem | accent | `--type-kicker` |
| Metric label / tiny caption | Mono uppercase | 0.75rem | muted | `--type-caption` |
| Status / dates / footer | Mono | 0.75rem | muted | `--type-meta` |
| CTA / pill button | Mono 700 uppercase | 0.8125rem | cream on accent / ink ghost | `--type-cta` |
| Filter tab | Geist 500 | 0.9375rem | muted / accent active | `--type-tab` |
| Metric value | Mono | 1rem | ink | — |

Letter-spacing: kickers ~0.12–0.16em; CTAs ~0.08em; titles slight negative tracking.

---

## Space

| Token | Value |
|---|---|
| Content column | max-width 1180px (`isWide` + `alignStart`) |
| Section padding (desktop) | ~3.75rem vertical |
| Row / band padding | 1.5rem vertical |
| Hairline | 1px `rgba(95, 80, 56, 0.10–0.14)` |
| Close rule | 2px solid accent |
| Work-row fan column | 7.4rem (6.2rem ≤640px) |
| Shell inset | 2rem desktop; 1–1.5rem phone |

---

## Layout shell

- `BaseLayout` with `isWide` and `alignStart` for Home, Work, About.
- Left-aligned identity. No centered splash.
- Header: Home · Work · About left; Menu right. Hides on scroll down after ~72px. See [header.md](./header.md).
- Footer: one mono status line in the content column. Pages own the close CTA band.
- Overflow: `overflow-x: clip` on align-start mains.

---

## Components

Reuse these class names. Do not invent a parallel set.

| Class | Recipe |
|---|---|
| `.label` / `.kicker` | Mono uppercase accent; `--type-kicker` |
| `.btn-solid` | 2px radius; accent fill; cream text; `--type-cta` |
| `.btn-ghost` | 2px radius; transparent; ink + line border; hover → ink |
| `.text-link` / `.section-link` / `.inline-cta` | Mono ink; underline on hover; `--type-cta` or slightly smaller |
| `.feature-band` | Grid: copy \| metrics \| CTA; hairline bottom; size = importance |
| `.work-item` | Row: copy + shot fan; hairline; whole row links |
| `.shot-stack` / `ShotFan` | Feature = one 16:10 still; catalog `row-still`; hero phone variant taller |
| `pre` | 6px radius; slot fill; **no** box-shadow |
| `.metric-row` | Value Geist 800 + uppercase mono caption (`--type-caption`) |
| `.close` | 2px accent top rule; kicker + title + Email/LinkedIn |
| `.tab` | Geist; accent + 2px underline when active; no filled chip |
| `.search` | Underline input; no box |

One solid button max per action cluster. Resume/ATS/copy-email live in Menu, not heroes.

---

## Motion

Motion should make the site feel current and responsive — not busy. Prefer a few cheap cues over many.

### Principles

1. **Presence, not noise.** 2–3 intentional motions per page max (entrance + hover + chrome).
2. **Compositor-only when moving.** Prefer `transform` and `opacity`. Color transitions on text/buttons are fine and cheap.
3. **Short.** Interaction ≤220ms. Entrance ≤900ms once. Header hide ~320ms.
4. **Respect `prefers-reduced-motion: reduce`.** Snap instantly; skip entrance; keep color change if needed for state, not animation.

### Tokens (`BaseLayout` `:root`)

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, lifts |
| `--ease-ui` | `cubic-bezier(0.22, 1, 0.36, 1)` | Header, chrome |
| `--dur-fast` | `150ms` | Color / title hover |
| `--dur-ui` | `220ms` | Buttons, shot lift |
| `--dur-enter` | `900ms` | One-shot rise (hero portrait only) |
| `--dur-chrome` | `320ms` | Header hide/show |

### Allowed recipes (use these)

| Cue | How | Where |
|---|---|---|
| Title accent | `transition: color var(--dur-fast) ease` → accent on hover | `.feature-title`, `.support-title`, work rows |
| Shot lift | `transform` rotate + small `translateY(-3px)`; `transition: transform var(--dur-ui) var(--ease-out)` | `.shot-stack` / `ShotFan` layers only |
| Button | Background / border color `var(--dur-ui)` | `.btn-solid`, `.btn-ghost` |
| Portrait rise | One opacity + `translateY(18px→0)` with existing rotate; once on load | Home portrait only |
| Header hide | `transform: translateY(-110%)`; `var(--dur-chrome) var(--ease-ui)` | Site header |

### Performance budget (no lag)

**Do**
- Animate only the hovered/focused element (or its 3 shot layers).
- Keep shot fans ≤3 layers.
- Use CSS transitions; avoid JS animation loops and requestAnimationFrame scroll handlers.
- Let the GPU handle `transform` / `opacity`; do not force `will-change` permanently.

**Do not**
- Scroll-triggered reveals on every section (`IntersectionObserver` + fade-up lists).
- Animate `width`, `height`, `top`, `left`, `margin`, `padding`, or grid tracks.
- Animate `filter`, `backdrop-filter`, or large `box-shadow` (blur is expensive).
- Parallax, continuous loops, spring libraries, or staggered page-load cascades.
- `translateY` lift on every band/row box (lifts layout perception and fights sticky).
- More than one entrance animation per page view.

Sticky Work filters may use a static blur while pinned (not an animated blur). Header hide still applies.

---

## Do not

- NDot on the Home or About name (use Geist 800 spelled name)
- `01 //` or `CASE STUDY //` section stamps
- Equal 16px card grids or 4-thumb mosaics
- Icon row (Resume, ATS, GitHub, LinkedIn, mail) in the header
- ATS or Copy Email in page heroes
- Darken the palette to “fix” caption contrast — bump size instead
- Revive `--btn-primary` brown fills
- Center Home/Work/About content columns
- Fake device chrome or dead placeholder links
- Heavy motion: scroll reveals, parallax, filter animation, layout animation (see Motion)

---

## Page map

| Surface | Job | Contract |
|---|---|---|
| Home `/` | 8-second hire scan | [home.md](./home.md) |
| Work `/work` | All cases + filters | [work.md](./work.md) |
| Case `/work/[slug]` | Long article | [work.md](./work.md) |
| About `/about` | 90-second person file | [about.md](./about.md) |
| Chrome | Nav, Menu, footer | [header.md](./header.md) |

Satellite About pages (skills, credentials, philosophy, education, research, archive) inherit this system; they are not a second visual language.
