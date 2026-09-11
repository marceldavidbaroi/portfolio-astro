# Header, footer, command menu — design source

Tokens, type, buttons, motion: [system.md](./system.md). This file is page layout only.

Lives in `src/layouts/BaseLayout.astro` + `src/components/CommandMenu.astro`.  
This file is the chrome contract for every page.

## Concept

A thin stationery bar. Navigation is a sentence, not a toolbar.

- Left: Home · Work · About. Right: Menu.
- Paper field. No burgundy except the active word and (on phone) the Menu control.
- Resume, ATS, GitHub, LinkedIn, email live in the page (hero / close) and in Menu — not as a row of icon buttons in the header.
- Recruiter never hunts for the three primary routes.

## Tokens

Same as Home. Header-specific:

| Token | Value | Use |
|---|---|---|
| Bar | `transparent` → paper 82% + blur while visible mid-page | Sticky; slides away on scroll down |
| Hairline | `rgba(95, 80, 56, 0.08)` | Only while `is-scrolled` and visible |
| Active | Accent `#b42135` | Current route word |
| Idle | Muted `#746855` | Other routes |
| Menu desktop | Muted ink, no fill | `⌘K` hint |
| Menu phone | Cream on accent | Solid pill, word “Menu” |

Shell width matches content: ~1180px, same horizontal inset as Home (`isWide` pages). Footer is inside the same column, not a full-bleed slab.

## Wireframe

Desktop (~1180):

```
Home   Work   About                                      Menu   ⌘K
───────────────────────────────────────────────────────────────  (on scroll only)

…page…

Based in Dhaka (UTC+6) · US/EU overlap · Available · Remote / relocation
```

Phone (≤768):

```
Home  Work  About                          [ MENU ]
──────────────────────────────────────────  (on scroll)

…page…

Dhaka · Available · Remote / relocation
```

Command menu (overlay):

```
          [ paper dialog, ~420px ]
          Jump to…                         ESC
          ────────────────────────────────
          Home                        nav
          Work / Case studies         nav
          About                       nav
          — more —
          Resume (PDF)             action
          Copy email            clipboard
          LinkedIn               action
          GitHub                 action
          ────────────────────────────────
          ↑↓  ↵  Esc
```

## Recipes

| Piece | Layout | What it is | What it is not |
|---|---|---|---|
| Nav | Left-aligned word list, Geist 500 ~0.94rem | Three routes | Centered island, pills, NDot |
| Active | Color only (accent) | You are here | Background chip, underline bar, weight jump that reflows |
| Menu | Right. Desktop: mono `⌘K`. Phone: solid Menu | Opens command palette | Hamburger that expands an in-header drawer |
| Scroll | Hide on scroll down (after ~72px); show on scroll up or top. Paper + hairline while revealed mid-page | Reading room | Always-on bar, drop shadow, shrinking logo |
| Footer | One mono line, muted, left-aligned in the content column | Status reminder | Second close CTA, social icon row, copyright block |
| Command menu | Centered paper panel, Geist labels, mono type/meta | Keyboard jump + mobile overflow | Dark modal, search-engine chrome, emoji |

### Routes in the bar

Only `/`, `/work`, `/about`.  
`/work/*` marks Work. `/about`, `/skills`, `/credentials`, `/philosophy`, `/education/*`, `/research/*`, `/archive*` mark About (those pages are About’s attic).

### What Menu must contain

Nav: Home, Work, About, Skills, Credentials, Philosophy, Archive.  
Actions: Resume PDF, ATS text CV, Copy email, LinkedIn, GitHub.  
ATS belongs here, not in the header and not in any hero ([home.md](./home.md) rule).

### Focus and motion

- Sticky `z-index: 50`. Overlay above that.
- No `translateY` on header links. The **bar** may `translateY(-110%)` when hiding.
- Hide on downward scroll once past ~72px. Reveal on upward scroll, at the top, when Menu is open, or when focus is inside the header. Use `inert` while hidden.
- Threshold ~6px so trackpads do not flicker.
- `prefers-reduced-motion: reduce` → instant hide/show, no easing.
- Menu open: backdrop `rgba(43, 37, 30, 0.28)`, dialog rise if `prefers-reduced-motion: no-preference`.
- Esc, backdrop click, and `⌘K` / `Ctrl+K` toggle.

### Responsive

| Width | Nav | Menu |
|---|---|---|
| ≥901 | Geist 0.94rem, gap 1.65rem | Ghost: `Menu` + `⌘K` / `Ctrl K` kbd |
| ≤900 | 0.875rem, gap 1.2rem | Same |
| ≤768 | 0.875rem, gap 1rem; 1rem inset | Solid burgundy pill, word only |
| ≤420 | 0.8125rem, gap 0.75rem | Smaller pill |

Safe-area inset on top. Resume / ATS / socials never return to the bar.

## Type roles

| Role | Face | Size | Color |
|---|---|---|---|
| Nav word | Geist 500 | ~0.94rem (0.875rem phone) | muted / accent if active |
| ⌘K | Mono 700 | 0.68rem | muted |
| Menu (phone) | Mono 700 uppercase | 0.72rem | cream on accent |
| Footer | Mono | 0.68rem | muted; “Available…” may use accent |
| Cmdk input | Mono | 0.85rem | ink |
| Cmdk item | Geist 500 | 0.95rem | ink |
| Cmdk meta | Mono | 0.62rem | muted |

NDot is never used in chrome.

## Source

- Shell: `src/layouts/BaseLayout.astro`
- Palette: `:root` in that file (keep in lockstep with Home tokens)
- Menu: `src/components/CommandMenu.astro`

## Do not

- Center the three links with empty spacers
- Put Resume, ATS, GitHub, LinkedIn, or mail icons in the header
- Use NDot or `01 //` stamps in nav
- Make Menu a burgundy button on desktop
- Give the footer its own card, gradient, or second Email button (pages own the close band)
- Lift / scale header controls on hover
- Add a wordmark or portrait in the bar (the page hero is the identity)
