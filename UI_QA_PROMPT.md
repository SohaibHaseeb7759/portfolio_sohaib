# UI polish pass — portfolio_sohaib

> Prompt for Claude Code. Paste the whole file as the task, or point Claude at it with
> "read UI_QA_PROMPT.md and work through it in priority order".

## Role

Act as a senior front-end engineer pairing with a senior UI QA reviewer. The site already has a
solid design system and clean code. Your job is **polish and hierarchy**, not a redesign. Every
change must look like it was always part of this design.

## Context you must respect

- Astro 7, static output, zero client framework. Keep it that way. No React, no Tailwind, no UI kits.
- All content lives in `src/data/site.ts`. Do not hard-code copy in components.
- All colour, type, spacing and motion come from `src/styles/tokens.css`. Add tokens there if you
  need new ones; never use raw hex values inside components.
- Dark theme only, `color-scheme: dark`. Do not add a light theme unless the task below says so.
- Keep the existing accessibility work: skip link, `:focus-visible` styles, `prefers-reduced-motion`
  guards on every animation, `aria-current` scroll-spy in the nav, semantic headings.
- `npm run build` runs `astro check` first. The build must stay green with zero type errors.
- Base path is `/portfolio_sohaib`. Any new asset URL must go through `import.meta.env.BASE_URL`
  the way `Hero.astro` and `Base.astro` already do.
- Images in `src/assets/` go through `astro:assets` (`<Picture>` / `getImage`). Nothing raw in `public/`
  except the CV and favicon.

## QA findings the work is based on

Reviewed at 1440×900 and 375×812 against the dev server. No console errors, no horizontal
overflow on mobile, fonts and reveal animations behave. The problems are about **length,
hierarchy and proof**, not bugs.

| Area | Measured | Finding |
|---|---|---|
| Whole page | 11,200 px desktop, 16,250 px mobile | Too long for a one-page portfolio. A recruiter will not reach Contact. |
| Work section | 4,242 px desktop | 38 % of the page. Seven projects get near-equal weight, so the one real product (Munshi) does not stand out from four course-style projects. |
| About section | 1,288 px desktop | Three generic "values" cards ("Detail is the product", "Users before ornament", "Push past the default") add height without evidence. |
| Experience | — | Transcure, the strongest real-world work (five client sites shipped solo), has **no visuals at all**. The "Delivered" list is plain text chips. |
| Skills / Toolkit | 1,605 px desktop | Four columns of plain text. Reads like a CV, not a portfolio. Capability rows have a hover accent but no touch equivalent. |
| Hero (mobile) | arch ≈ 65 % width, left-aligned | Dead space to the right of the portrait. CTAs sit ~1,000 px down, below the first viewport. |
| Hero (both) | outlined "Haseeb" | Stroke-only text is low contrast on the dark gradient, especially at phone sizes. |
| Section headers | all six | Identical rhythm (number eyebrow → two-line H2 → right-aligned paragraph). Consistent, but monotone and tall. |
| Nav CTA | desktop vs mobile | "Let's talk" on desktop, "Start a conversation" in the mobile menu. Same action, two labels. |
| Project numbering | tiles vs features | Tile numbers are rose, feature/eyebrow numbers are blue. Accent colours should mean the same thing everywhere. |
| Far Away tile | full-width banner | A tiny packing-list app gets the widest screenshot on the page. |
| Body copy | Experience bullets at 1440 | Line length ≈ 90 characters. Cap prose at ~70ch. |
| Link preview | OG image | Square portrait only. No name or role in the card. |
| Favicon | SVG only | No PNG fallback, no `apple-touch-icon`. |
| Content | dates | Transcure "May 2026", Munshi "Sep 2026", Backlinker "Jan 2026" are in the future as of Oct 2026 only if intentional. Confirm against the CV before shipping. |

## Tasks, in priority order

Work top to bottom. Finish and verify one task before starting the next. Each task has
acceptance criteria; do not mark it done until they all hold.

