import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgcol: "#282828",
        bgcol1: '#252525',
        bgcol2: '#343A40',
        col3: '#B9B9B9',
        col4y: '#F3D011'

      },
    },
  },
  plugins: [],
};
export default config;
