import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#10AF86",
      secondary: "#A04741",
      indieBlack: "#2E2E2E",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-color": "#10AF86",
        "sub-color": "#A04741",
        "font-color": "#2E2E2E",
        "light-gray": "#F4F4F4",
      },
      boxShadow: {
        "modal-custom": "10px 10px 55px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  animation: {
    pulse: "pulse 1s infinite",
  },
  keyframes: {
    pulse: {
      '0%, 100%': { fill: 'gray' },
      '50%': { fill: 'var(--tw-color-main-green)' },
    },
  },
  plugins: [],
};
export default config;