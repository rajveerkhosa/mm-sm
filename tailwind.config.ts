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
        midnight: {
          DEFAULT: "#06080C",
          50: "#0A0D14",
          100: "#0F1520",
          200: "#151D2B",
          300: "#1C2638",
        },
        sinclair: {
          green: {
            DEFAULT: "#00C46A",
            dark: "#009952",
            light: "#00E87C",
            50: "#E6FFF3",
            100: "#B3FFD9",
            200: "#66FFBA",
            300: "#00FF8C",
            400: "#00E87C",
            500: "#00C46A",
            600: "#009952",
            700: "#006B3A",
            800: "#003D21",
            900: "#001608",
          },
          red: {
            DEFAULT: "#E21F26",
            dark: "#B71920",
            light: "#FF3942",
            50:  "#FCEBEC",
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
        gold: {
          DEFAULT: "#F59E0B",
          light:   "#FCD34D",
          dark:    "#B45309",
          50:  "#FFFBEB",
          100: "#FEF3C7",
        },
        navy: {
          DEFAULT: "#1a2332",
          light:   "#2d3a4f",
          dark:    "#0f1520",
        },
        cream:      "#FFF8F0",
        sand:       "#F5EDE3",
        charcoal:   "#2B2B2B",
        background: "#F8F9FA",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sinclair:      "0 4px 24px 0 rgba(0, 196, 106, 0.18)",
        "sinclair-lg": "0 8px 40px 0 rgba(0, 196, 106, 0.28)",
        gold:          "0 4px 24px 0 rgba(245, 158, 11, 0.18)",
        glass:         "0 4px 24px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        red:           "0 4px 14px 0 rgba(226, 31, 38, 0.15)",
      },
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        marquee:   "marquee 35s linear infinite",
        "fade-up": "fadeUp 0.6s ease both",
        glow:      "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 20px rgba(0, 196, 106, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 196, 106, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
