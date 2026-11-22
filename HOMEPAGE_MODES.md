# Homepage Perspective Modes (4-Tab Architecture)

The homepage (`src/pages/index.astro`) places a **4-tab mode switcher** at the base of `HomeHero` (above the fold, before `HomeActionsBar`). Switching tabs dynamically adapts both the **hero** and the **sections below**, while keeping `HomeContactClose` shared at the bottom.

Modes sync with the URL query parameter (`?mode=<id>`) so tailored links can be shared directly in applications.

---

## Hero Integration (`src/components/home/HomeHero.astro`)

The split-face portrait remains the visual anchor across all modes. Switching tabs smoothly updates:
1. **Left & right titles + 1-line bios**
2. **Ambient right-side backdrop tokens** (`code-bg-deco`)
3. **Soft Hero Gradient Wash + Subtle Page & Accent Tint** (both **Light** and **Dark** themes)

| Mode | Left Title & Bio | Right Title & Bio | Ambient Backdrop Tokens |
| :--- | :--- | :--- | :--- |
| **Developer** *(default)* | `designer` — UI systems, product UX, and visual craft. | `<engineer>` — Scalable backends, APIs, and full-stack apps. | `<html />`, `TypeScript`, `PostgreSQL` |
| **Educator** | `mentor` — 5 years guiding ~24 STEM students to GPA-5.00. | `educator` — Breaking down Higher Math, Physics & ICT clearly. | `f(x) = dx/dt`, `Σ`, `Physics · ICT` |
| **Researcher** | `explorer` — 3.91/4.00 B.Sc. CSE & academic inquiry. | `researcher` — Deep learning, Bangla HWCR (Ekush) & benchmarks. | `CNN`, `Ekush HWCR`, `3.91 CGPA` |
| **Stories & Gallery** | `creator` — Tabla, fine arts, community theatre & cinema. | `leader` — Civic engagement, protocol force & team expos. | `2017–2025`, `Dhaka`, `Tabla · Art` |

---

## Visual Theme & Color System (Light + Dark)

Modes set `data-mode="<id>"` alongside `data-theme="light|dark"` so CSS transitions smoothly (`0.4s ease`) across `--bg-color`, `--accent`, `--card-bg`, and the animated hero mesh.

### Animated Hero Mesh & Page Wash
- **Hero Layer:** 2–3 large blurred radial color orbs (`blur(90px)`) positioned behind the split-face portrait, drifting slowly on a **16–22s `ease-in-out infinite alternate`** CSS animation (disabled automatically under `prefers-reduced-motion: reduce`).
- **Page Wash:** A soft 2-stop pastel gradient in Light Mode and a deep tonal gradient in Dark Mode, with translucent `--card-bg` surfaces (`rgba(255, 255, 255, 0.65)` light / translucent dark glass) so content remains high-contrast and legible.

### Light Mode (`[data-theme="light"]` — Soft Pastel Wash)
| Mode | `--accent` | Page Pastel Gradient (`--bg-color`) | Blending Hero Orbs |
| :--- | :--- | :--- | :--- |
| **Developer** | `#84353f` | `#fdf2f3` → `#f7e5e8` | Blush Rose `#eab5be` + Warm Coral `#f3cfc2` |
| **Educator** | `#245c4a` | `#eff9f5` → `#e0f2eb` | Soft Mint `#9edbc6` + Sky Teal `#b4dce8` |
| **Researcher** | `#2e4a7d` | `#eff4fd` → `#e3ecfa` | Periwinkle `#b0c7f2` + Soft Lavender `#c9c0f0` |
| **Stories & Gallery** | `#944e27` | `#fef4ea` → `#fbe7d5` | Soft Peach `#f2c29b` + Warm Gold `#edd79f` |

### Dark Mode (`[data-theme="dark"]` — Luminous Mesh)
| Mode | `--accent` | Page Dark Gradient (`--bg-color`) | Blending Hero Orbs |
| :--- | :--- | :--- | :--- |
| **Developer** | `#e07f8a` | `#171012` → `#120d0f` | Deep Wine `#7a2e39` + Plum `#4f253a` |
| **Educator** | `#66c7a9` | `#0d1714` → `#0a1210` | Emerald `#245c4a` + Ocean `#1c4b5c` |
| **Researcher** | `#82a9e8` | `#0e121c` → `#0a0d15` | Cobalt `#2a4578` + Violet `#3f3470` |
| **Stories & Gallery** | `#e6a06e` | `#18120c` → `#120e09` | Terracotta `#7d4422` + Amber `#69501e` |

---

## 1. Developer (`?mode=developer` — Default)
**Audience:** Software engineering recruiters, hiring managers, technical leads.

- **Sections:**
  - `HomeHowIWork` — Engineering philosophy & workflow
  - `HomeFeaturedWork` — Top featured software case studies (`/work`)
  - `HomeExperienceRail` — Career timeline (`src/content/experience/`)
  - `HomeEducationStrip` — B.Sc. CSE & HSC academic foundation
  - `HomeSkillsStrip` — Categorized technical stack
- **Data Sources:** `src/content/projects/`, `src/content/experience/`, `src/content/education/`, `src/data/aboutData.ts`

---

## 2. Educator (`?mode=educator`)
**Audience:** Teaching roles, EdTech teams, academic mentorship programs.

- **Sections:**
  - Teaching & Mentorship Overview — 5 years of STEM mentoring (~24 students, Higher Math, Physics, ICT, GPA-5.00 board outcomes)
  - Pedagogy & Communication — How complex technical concepts are broken down
  - Academic Foundation — B.Sc. in CSE (3.91/4.00 CGPA) & HSC Science
  - Presentations & Materials — Curated SlideShare decks / teaching notes (when added)
- **Data Sources:** `src/content/experience/04-private-tutoring.md`, `src/content/education/`, `src/data/aboutData.ts` (`compactPursuits`, `onlineProfiles`)

---

## 3. Researcher (`?mode=researcher`)
**Audience:** Graduate admissions, AI/ML & research labs, R&D teams.

- **Sections:**
  - Featured Thesis — *Bangla Handwritten Character Recognition (Ekush Dataset)*
  - Methodology & Benchmarks — Dataset split, models evaluated, key metrics & takeaways
  - Direct Artifacts — Official repository & PDF links
  - Academic Profile — B.Sc. in CSE (3.91/4.00 CGPA), key focus areas & coursework
- **Data Sources:** `src/content/research/01-bangla-hwcr-ekush.json`, `src/content/education/bsc-cse.json`

---

## 4. Stories & Gallery (`?mode=stories`)
**Audience:** Any visitor looking for culture fit, leadership, and life beyond code.

- **Sections:**
  1. **Featured Events & Milestones** — Pope Francis Apostolic Visit (Protocol Force, 2017), Student-Led Road Safety Movement (2018), TexTech Expo, Mawa Hackathon
  2. **Photo Albums** — Curated visual galleries (Proficient, DIU, Notre Dame College) linking to `/gallery`
  3. **Beyond Code** — Classical Percussion (Tabla), Competition-Winning Fine Arts, Community Theatre, Cinema
- **Data Sources:** `src/content/archive/`, `src/content/galleries/`, `src/content/media.json`, `src/data/aboutData.ts` (`compactPursuits`)
