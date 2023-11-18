import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "8px",
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      xl: "24px",
    },
    colors: {
      "yellow-600": "#FDDC2E",
      "yellow-800": "#C5A91D",
      "grey-background": "#1F2937",
      "grey-700": "#1F2937",
      "grey-400": "#9CA3AF",
      "grey-100": "#F3F4F6",
      "yellow-100": "#FEF9C3",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
