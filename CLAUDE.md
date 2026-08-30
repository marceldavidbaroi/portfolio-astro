## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project Case Study & Portfolio Data Rules

All project entries in `src/content/projects/` must follow the **CV-Card & 30-Second Recruiter Triage Standard** defined in [.agents/rules/project-standards.md](file:///Users/daviditc/Documents/personal_projects/portfolio-astro/.agents/rules/project-standards.md):

1. **Card as a CV Entry**: Treat the project card as a resume bullet point. The `description` MUST strictly follow Google's XYZ formula: `"Accomplished [X] as measured by [Y], by doing [Z]"` (2–3 lines, ~25–35 words).
2. **CV Subtitle**: Always provide `role` (e.g. `Lead Framework & Migration Engineer`) and `timeline` (e.g. `2025 — Present`).
3. **Google XYZ Executive Overview**: `executiveOverview` in the case study expands on the XYZ accomplishment with architectural depth.
4. **Quantifiable KPI Pills**: Every project must have 3–6 `impactMetrics` with numeric proof (`value`, `label`, `detail`).
5. **Categorized Tech Stack**: `techStack` must be divided into `frontend`, `backend`, `database`, `devops`, `mobile_hardware`.
6. **Engineering Decisions Matrix**: `keyDecisions` must contain 3–5 items detailing `challenge` → `decision` (with trade-off rationale) → `outcome`.
7. **Value Proposition Canvas**: `valueProposition` must structure severe user friction (Before) vs architectural gains (After).
8. **No Fluff & No Dead Links**: Use concrete engineering verbs, omit placeholder links, and clearly state project classification.


