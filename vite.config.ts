import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Must be your repo name with leading AND trailing slashes:
  base: "/everyday-essentials/"
});
