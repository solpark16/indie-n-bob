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
      "main-color": "#10AF86",
      "sub-color": "#A04741",
      "font-color": "#2E2E2E",
      "light-gray": "#F4F4F4",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "modal-custom": "10px 10px 55px 20px rgba(0, 0, 0, 0.1)",
      },
      margin: {
        '37': '9.25rem',  // 37 * (1rem = 16px, 9.25rem = 148px)
        '38': '9.5rem',   // 38 * (1rem = 16px, 9.5rem = 152px)
        '39': '9.75rem',  // 39 * (1rem = 16px, 9.75rem = 156px)
      },
    },
  },
  animation: {
    pulse: "pulse 1s infinite",
  },
  keyframes: {
    pulse: {
      "0%, 100%": { fill: "gray" },
      "50%": { fill: "var(--tw-color-primary)" },
      fontSize: {
        "40px": "40px",
        "25px": "25px",
      },
      boxShadow: {
        "text-shadow": "0 2px 4px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
