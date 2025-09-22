import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              textAlign: 'center',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
