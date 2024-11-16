import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  assetsInclude: ["**/*.md"],
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src")
    }
  },
  server: {
    port: 2024
  }
});