### 1. Re-tier the Work section so Munshi is unmistakably the lead

- Keep `layout: "feature"` for **Munshi only**. Change `usePopcorn` to `"tile"` in `site.ts`.
- Give the Munshi feature more presence: larger phone frame on desktop (fill the 7-column media
  area), and a second supporting visual if one is cheap to add (for example a cropped
  `orders`/`dashboard` screenshot inside a small browser frame behind or beside the phone). If no
  second screenshot exists, do not fake one.
- Render all tile projects (usePopcorn, Forkify, Omnifood, Far Away) in **one uniform grid**:
  3 columns ≥1100 px, 2 columns ≥ 860 px, 1 column below. Same card height, same screenshot crop
  (16:10, `object-fit: cover`, top-aligned), title, one-line kind, one-line summary, stack tags, link.
  Remove the per-slug `.tile--forkify` / `.tile--omnifood` / `.tile--far-away` special cases.
- Keep the two text projects (BidMuse, LetsChat) with their architecture flow, but reduce the flow
  block height by ~30 % so the card is text-first.
- Make every project card with a `live` or `repo` link fully clickable (wrap or use a stretched
  pseudo-element on the primary link), with a subtle hover lift (`translateY(-2px)` + `--shadow-2`)
  and a 1.02 image scale. Respect `prefers-reduced-motion`.

**Done when:** Work section ≤ 2,600 px at 1440×900; Munshi visibly larger than everything else;
tiles align on a shared grid; hovering any card gives feedback; keyboard focus ring still visible.

### 2. Give Transcure visual proof

- Add a `delivered.items` visual treatment: each item becomes a small card with the site name, a
  one-line descriptor, and either a logo mark or a 16:10 screenshot. Add a `logo?: ImageMetadata`
  and `image?: ImageMetadata` field to the `Role.delivered.items` type (convert items from
  `string[]` to `{ name, note?, href?, image? }[]`).
- Until real screenshots are added to `src/assets/clients/`, render a tasteful placeholder:
  monospace site name on `--c-surface-2` with a 1 px `--c-border`. Never ship a broken image.
- Keep the role bullets, but cap them at ~70ch and tighten vertical spacing between bullets.

**Done when:** the Transcure block shows five client cards in a row (wrapping on mobile) and the
type in `site.ts` is updated so adding a screenshot later is a one-line change.

### 3. Replace About "values" cards with a stats strip

- Delete the three value cards. Replace with a 4-up stats row sourced from data, for example:
  `2+ years`, `3 roles`, `5 client sites shipped solo`, `15+ CMS pages`. Add a `stats` array to
  `site.ts` so the numbers are not hard-coded.
- Style: big display number (`--t-xl`, `--f-display`), small mono label under it, thin top rule.
  Reuse the existing facts grid styling where sensible.
- Keep the two intro paragraphs and the facts grid (Based in / Experience / Education / Languages).

**Done when:** About ≤ 900 px at 1440×900 and reads as evidence, not adjectives.

### 4. Make Skills scannable

- Turn the Toolkit lists into **chips**: pill shape (`--r-pill`), `--c-surface-2` background,
  `--c-border`, mono text at `--t-sm`. Keep the four group headings.
- Highlight the five items in `profile.focus` with the blue accent (border + text) so the primary
  stack reads instantly.
- Reduce the three capability rows: keep title + summary, drop the right-hand "points" column on
  desktop (the chips below already cover it) or merge points into the chips with a highlighted
  state. Add a visible accent rule on the row even without hover, since touch users never hover.

**Done when:** Skills ≤ 1,000 px at 1440×900; the focus stack is visually distinct; nothing is
hover-only.

### 5. Tighten the hero on mobile

- Below 860 px: centre the arch, make it ~78 % of the container width with a sensible max
  (`min(78vw, 300px)`), and stack: portrait → eyebrow → name → lede → CTAs.
- Ensure both CTAs are visible within the first 812 px on a 375 px wide viewport. If needed, drop
  the hero `min-height` on mobile and reduce the portrait height.
