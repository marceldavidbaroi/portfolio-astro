# Educator Tab — Analysis & UX/Content Suggestions

This document outlines the recommended structure, content, and data updates for the **Educator** mode (`?mode=educator`) on the homepage, tailored for teaching roles, EdTech teams, and academic mentorship programs.

---

## 1. Quick Actions Bar (Educator Context)
**Your goal:** `email`

**Suggestion:**
- Keep the action bar minimal and focused:
  - **Primary CTA:** `Email me` (`mailto:${site.email}`)
  - **Secondary CTA:** `Academic / Teaching CV` (or `Resume` if unified)
  - **Optional:** `LinkedIn` link
- **Why:** Educators and academic coordinators primarily want a direct way to reach out rather than scanning GitHub or competitive coding profiles.

---

## 2. How I Teach *(Needs New Data)*
**Current state:** `teachingPillars` and `studentOutcomes` have now been added to `src/data/aboutData.ts` (ready for your review).

**Suggestion:**
- Render `teachingPillars` as a clean 4-column editorial strip (matching `HomeHowIWork` visually, with Educator-mode copy):
  1. **First-Principles Clarity** — Breaking down Higher Math, Physics, and ICT from intuition before formulas.
  2. **Exam & Problem Strategy** — Structured weekly mock tests, error logs, and past-paper drills.
  3. **1-on-1 Adaptive Pacing** — Tailoring explanations to each student's learning speed and gaps.
  4. **Visual & Real-World Models** — Connecting calculus, mechanics, and programming to diagrams and code demos.

---

## 3. Experience (Relevant Roles)
**Your goal:** *"experience relevant one you need to suggest."*

**Recommendation:**
- **Primary featured role:** `04-private-tutoring.md` — **5 years of STEM Mentoring** (~24 students across Higher Math, Physics, and ICT, achieving GPA-5.00 board outcomes).
- **Optional secondary role (if framed around mentorship/training):**
  - `02-engineering-labs.md` or `01-proficient.md` *only* if you highlight **peer mentoring, code reviews, or onboarding junior developers**. Otherwise, keep the Educator experience rail focused on `04-private-tutoring.md` so the signal stays pure.
- **Format:** Highlight **student outcomes, subjects taught, and years of experience** rather than software engineering metrics.
- **Verified Student Outcomes (`studentOutcomes` in `src/data/aboutData.ts`):**
  - **Ideal School and College (SSC Science):** `GPA 5.00` → Admitted to Holy Cross College (Science)
  - **Ideal School and College (HSC Science):** `GPA 5.00`
  - **Kalma Wazali School (Class 10 / SSC, 2 students):** `GPA 5.00`
  - **Government Science College → University Admission:** Admitted to Notre Dame University Bangladesh (NDUB), CSE

---

## 4. Education (Focusing on Results)
**Your goal:** *"education focusing on results."*

**Suggestion:**
- Use a **borderless typographic layout** (consistent with the Developer tab's no-card approach) that puts **academic results front and center**:
  - **B.Sc. in Computer Science & Engineering** — Daffodil International University · **`3.91 / 4.00 CGPA`** (highlight academic distinction if applicable)
  - **HSC (Science)** — Notre Dame College · **`GPA 4.67 / 5.00`** *(per `src/content/education/hsc-science.json`; keep `GPA 5.00` strictly for your students' board outcomes)*
- **Why:** In an Educator context, accurate personal academic results alongside student GPA-5.00 outcomes establish immediate subject-matter credibility for teaching Higher Math, Physics, and CS.

---

## 5. Research Paper & Related Docs
**Your goal:** *"research paper and related docs. you also suggest."*

**Suggestion:**
- Surface your thesis/research from `src/content/research/01-bangla-hwcr-ekush.json` (*Bangla Handwritten Character Recognition — Ekush Dataset*) as a compact **"Publications & Teaching Materials"** strip:
  - **Thesis / Paper:** Title, 1-line summary, and direct **PDF / Repository** link.
  - **Teaching & Presentation Profile:** Link to your main SlideShare profile (`slideshare.net/marceldavidbaroi` from `aboutData.ts` / `onlineProfiles`) alongside your thesis PDF. Individual deck links can be added later.
- **Why:** Shows both academic rigor (research) and communication skill (structured slides/notes).

---

## 6. Certifications & Skills (Educator-Relevant)
**Your goal:** *"certification if there is related ones and skill."*

**Suggestion:**
- **Certifications:** Only show certifications relevant to **teaching, communication, or foundational STEM/CS** (e.g., LinkedIn Learning / foundational CS certs if applicable). If none are strictly teaching-specific, **omit the certifications block** in Educator mode rather than forcing cloud/DevOps badges.
- **Skills (Teaching & Subject Matter):** Group into 2–3 educator-focused rows:
  - **Subjects:** Higher Mathematics, Physics, ICT, Computer Science Fundamentals
  - **Pedagogy & Tools:** Curriculum Planning, 1-on-1 Mentorship, Technical Writing, Slide Decks & Visuals

---

## Recommended Section Order (Educator Tab)
*Recruiter-optimized order: lead with 5 years of teaching outcomes before pedagogy.*
1. **Hero + Mode Tabs** (`HomeHero` + `HomeModeTabs`)
2. **Quick Actions Bar** (`Email me` + `Resume / CV` + `LinkedIn`)
3. **Teaching Experience & Outcomes** (`04-private-tutoring.md` + optional student/cohort outcomes micro-strip)
4. **How I Teach** *(New data: 3–4 pedagogy pillars)*
5. **Education & Results** (Borderless strip emphasizing `3.91/4.00 CGPA` & HSC `4.67/5.00`)
6. **Research & Related Docs** (`01-bangla-hwcr-ekush.json` PDF + curated teaching decks/notes)
7. **Teaching Skills** (Subjects + Pedagogy; omit unrelated tech certs)
8. **Contact Close** (`HomeContactClose`)
