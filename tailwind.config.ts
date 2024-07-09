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
      },
      boxShadow: {
        "modal-custom": "10px 10px 55px 20px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        'main-green': '#10af86',
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