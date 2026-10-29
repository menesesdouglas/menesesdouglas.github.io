import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://menesesdouglas.github.io",
  base: "/",
  output: "static",
  build: {
    format: "directory",
  },
});