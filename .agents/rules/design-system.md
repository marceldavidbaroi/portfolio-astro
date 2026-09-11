# Design system

Before UI work, read [redesign/system.md](../../redesign/system.md) plus **only** the matching page spec for the file you are editing:

- Home → [redesign/home.md](../../redesign/home.md)
- Work list / case study chrome → [redesign/work.md](../../redesign/work.md)
- Header / nav / command menu → [redesign/header.md](../../redesign/header.md)
- About → [redesign/about.md](../../redesign/about.md)

Do not read all redesign specs for a single-page change.

## Rules

1. **Home and Work are the visual source.** Match their stationery grammar (paper, hairlines, left column, size = importance). Do not invent a second look.
2. **Bump type size, not palette.** Captions that feel weak get larger rem — do not darken `--text-muted`.
3. **NDot is the name only.** Geist for titles/body. Mono for status, dates, kickers, CTAs.
4. **No card grids.** Hierarchy by layout type (feature band, work row, rail, close), not equal 16px cards.
5. **Burgundy is a budget.** Labels, one solid button, active nav, 2px close rule.
6. Use `:root` tokens in `src/layouts/BaseLayout.astro` / `src/styles/tokens.css` (`--type-*`, `--paper`, `--ink`, `--muted`, `--accent`, `--dur-*`, `--ease-*`). Prefer vars over magic numbers.
7. Page layout contracts stay in the matching redesign page spec — tokens live only in `system.md`.
8. **Motion is cheap or absent.** Prefer `transform` / `opacity` / color. No scroll reveals, parallax, filter animation, or lift on every block. Always honor `prefers-reduced-motion`.

Content/CV field rules remain in [project-standards.md](./project-standards.md).
