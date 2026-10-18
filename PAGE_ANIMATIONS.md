# Page Animation Matrix & Execution Plan

> **Interactive Workflow Guide**: When you point to any page by ID or URL (e.g., *"Update animations for PAGE-01"* or *"Do /education"*), the agent reads that page's implementation recipe, applies the exact CSS/JS, verifies `prefers-reduced-motion`, and updates the status to `[x] Completed`.

---

## 1. Quick Reference & Status Tracker

| ID | Route | Primary File | Status | Suited Motion Recipe | Command Trigger |
|:---:|---|---|:---:|---|---|
| **`PAGE-01`** | `/education` | `src/pages/education/index.astro` | `[x] Completed` | Staggered Card Rise + Crest Micro-Lift + Thesis Pill Pulse | `Do PAGE-01` or `Do /education` |
| **`PAGE-02`** | `/education/[slug]` | `src/pages/education/[slug].astro` | `[x] Completed` | Semester Accordion Smooth Unfold + CGPA Ticker | `Do PAGE-02` or `Do /education/bsc-cse` |
| **`PAGE-03`** | `/education/*/gallery` | `src/pages/education/**/gallery.astro` | `[x] Completed` | Archival Stamp Tilt & Lift + Cascade Stagger | `Do PAGE-03` or `Do /education/bsc-cse/gallery` |
| **`PAGE-04`** | `/experience` | `src/pages/experience/index.astro` | `[x] Completed` | Timeline Rail Track Draw + ShotFan Layer Spread | `Do PAGE-04` or `Do /experience` |
| **`PAGE-05`** | `/experience/[slug]` | `src/pages/experience/[slug].astro` | `[x] Completed` | Case-Reveal Scroll + Executive KPI Highlight | `Do PAGE-05` or `Do /experience/[slug]` |
| **`PAGE-06`** | `/skills` | `src/pages/skills/index.astro` | `[x] Completed` | Tab Sliding Indicator + Category Cross-Fade | `Do PAGE-06` or `Do /skills` |
| **`PAGE-07`** | `/credentials` | `src/pages/credentials/index.astro` | `[x] Completed` | Verification Arrow Glide + Seal Badge Glint | `Do PAGE-07` or `Do /credentials` |
| **`PAGE-08`** | `/philosophy` | `src/pages/philosophy/index.astro` | `[x] Completed` | Editorial Quote Reveal + Mermaid Node Illumination | `Do PAGE-08` or `Do /philosophy` |
| **`PAGE-09`** | `/gallery` | `src/pages/gallery/index.astro` | `[x] Completed` | Postage Stamp Elevation + Filter Cross-Dissolve | `Do PAGE-09` or `Do /gallery` |
| **`PAGE-10`** | `/gallery/[slug]` | `src/pages/gallery/[slug].astro` | `[x] Completed` | Prologue Reading Fade + Masonry Scroll Inset | `Do PAGE-10` or `Do /gallery/[slug]` |
| **`PAGE-11`** | `/archive` & `/memories` | `src/pages/archive/index.astro` | `[x] Completed` | Hairline Chronological Draw + Row Warmth Hover | `Do PAGE-11` or `Do /archive` |
| **`PAGE-12`** | `/archive/[slug]` | `src/pages/archive/[slug].astro` | `[x] Completed` | Operational Phase Stepper + Proof Image Reveal | `Do PAGE-12` or `Do /archive/[slug]` |
| **`PAGE-13`** | `/research/[slug]` | `src/pages/research/[slug].astro` | `[x] Completed` | Accuracy Stat Count-Up + Tactile Citation Click | `Do PAGE-13` or `Do /research/[slug]` |
| **`REF-01`** | `/` (Home) | `src/pages/index.astro` | `[x] Done` | Hero physics + `.reveal-section` observer | *Reference Baseline* |
| **`REF-02`** | `/work` | `src/pages/work.astro` | `[x] Done` | `WorkFocusBands` observer + shot fan lift | *Reference Baseline* |
| **`REF-03`** | `/work/[slug]` | `src/pages/work/[slug].astro` | `[x] Done` | `.case-reveal` scroll observer + `pulseGlow` | *Reference Baseline* |
| **`REF-04`** | `/about` | `src/pages/about.astro` | `[x] Done` | `stackMarquee` CSS ticker loop | *Reference Baseline* |

---

