import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@redux": "/src/redux",
      "@hooks": "/src/hooks",
      "@schema": "/src/schema",
      "@services": "/src/services",
      "@lib": "/src/lib",
      "@assets": "/src/assets",
    },
  },
});
