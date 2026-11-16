# Master CV Context Sync

`public/master-cv.txt` is the auto-generated, full-detail master CV context file (used for AI-assisted CV tailoring and served at `/master-cv.txt`).

## Rule

Whenever you **add or update** any career, project, education, research, or philosophy data in:
- `src/content/experience/`
- `src/content/projects/`
- `src/content/education/`
- `src/content/research/`
- `src/content/philosophy/`
- `scripts/cv-profile.json`

You **MUST** run:

```bash
pnpm export:cv
```

before finishing your task so `public/master-cv.txt` stays in sync with the portfolio content.

## Notes
- Do **not** edit `public/master-cv.txt` manually — it will be overwritten by `scripts/export-master-cv.mjs`.
- Keep `public/resume.txt` and `public/resume.pdf` as the curated 1-page resume.
