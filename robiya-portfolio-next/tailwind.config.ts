import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: "#080b1a",
        bg1: "#120c2e",
        bg2: "#0d1b33",
        glass: "rgba(255,255,255,0.055)",
        "glass-strong": "rgba(255,255,255,0.09)",
        "glass-border": "rgba(255,255,255,0.14)",
        cyan: "#4fd1e8",
        violet: "#a78bfa",
        pink: "#ec6fb4",
        text0: "#eef2fb",
        text1: "#aab3cc",
        text2: "#707a99",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      borderRadius: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
