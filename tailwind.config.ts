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
        page: "#eef1f7",
        glassBg: "rgba(255,255,255,0.55)",
        glassBgStrong: "rgba(255,255,255,0.75)",
        glassBorder: "rgba(255,255,255,0.65)",
        // token names kept as "cyan"/"violet"/"pink" for minimal component churn,
        // but repointed to the new bright lime + pink Frost UI palette
        cyan: "#8bd41a",
        violet: "#ec3f8f",
        pink: "#ff6fb0",
        text0: "#1c2333",
        text1: "#525c73",
        text2: "#8891a6",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backdropBlur: {
        glass: "22px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31,41,64,0.10), inset 0 1px 0 rgba(255,255,255,0.6)",
        "glass-sm": "0 4px 16px rgba(31,41,64,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        "glass-inset": "inset 0 2px 6px rgba(31,41,64,0.10)",
        "glass-inset-sm": "inset 0 1px 4px rgba(31,41,64,0.09)",
        "glass-featured":
          "0 10px 36px rgba(31,41,64,0.12), inset 0 1px 0 rgba(255,255,255,0.7), 0 0 0 1.5px rgba(236,63,143,0.35), 0 0 30px rgba(139,212,26,0.20)",
      },
      borderRadius: {
        glass: "22px",
      },
    },
  },
  plugins: [],
};
export default config;
