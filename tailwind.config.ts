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
        'home-banner': 'linear-gradient(78deg, #DA3016 14.21%, #FF7120 89.25%)',
        'hover-project': 'linear-gradient(180deg, rgba(255, 113, 32, 0.40) 0%, rgba(255, 113, 32, 0.00) 109.25%)',
        'life_span': 'linear-gradient(270deg, rgba(255, 113, 32, 0.00) 0%, rgba(255, 113, 32, 0.50) 100%)',
        'card-apply': 'linear-gradient(156deg, rgba(255, 255, 255, 0.20) -2.51%, rgba(52, 52, 52, 0.00) 87.47%)',
        'contributor-card': 'linear-gradient(28.96deg, #FF7120 0%, #6ACAD8 91%)',
        'group-card': 'linear-gradient(28.96deg, #FF7120 0%, #9D137B 91%)'
      }
    },
  },
  plugins: [],
};
export default config;
