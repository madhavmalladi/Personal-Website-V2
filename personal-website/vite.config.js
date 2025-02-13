import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Personal-Website-V2/", // Set to your repo name
  build: { outDir: "dist" }
});
