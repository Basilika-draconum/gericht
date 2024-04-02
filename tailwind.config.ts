import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1440px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1439.98px" },
      notXl: { max: "1439.98px" },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2rem",
          xl: "4.375rem",
        },
      },
      // COLORS
      colors: {
        bg: {
          white: "#FFFFFF",
          main: "#0C0B08",
          accent: "#DCCA87",
          hoveraccent: "#DEC152",
        },
        text: {
          white: "#FFFFFF",
          accent: "#DCCA87",
          addaccent: "#F5EFDB",
          secondary: "#AAAAAA",
          extra: "#0C0C0C",
        },
      },
      // FONTS
      fontFamily: {
        sans: ["var(--font-sans)"],
        upright: ["var(--font-upright)"],
        cormorant: ["var(--font-cormorant)"],
      },
      // TRANSITION
      transitionDuration: {
        DEFAULT: "400ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