- Keep desktop hero exactly as it is; it is the strongest screen on the site.

**Done when:** at 375×812 the "View selected work" button is on screen without scrolling.

### 6. Fix the outlined "Haseeb" contrast

- Keep the outline treatment, but raise its visibility: `-webkit-text-stroke` of 1.5 px at
  `--c-text-2`, plus a very soft blue inner glow (`text-shadow: 0 0 24px var(--c-blue-soft)`).
- At ≤ 520 px, switch to solid `--c-text-2` instead of an outline; stroke text at ~2.9 rem is
  illegible on cheap phone screens.

**Done when:** "Haseeb" passes a visual check at both sizes and still reads as a design choice.

### 7. Section header rhythm and spacing

- Reduce `--s-section` to `clamp(4rem, 3rem + 5vw, 7.5rem)` and verify no section feels cramped.
- For Experience, Skills and Contact, allow a **single-line H2** at `--t-xl` instead of the
  two-line `--t-2xl` pattern. Keep the two-line pattern for About and Work so the page still has
  peaks.
- Cap the right-hand intro paragraph at `60ch`.

**Done when:** total page height ≤ 8,500 px at 1440×900 and ≤ 12,000 px at 375×812.

### 8. Consistency fixes (small, do them together)

- Nav CTA: use **"Let's talk"** in both desktop nav and mobile menu.
- Project numbers: use blue (`--c-blue`) everywhere; rose stays reserved for the gradient accent
  and the `em` in the hero.
- Experience bullets and About paragraphs: `max-width: 70ch`.
- Add an "Open to" availability line in the hero under the current roles, driven by a
  `profile.availability` string in `site.ts` (for example "Open to full-time and contract roles ·
  remote or Lahore"). Small, mono, with the blue dot pattern already used in `.hero__now`.

### 9. Share and install polish

- Generate a branded OG image at build time: 1200×630, dark `--c-bg`, name in display type, role
  and location in mono, portrait cropped into the arch on the right. Build it as an `.astro`
  endpoint or a prebuilt PNG in `src/assets/og.png`; wire it in `Base.astro` and switch the
  twitter card to `summary_large_image`.
- Add `public/apple-touch-icon.png` (180×180) and `public/favicon-32.png`, and the matching
  `<link>` tags.

### 10. Content check before shipping

- Open `public/Muhammad_Sohaib_Haseeb_CV.pdf` and confirm every date in `site.ts`. If a 2026 date
  should be 2025, fix it in `site.ts`. Do not guess; if the PDF disagrees with the data, list the
  differences in your final report instead of changing anything.

## Do not

- Do not add a light theme, a blog, a CMS, analytics, or a contact backend.
- Do not change the hero on desktop, the nav wordmark, the fonts, or the colour tokens' values.
- Do not add JavaScript for anything CSS can do.
- Do not remove any `aria-*`, `role`, or `alt` attribute. If you change markup, carry them over.
- Do not commit. Leave changes in the working tree for review.

## How to verify each task

1. `npm run build` — must pass `astro check` and build with no warnings about images.
2. Run `npm run dev` and open `http://localhost:4321/portfolio_sohaib`.
3. Measure section heights in the console:
   ```js
   [...document.querySelectorAll('section[id]')].map(s => [s.id, s.offsetHeight])
   ```
   and compare against the targets above at 1440×900 and 375×812.
4. Take a screenshot of every section at both widths and look at them. Check: no clipped text,
   no orphan words in headings, equal card heights, focus rings visible on Tab.
5. Toggle `prefers-reduced-motion: reduce` in DevTools and confirm nothing is hidden and nothing
   animates.
6. Run Lighthouse (mobile) once at the end. Accessibility and Best Practices must stay at 100;
   Performance must not drop below the current score.

## Final report format

For each task: what changed (files), the before/after section height, and one screenshot path per
breakpoint. End with any content discrepancies found in task 10 and anything you deliberately
left out, with the reason.
