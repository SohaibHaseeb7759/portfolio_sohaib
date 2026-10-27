# Muhammad Sohaib Haseeb — Portfolio

Personal portfolio built with [Astro](https://astro.build). Static output, no client framework.

Live: https://sohaibhaseeb7759.github.io/portfolio_sohaib/

## Develop

```bash
npm install
npm run dev       # http://localhost:4321/portfolio_sohaib
npm run build     # type-checks, then builds to dist/
npm run preview
```

## Structure

- `src/data/site.ts` — all content: profile, skills, projects, coursework
- `src/styles/tokens.css` — design tokens (color, type scale, spacing, motion)
- `src/styles/global.css` — reset, utilities, buttons, reveal animation
- `src/components/` — one component per section
- `src/assets/` — images, optimised at build time (AVIF/WebP)
- `public/` — CV PDF and favicon, served as-is

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
