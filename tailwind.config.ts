import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/bg-grid-lighter.svg')",
      },
      fontSize: {
        heading: "34px",
      },
      colors: {
        blue: {
          500: "rgb(37 99 235)",
        },
        heading: "#1e133e",
        text: "#3b4b5f",
        nav: "#546879",
        green: {
          300: "#22c55e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
