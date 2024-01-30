import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      "3": "3px",
    },
    borderRadius: {
      DEFAULT: "8px",
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      xl: "24px",
      xxl: "57px",
    },
    colors: {
      "yellow-600": "#FDDC2E",
      "yellow-800": "#C5A91D",
      "grey-700": "#1F2937",
      "grey-400": "#9CA3AF",
      "grey-100": "#F3F4F6",
      "yellow-100": "#FEF9C3",
      "grey-border": "#D2D5DA",
      white: "#FFFFFF",
      "dark-grey": "#374151",
      "dark-blue": "#243c5a",
      salmon: "#fed7d7",
      "salmon-dark": "#fc8181",
      red: "#c53030",
    },
    extend: {
      margin: {
        "40": "40px",
      },
      padding: { "44": "44px", "18": "18px", "13": "13px" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: { "188": "188px", "232": "232px", "296": "296px", "84": "84px" },
      height: {
        "112": "112px",
        "288": "288px",
        "104": "104px",
        "80": "80px",
      },
    },
  },
  plugins: [],
};
export default config;
