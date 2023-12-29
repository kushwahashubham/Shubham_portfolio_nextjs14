import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#edf2f8",
        "secondary-color": "#313bac",
        "black-color": "#030303",
        "lightGray-color": "#e4e4e4",
        "gray-color": "#6b7688",
        "brown-color": "#46364a",
        "white-color": "#ffffff",
      },
      fontFamily: {
        base: ["var(--font-base)"],
      },
    },
  },
  plugins: [],
};
export default config;
