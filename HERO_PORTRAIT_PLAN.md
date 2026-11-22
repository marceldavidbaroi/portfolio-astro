# Hero Portrait & Gradient Integration Plan

## Problem Summary
- The circular portrait stage (`.face-stage` in `src/components/home/HomeHero.astro`) currently uses a flat `#fbf9f5` background in Dark Mode and doesn't carry the active tab's gradient wash.
- The colored portrait (`portrait-designer.webp` and the left half of `portrait-split-half.webp`) uses fixed paint colors (teal/yellow/red) that clash with the `Developer` (Graphite Slate), `Educator` (Sage), `Researcher` (Academic Blue), and `Stories` (Terracotta) palettes.

---

## Plan (3 Tasks)

### 1. Generate 4 Palette-Matched Colored Portrait Assets
- Instead of flat CSS tinting (which turns multi-tone paint strokes into a single hue), create **4 dedicated colored portrait variants** from `public/images/portrait-designer.webp` while keeping `public/images/portrait-coder.webp` shared:
  - `public/images/portrait-designer-developer.webp` — Graphite Slate (`#2c3540`), cool steel (`#bcc7d4`), muted stone (`#cfd6cc`)
  - `public/images/portrait-designer-educator.webp` — Deep Sage (`#245c4a`), soft mint (`#9edbc6`), sky teal (`#b6dce6`)
  - `public/images/portrait-designer-researcher.webp` — Academic Blue (`#2b497a`), periwinkle (`#adc5f0`), mist blue (`#bfd0f2`)
  - `public/images/portrait-designer-stories.webp` — Terracotta (`#8f4b24`), warm peach (`#edc09a`), parchment gold (`#e8d5a3`)
- Apply `mix-blend-mode: multiply` on `#designer-layer`, `#coder-layer`, and `#face-base` so the white sketch background becomes transparent and lets the `.face-stage` gradient show through cleanly.
- Swap the `#designer-layer` image `src` (and hide/replace the static `#face-base` left half with the active mode's clipped `#designer-layer` + `#coder-layer` at rest) on `home-mode-change`.

### 2. Give `.face-stage` the Same Soft Gradient as the Active Tab
- Replace the flat background on `.face-stage` with a soft, multi-stop gradient built from the active tab's light pastel tokens:
  ```css
  background: radial-gradient(circle at 25% 25%, var(--portrait-orb-1), transparent 65%),
              radial-gradient(circle at 75% 80%, var(--portrait-orb-2), transparent 65%),
              linear-gradient(150deg, var(--portrait-grad-start), var(--portrait-grad-end));
  ```
- This makes the circular portrait feel seamlessly integrated with the animated page mesh behind it.

### 3. Keep the Light Pastel Gradient Inside `.face-stage` for Dark Mode
- Because `portrait-coder.webp` and `portrait-designer.webp` are dark-ink drawings, putting them on a dark background hides the linework.
- **Centralize portrait tokens in `src/styles/tokens.css`:**
  - Define `--portrait-grad-start`, `--portrait-grad-end`, `--portrait-orb-1`, and `--portrait-orb-2` per `data-mode` using the **Light Mode pastel values** in **both** Light and Dark themes.
  - Result: In Dark Mode, the outer page stays deep & luminous (`#111418`, `#0d1714`, etc.), while the circular portrait medallion displays the active tab's soft light pastel gradient—keeping the ink sketch sharp and the colored half vibrant.
