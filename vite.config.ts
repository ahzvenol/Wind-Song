import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig(({ command }) => ({
  base: "/Wind-Song",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
  server: {
    port: 8888,
    strictPort: true,
  },
  build: {
    target: "esnext",
    sourcemap: false,
  },
  esbuild: {
    drop: command === "build" ? ["console", "debugger"] : [],
  },
}));
