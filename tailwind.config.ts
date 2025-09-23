import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./mdx-components.tsx"],
  theme: {
    extend: {
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