## 2. Motion System Tokens & Constraints

All page implementations **must** draw from these design tokens (`src/styles/tokens.css` / `BaseLayout.astro`):

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);    /* Entrances, lifts, fades */
--ease-ui:  cubic-bezier(0.22, 1, 0.36, 1);    /* Interactive tabs, buttons, nav */
--dur-fast: 150ms;                             /* Hover colors, hairline shifts */
--dur-ui:   220ms;                             /* Button presses, card lifts */
--dur-enter: 600ms;                            /* Staggered load & scroll reveals */
```

### Motion Guardrails
1. **Compositor Only**: Only animate `transform` and `opacity`. Never animate `width`, `height`, `margin`, `padding`, or blur filters.
2. **Quiet Elegance**: Max 2–3 cues per page. No spring bouncing, no flashy neon gradients, no heavy parallax.
3. **Accessibility**: Every page script and CSS must include `@media (prefers-reduced-motion: reduce)`.
4. **View Transitions Resilience**: All client scripts must re-bind on `astro:page-load`.

---

## 3. Page Implementation Blueprints

---

### `[PAGE-01]` School & University Overview
- **Route**: `/education`
- **Primary File**: `src/pages/education/index.astro`
- **Secondary Styles**: `src/styles/about.css`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-01` or `Do /education`

#### Characteristics
Two flagship institution cards (B.Sc. CSE and HSC Science), academic metrics (CGPA 3.92, 148 credits), and an undergraduate thesis feature. Currently renders without any motion.

#### Motion Recipe
1. **Staggered Card Rise**:
   - Both institution cards (`.edu-index-card`) fade and lift into place on page load.
   - B.Sc. card enters at `0ms`, HSC card enters with a `90ms` stagger.
   - Values: `opacity: 0 -> 1`, `transform: translateY(14px) -> translateY(0)`.
2. **Institution Crest Micro-Lift**:
   - Hovering `.edu-index-row` gives the logo `.edu-card-logo` a subtle scale: `transform: scale(1.03) translateY(-1px)`.
3. **Thesis Metric Attention Shimmer**:
   - The thesis callout pill performs a single quiet entrance highlight on load.

#### Code Contract & Selectors
```css
/* Card Entrance */
.edu-index-card {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity var(--dur-enter) var(--ease-out), transform var(--dur-enter) var(--ease-out);
}
.edu-index-card.is-revealed {
  opacity: 1;
  transform: translateY(0);
}
.edu-index-card:nth-child(2) {
  transition-delay: 90ms;
}

/* Hover Micro-Lift */
.edu-index-row:hover .edu-card-logo {
  transform: scale(1.03) translateY(-1px);
  transition: transform var(--dur-ui) var(--ease-out);
}
```

---

### `[PAGE-02]` Academic Transcript & Curriculum Detail
- **Route**: `/education/[slug]` (`/education/bsc-cse`, `/education/hsc-science`)
- **Primary Files**: `src/pages/education/[slug].astro`, `src/components/education/EduBody.astro`
- **Secondary Styles**: `src/styles/education.css`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-02` or `Do /education/bsc-cse`

#### Characteristics
Information-dense 11-semester transcript tables, course codes, grades, credit distributions, and Dean's List honors.

#### Motion Recipe
1. **Semester Table Sequential Fade**:
   - Semester accordion blocks trigger `.case-reveal` as the user scrolls through them.
2. **Cumulative GPA & Credit Counter**:
   - Header metric numbers (`3.92`, `148.0`) perform a smooth 0-to-target count-up when first viewed.
3. **Course Row Scanner**:
   - Hovering a course row applies a clean background tint (`--slot`) with a `120ms` ease.

---

### `[PAGE-03]` Campus & Convocation Galleries
- **Route**: `/education/bsc-cse/gallery` & `/education/hsc-science/gallery`
- **Primary Files**: `src/pages/education/bsc-cse/gallery.astro`, `src/pages/education/hsc-science/gallery.astro`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-03` or `Do /education/bsc-cse/gallery`

#### Characteristics
Photographic documentation of university life, thesis defense, robotics lab work, and graduation convocation.

#### Motion Recipe
1. **Archival Print Hover (Tilt & Lift)**:
   - Hovering an image card lifts the photo slightly (`translateY(-4px)`) and introduces an imperceptible analog tilt (`rotate(-0.4deg)`).
