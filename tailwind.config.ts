import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryText: "#8CE339"
      },
      fontFamily: {
        roBoTo: ['var(--font-roboto)'],
        reiswar: ['var(--font-reiswar)'],
      },
      backgroundImage: {
        'home-banner': 'linear-gradient(78deg, #DA3016 14.21%, #FF7120 89.25%)'
      }
    },
  },
  plugins: [],
};
export default config;
