import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./mdx-components.tsx"],
  darkMode:
    "media" /* // harmless; we rely on vars but this keeps native defaults sane */,
  theme: {
    extend: {
      colors: {
        bg: "var(--background)",
        fg: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        arapey: ["var(--font-arapey)"],
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