2. **Grid Scroll Cascade**:
   - Gallery images enter viewport with a lightweight staggered fade-in (`rootMargin: '0px 0px -40px 0px'`).
3. **Smooth Lightbox Zoom**:
   - Clicking an image transitions smoothly into full-view dialog without abrupt pop-in.

---

### `[PAGE-04]` Career Experience Rail
- **Route**: `/experience`
- **Primary Files**: `src/pages/experience/index.astro`, `src/components/home/HomeExperienceRail.astro`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-04` or `Do /experience`

#### Characteristics
Chronological timeline of engineering roles, company identities, tenures, and preserved work deliverables.

#### Motion Recipe
1. **Timeline Rail Draw**:
   - Vertical timeline connector hairline subtly tracks down as the page is scrolled.
2. **Role Row Step-In**:
   - Each role row unlocks into view with an active indicator tick on the date column.
3. **ShotFan Spread on Row Hover**:
   - Stacked card thumbnails expand on hover: primary layer lifts `-3px`, background layers rotate by `-2.5deg` and `+2.5deg`.

---

### `[PAGE-05]` Career Experience Case Study
- **Route**: `/experience/[slug]`
- **Primary File**: `src/pages/experience/[slug].astro`
- **Secondary Styles**: `src/styles/about.css`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-05` or `Do /experience/[slug]`

#### Characteristics
Deep executive retrospective, quantitative KPI metrics (e.g., 99.9% uptime, 40% latency reduction), architecture highlights, and markdown body.

#### Motion Recipe
1. **Full Article `.case-reveal` Sync**:
   - Re-use the battle-tested `.case-reveal` intersection observer from `/work/[slug]`.
2. **Executive KPI Number Pulse**:
   - Metric cards softly zoom `scale(1.04) -> scale(1.0)` upon intersection.
3. **Next/Previous Role Nav Hover Arrows**:
   - Previous role arrow shifts `-3px` left; Next role arrow shifts `+3px` right on hover.

---

### `[PAGE-06]` Technical Skill Matrix
- **Route**: `/skills`
- **Primary File**: `src/pages/skills/index.astro`
- **Secondary Styles**: `src/styles/about.css`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-06` or `Do /skills`

#### Characteristics
High-density matrix with tier filtering tabs (All, Primary, Prior), category headers, and individual skill tags. Currently, tab switches cut instantly.

#### Motion Recipe
1. **Filter Tab Underline Slide**:
   - The active tab underline transitions horizontally across tabs (`var(--dur-ui) var(--ease-ui)`).
2. **Category Grid Cross-Fade (FLIP transition)**:
   - When filtering between "Primary" and "Prior", hidden items gracefully fade out (`opacity: 0`, `transform: scale(0.97)`) before removal, and surviving items gently settle.
3. **Skill Card Micro-Lift**:
   - Hovering an individual skill item raises the border contrast and warms the background.

---

### `[PAGE-07]` Verified Credentials & Certifications
- **Route**: `/credentials`
- **Primary File**: `src/pages/credentials/index.astro`
- **Secondary Styles**: `src/styles/about.css`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-07` or `Do /credentials`

#### Characteristics
Industry certificates (Google, Cisco, Microsoft, etc.) with credential serial numbers, verification links, and authority filter tabs.

#### Motion Recipe
1. **Verification Arrow Glide**:
   - Hovering a certificate row slides the external link icon (`↗`) diagonally by `2px, -2px`.
2. **Authority Filter Fade**:
   - Switching authority tabs performs a smooth 180ms opacity cross-dissolve.
3. **Featured Seal Badge Glint**:
   - Featured certificate badges have a single-pass hairline sheen upon initial page load.

---

### `[PAGE-08]` Engineering Philosophy & Principles
- **Route**: `/philosophy`
- **Primary File**: `src/pages/philosophy/index.astro`
- **Secondary Styles**: `src/styles/about.css`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-08` or `Do /philosophy`

#### Characteristics
Manifesto layout, 4 numbered architectural principles, pull-quotes, and technical Mermaid system diagrams.

#### Motion Recipe
1. **Editorial Principle Block Reveal**:
   - Numbered principle sections (01–04) fade and lift with an intentional, measured pace (`var(--dur-enter)`).
2. **Pull-Quote Hairline Expansion**:
   - The accent burgundy left border of pull-quotes expands downward as it enters the viewport.
3. **Mermaid Diagram Gentle Illumination**:
   - The diagram container border gently lights up when scrolled into view (`pulseGlow` single cycle).

---

### `[PAGE-09]` Photo Albums & Event Memoirs Index
- **Route**: `/gallery`
- **Primary Files**: `src/pages/gallery/index.astro`, `src/components/gallery/AlbumStampCard.astro`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-09` or `Do /gallery`

