import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import injectProcessEnv from "rollup-plugin-inject-process-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    injectProcessEnv({
      DRIVER: "browser",
    }),
  ],
});
