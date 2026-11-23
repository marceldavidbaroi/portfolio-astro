# Stories & Gallery Tab — Analysis & UX/Content Suggestions

This document outlines the recommended structure, content, and data updates for the **Stories & Gallery** mode (`?mode=stories`) on the homepage, tailored for visitors exploring culture fit, leadership, creative pursuits, and life beyond code.

---

## 1. Quick Actions Bar (Stories & Gallery Context)
**Suggestion:**
- Keep it lightweight and human-centered:
  - **Primary CTA:** `Email me` (`mailto:${site.email}`)
  - **Secondary CTA:** `Full Gallery →` (`/gallery`)
  - **Optional:** `About & Archive` (`/about`)

---

## 2. Philosophy *(Personal & Creative)*
**Your goal:** `philosophy`

**Suggestion:**
- Include a brief, warm **3-pillar personal philosophy** strip (distinct from engineering/teaching):
  - *Curiosity Beyond Screens* — Drawing inspiration from music, fine arts, and theatre.
  - *Civic & Community Presence* — Stepping up in student movements and large-scale public events.
  - *Craft & Discipline* — Applying the same rhythm and patience from classical percussion (Tabla) to everyday work.

---

## 3. Featured Events & Milestones
**Your goal:** *"events pop francies expo student movement and so on."*

**Current data:** `src/content/archive/` (`nobin-boron.json`, `pope-francis.json`, `rag-day.json`, and `road-safety.json`).

**Decision:**
- Present the formative/civic/campus stories from `src/content/archive/` as a **chronological editorial timeline or story strip** (keeping **25th Textech Expo** and **Mawa Hackathon** inside `01-proficient.md` so work and personal stories don't duplicate):
  - **Nobin Boron (2017)** — Notre Dame College orientation (`nobin-boron.json`)
  - **Pope Francis Apostolic Visit (2017)** — Protocol Force, Dhaka (`pope-francis.json`)
  - **Student-Led Road Safety Movement (2018)** — Civic engagement (`road-safety.json`)
  - **Noterdamian Traditions & Rag Day (2019)** — Campus heritage (`rag-day.json`)
- Each item should have a **year, title, 1–2 line story**, and an optional link to related photos in `/gallery`.

---

## 4. Photo Albums & Visual Gallery
**Your goal:** `gallery and stories`

**Current data:** `src/content/galleries/`, `src/content/media.json`

**Suggestion:**
- Feature **4 curated photo previews** linking to `/gallery`:
  1. **Proficient Engineering** (`src/content/galleries/proficient.json`)
  2. **DIU — B.Sc. CSE** (`src/content/galleries/bsc-cse.json`)
  3. **Notre Dame College** (`src/content/galleries/hsc-science.json`)
  4. **Pope Francis Apostolic Visit (2017)** *(surface the `pope-francis-*` media assets / memoir gallery card alongside the 3 main albums)*
- Include a prominent `Explore all albums →` link to `/gallery`.

---

## 5. Extracurricular & Beyond Code
**Your goal:** `extra curricular`

**Current data:** `src/data/aboutData.ts` (`compactPursuits`)

**Suggestion:**
- Showcase creative & cultural pursuits in a compact, scannable grid or list:
  - **Classical Percussion (Tabla)**
  - **Competition-Winning Fine Arts**
  - **Community Theatre**
  - **Cinema & Storytelling**

---

## 6. Skills *(Omit Technical Stack)*
**Your goal:** *"all skills maybe."*

**Recommendation:**
- **Drop the technical skills block** on this tab so it doesn't duplicate the **Developer** tab or break the human storytelling flow. Let **Beyond Code (`compactPursuits`)** carry your creative & leadership traits instead.

---

## Recommended Section Order (Stories & Gallery Tab)
*Recruiter-optimized order: bring Photo Albums higher so visual proof appears early in a tab named "Stories & Gallery".*
1. **Hero + Mode Tabs** (`HomeHero` + `HomeModeTabs`)
2. **Quick Actions Bar** (`Email me` + `Full Gallery →` + `About & Archive`)
3. **Personal Philosophy** *(New data: 3 concise pillars)*
4. **Photo Albums** (3 curated previews linking to `/gallery`)
5. **Featured Events & Milestones** (Pope Francis 2017, Road Safety Movement 2018, plus Textech Expo & Mawa Hackathon if added to `archive/`)
6. **Extracurricular & Beyond Code** (`compactPursuits`: Tabla, Fine Arts, Theatre, Cinema)
7. **Contact Close** (`HomeContactClose`)
