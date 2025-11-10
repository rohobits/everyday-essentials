import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // If you later add a custom domain (public/CNAME), serve at "/"
  const hasCNAME = false; // set to true if you add public/CNAME
  const base = hasCNAME ? "/" : "/everyday-essentials/";

  return {
    base,
    plugins: [react()]
  };
});
