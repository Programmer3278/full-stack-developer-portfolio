// Static build for GitHub Pages: a simple React app (no server) that renders the same
// portfolio as the main app. Run with `bun run build:pages`; output goes to dist-pages/.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  root: path.resolve(__dirname, "github-pages"),
  base: process.env.BASE_PATH || "/",
  publicDir: path.resolve(__dirname, "public"),
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  build: {
    outDir: process.env.PAGES_OUT_DIR || path.resolve(__dirname, "dist-pages"),
    emptyOutDir: true,
  },
});
