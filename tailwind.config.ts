import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // from the logo
        primary: "#6A4FBF", // royal purple
        primaryDark: "#553AA6",
        accent: "#CDB67A", // warm gold
        accentDark: "#AF9F66",
        offwhite: "#FBFAF8",
        ink: "#2A2A2A",
        slate: "#6B7280"
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
