import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: "#1d120d",
        ember: "#2b1a13",
        sauce: "#b82019",
        tomato: "#df3a28",
        gold: "#f2b73f",
        crust: "#e4bf86",
        cream: "#fff4df",
        box: "#c99157",
        paper: "#f7dfb9",
      },
      boxShadow: {
        glow: "0 22px 70px rgba(242, 183, 63, 0.2)",
        card: "0 18px 45px rgba(29, 18, 13, 0.34)",
      },
      fontFamily: {
        display: ["Cooper Black", "Rockwell Extra Bold", "Georgia", "serif"],
        sans: ["Trebuchet MS", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
