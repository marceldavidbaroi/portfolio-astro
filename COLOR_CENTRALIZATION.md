# Color Centralization & Theme Fix Plan

## 1. Root Cause: Why Dark Mode Worked & Light Mode Failed

1. **CSS Specificity Mismatch**
   - `src/styles/tokens.css` defines Light Mode tokens on `:root[data-theme="light"]` (specificity **`0, 2, 0`**):
     - `--accent: #b86e1e`
     - `--accent-rgb: 184, 110, 30`
     - `--accent-hover: #9c5c16`
     - `--accent-subtle: #f8ede0`
     - `--bg-color: #fbf9f5`
   - `src/pages/index.astro` defined Light Mode tab overrides on `html[data-mode="..."]` (specificity **`0, 1, 1`**).
   - Because `0, 2, 0 > 0, 1, 1`, `tokens.css` **overrode** `index.astro` in Light Mode—leaving buttons, tabs, and kickers stuck on `#b86e1e`.
   - Dark Mode worked because `index.astro` used `html[data-theme="dark"][data-mode="..."]` (**`0, 2, 1`**), which beat `:root[data-theme="dark"]` (**`0, 2, 0`**).

2. **Missing Derived Accent Variables (`--accent-subtle`, `--accent-rgb`)**
   - Chips, badges, hover glows, and active nav pills across `HomeFeaturedWork`, `HomeExperienceRail`, `HomeEducationStrip`, `ui.css`, and `chrome.css` rely on `--accent-subtle` and `rgba(var(--accent-rgb), ...)`.
   - Those variables were never overridden per mode, so chip backgrounds and hover glows stayed amber/orange even in Dark Mode.

---

## 2. Audit of Files with Local / Hardcoded Colors

| File | What It Currently Defines Locally | Action Needed |
| :--- | :--- | :--- |
| `src/styles/tokens.css` | Base Light/Dark tokens (`--bg-color`, `--accent`, `--accent-rgb`, `--accent-hover`, `--accent-subtle`) | **Single Source of Truth:** Move all 4 `[data-mode]` palettes (Light + Dark) here using `:root[data-mode="..."]` and `:root[data-theme="dark"][data-mode="..."]`. Derive `--accent-hover` & `--accent-subtle` via `color-mix()` and set `--accent-rgb` per mode. |
| `src/pages/index.astro` | Duplicate `:global(html[data-mode=...])` color blocks + `body` background gradient | **Remove** all color variable definitions from `index.astro`; keep only `.page-mesh-bg` / `.page-orb` layout & keyframe positioning, referencing `--hero-orb-1` / `--hero-orb-2` from `tokens.css`. |
| `src/components/home/HomeModeTabs.astro` | Hardcoded hex fallbacks (`#f4f0e7`, `#746855`, `#2b251e`, `#84353f`, `#fffcf8`) | **Drop fallbacks** and use central tokens (`var(--card-bg)`, `var(--card-border)`, `var(--text-muted)`, `var(--text-main)`, `var(--accent)`, `var(--bg-color)`). |
| `src/components/home/HomeHero.astro` | `.face-stage` hardcoded `#fbf9f5` and `rgba(232, 168, 85, 0.15)` glow; `.face-split-line` hardcoded `rgba(184, 110, 30, 0.4)` / `rgba(232, 168, 85, 0.5)`; `.hero-orb` fallback hexes | **Replace** hardcoded accent/glow colors with `rgba(var(--accent-rgb), ...)` and `var(--accent-subtle)` so the portrait frame & split-line tint with the active mode. |
| `src/components/home/HomeExperienceRail.astro` | Fallback `var(--slot, rgba(95, 80, 56, 0.03))` | **Use** `var(--card-bg)` / `var(--slot)` directly without hardcoded fallback. |
| `src/styles/about.css` | Hardcoded `#b45309` fallbacks on lines 963 & 989 (`var(--accent, #b45309)`) | **Drop `#b45309` fallback** (`var(--accent)`). |

---

## 3. Target Central Architecture (`src/styles/tokens.css`)

1. **Centralize all theme & mode tokens in `src/styles/tokens.css`** so every page, button (`.btn-solid`, `.btn-ghost`), chip, card, header nav, and footer reads from one place.
2. **Use consistent specificity** for all 4 modes:
   - Light Mode: `:root[data-theme="light"][data-mode="<id>"], :root[data-mode="<id>"]`
   - Dark Mode: `:root[data-theme="dark"][data-mode="<id>"]` (plus `@media (prefers-color-scheme: dark)` fallback for `:root:not([data-theme="light"])[data-mode="<id>"]`)
3. **Per-mode tokens defined centrally:**
   - `--accent` & `--accent-rgb`
   - `--accent-hover: color-mix(in oklch, var(--accent) 75%, var(--text-main))`
   - `--accent-subtle: rgba(var(--accent-rgb), 0.12)` (works cleanly in both Light & Dark!)
   - `--bg-color`, `--bg-grad-start`, `--bg-grad-end`
   - `--card-bg`, `--card-bg-elevated`
   - `--hero-orb-1`, `--hero-orb-2`
