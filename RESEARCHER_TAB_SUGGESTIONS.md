# Researcher Tab — Analysis & UX/Content Suggestions

This document outlines the recommended structure, content, and data updates for the **Researcher** mode (`?mode=researcher`) on the homepage, tailored for graduate admissions, AI/ML & research labs, and R&D teams.

---

## 1. Quick Actions Bar (Researcher Context)
**Suggestion:**
- **Primary CTA:** `Email me` (`mailto:${site.email}`)
- **Secondary CTA:** `Academic CV / Resume`
- **Profile Links:** `GitHub` + `LinkedIn` *(omit Google Scholar / ResearchGate until profiles are created)*

---

## 2. Research Focus / How I Research *(Optional or Compact)*
**Suggestion:**
- A concise 3-pillar strip (e.g., *Problem Formulation*, *Rigorous Benchmarking*, *Reproducible Artifacts*) or a 2–3 line research interest statement covering **Computer Vision, Deep Learning, and Bangla Document/Character Recognition**.

---

## 3. Featured Thesis & Publications (`01-bangla-hwcr-ekush.json`)
**Current state:** `src/content/research/01-bangla-hwcr-ekush.json` (*Bangla Handwritten Character Recognition — Ekush Dataset*).

**Suggestion:**
- Make this the centerpiece of the Researcher tab:
  - **Title & Abstract/Summary:** Clear 2–3 line overview of the problem and contribution.
  - **Methodology & Benchmarks:** Dataset split, models evaluated (e.g., CNN architectures), and key accuracy/benchmark metrics.
  - **Direct Artifacts:** Prominent links to the **PDF / Paper** (`pdfDownloadUrl`) and **Official DIU Repository** (`officialRepositoryUrl`). *(A GitHub code repo link can be added later if published.)*

---

## 4. Education (Academic Foundation & Coursework)
**Suggestion:**
- Use a **borderless typographic strip** (no cards) emphasizing:
  - **B.Sc. in Computer Science & Engineering** — Daffodil International University · **`3.91 / 4.00 CGPA`** (`src/content/education/bsc-cse.json`)
  - **Relevant Coursework (verified from `bsc-cse.json`):** Artificial Intelligence (`CSE315`), Data Mining and Machine Learning (`CSE321`), Statistics and Probability (`STA221`), Calculus, Complex Variables and Linear Algebra (`MAT121`), Data Structures (`CSE134`), Algorithms (`CSE214`).

---

## 5. Relevant Experience & Projects (R&D Signal)
**Decision:** Keep this section **omitted for now** (no separate ML/R&D projects tagged yet) so the Researcher tab stays focused and high-signal around the **Ekush Thesis** and **B.Sc. CSE**.

---

## 6. Research Skills & Tools *(Needs Data Sync)*
**Current state:** `skillCategories` (`data-science-python` in `src/data/aboutData.ts`) currently only lists **Python, Web Scraping, Pandas, and NumPy**.
**Suggestion:**
- Add missing ML/academic tools to `aboutData.ts` (if used in your thesis/projects) and group into 2–3 research-focused rows:
  - **ML & Deep Learning:** Python, PyTorch / TensorFlow, Scikit-learn, CNNs, Computer Vision
  - **Data & Experimentation:** NumPy, Pandas, Jupyter, Benchmarking
  - **Academic & Writing:** LaTeX, Technical Documentation, Git

---

## Recommended Section Order (Researcher Tab)
1. **Hero + Mode Tabs** (`HomeHero` + `HomeModeTabs`)
2. **Quick Actions Bar** (`Email me` + `Academic CV` + `GitHub` + `LinkedIn`)
3. **Research Focus** (2–3 line interest statement or 3 concise pillars)
4. **Featured Thesis** (`01-bangla-hwcr-ekush.json` — abstract, DenseNet vs 15 baselines, PDF & DIU repo links)
5. **Education & Coursework** (Borderless strip highlighting `3.91/4.00 CGPA` + verified AI/ML/Math coursework)
6. **Research Skills & Stack** (Python, Pandas, NumPy; expand with PyTorch/Scikit-learn/LaTeX when updated)
7. **Contact Close** (`HomeContactClose`)
