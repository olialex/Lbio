import { defineConfig } from "vite";

const deployTarget = process.env.DEPLOY_TARGET || "cloudflare";

const basePath =
  deployTarget === "github"
    ? "/link-in-bio/"
    : "/";

export default defineConfig({
  base: basePath,

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});