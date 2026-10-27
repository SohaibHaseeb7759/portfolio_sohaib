// @ts-check
import { defineConfig } from "astro/config";

// Served by GitHub Pages as a project site:
// https://sohaibhaseeb7759.github.io/portfolio_sohaib/
export default defineConfig({
  site: "https://sohaibhaseeb7759.github.io",
  base: "/portfolio_sohaib",
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
});