#### Characteristics
Album stamp cards with cover thumbnails, category tags, and photo counters.

#### Motion Recipe
1. **Postage Stamp Hover Float**:
   - Card lifts `translateY(-5px)` with a smooth, warm shadow transition (`var(--dur-ui) var(--ease-out)`).
2. **Category Tab Filter Dissolve**:
   - Switching category filters (Work, Education, Civic, Life) cross-fades the album grid seamlessly.
3. **Photo Count Badge Ripple**:
   - Small number badges gently scale on hover.

---

### `[PAGE-10]` Individual Photo Album Story
- **Route**: `/gallery/[slug]`
- **Primary File**: `src/pages/gallery/[slug].astro`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-10` or `Do /gallery/[slug]`

#### Characteristics
Long-form prologue narrative text followed by documentary photographic strips.

#### Motion Recipe
1. **Prologue Reading Fade-In**:
   - Narrative text block gracefully dissolves into view on arrival.
2. **Masonry Progressive Scroll Reveal**:
   - Images in the narrative strip fade in sequentially as the reader scrolls.
3. **Interactive Lightbox Zoom**:
   - Full-bleed photo expands from the clicked thumbnail location.

---

### `[PAGE-11]` Civic Archive & Leadership Log
- **Route**: `/archive` & `/memories`
- **Primary Files**: `src/pages/archive/index.astro`, `src/pages/memories/index.astro`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-11` or `Do /archive`

#### Characteristics
Chronological log of protocol volunteering, dignitary escorts, collegiate leadership, and date stamps.

#### Motion Recipe
1. **Archival Timeline Line-Draw**:
   - Hairline vertical connector draws down along the date stamps on scroll.
2. **Document Row Hover Warmth**:
   - Row background shifts smoothly to `--slot` (`#f4f0e7`) with thumbnail preview un-dimming.

---

### `[PAGE-12]` Dedicated Archive Memoir / Log
- **Route**: `/archive/[slug]`
- **Primary File**: `src/pages/archive/[slug].astro`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-12` or `Do /archive/[slug]`

#### Characteristics
Day-by-day or phased operational log of high-stakes civic operations with photographic evidence.

#### Motion Recipe
1. **Phase Stepper Scroll-Spy Indicator**:
   - Sticky event phase headers smoothly highlight as the reader passes each day/phase.
2. **Proof Image Reveal**:
   - Photographic documentation cards reveal smoothly with hairline border definition.

---

### `[PAGE-13]` Research Thesis & Academic Publication
- **Route**: `/research/[slug]`
- **Primary File**: `src/pages/research/[slug].astro`
- **Status**: `[x] Completed`
- **Command**: `Do PAGE-13` or `Do /research/[slug]`

#### Characteristics
Academic paper layout, thesis abstract, benchmark metrics (vowel recognition accuracy %), and citation tools.

#### Motion Recipe
1. **Benchmark Metric Count-Up**:
   - Quantitative accuracy figures (e.g., 98.4%) animate into view.
2. **Tactile Citation Copy Feedback**:
   - "Copy Citation" button provides immediate micro-bounce (`scale(0.96) -> scale(1)`) with checkmark fade.
3. **Repository Action Button Dried-Ink Hover**:
   - Solid action button shifts smoothly into `--accent-hover` on hover.

---

## 4. Verification & QA Standard per Page

Whenever any page animation is implemented, verify against this 4-step QA rubric:

1. **Reduced Motion**: Verify that with `prefers-reduced-motion: reduce`, animations instantly resolve to final state with zero movement.
2. **View Transitions (Astro SPA)**: Verify navigating to the page via header links preserves and re-attaches the animations.
3. **Compositor Inspection**: Ensure DevTools Performance profile shows 60fps with no Layout/Reflow recalculations during hover or scroll.
4. **Design Harmony**: Ensure animation strictly respects the stationary aesthetic (no bouncy spring effects or gratuitous motion).
