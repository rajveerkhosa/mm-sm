import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sinclair: {
          green: {
            DEFAULT: "#008751",
            dark: "#006B40",
            light: "#00A766",
            50: "#E6F7EF",
            100: "#CCEFDF",
            200: "#99DFBF",
            300: "#66CF9F",
            400: "#33BF7F",
            500: "#008751",
            600: "#006B40",
            700: "#005030",
            800: "#003620",
            900: "#001B10",
          },
          red: {
            DEFAULT: "#E21F26",
            dark: "#B71920",
            light: "#FF3942",
            50: "#FCEBEC",
            100: "#F9D7D9",
            200: "#F3AFB3",
            300: "#ED878D",
            400: "#E75F67",
            500: "#E21F26",
            600: "#B71920",
            700: "#8A1318",
            800: "#5C0D10",
            900: "#2E0708",
          },
        },
        navy: {
          DEFAULT: "#1a2332",
          light: "#2d3a4f",
          dark: "#0f1520",
        },
        cream: "#FFF8F0",
        sand: "#F5EDE3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'sinclair': '0 4px 14px 0 rgba(0, 135, 81, 0.15)',
        'sinclair-lg': '0 10px 25px 0 rgba(0, 135, 81, 0.2)',
        'red': '0 4px 14px 0 rgba(226, 31, 38, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
