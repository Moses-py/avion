/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./features/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      "dark-primary": "#2A254B",
      primary: "#4E4D93",
      "border-gray": "#EBE8F4",
      milk: "#F9F9F9",
      "border-dark": "#CAC6DA",
      dark: "#22202E",
      "body-gray": "#5B5676",
      nav: "#726E8D",
    },
    fontSize: {
      "headline-1": "36px",
      "headline-2": "32px",
      "headline-3": "24px",
      "headline-4": "20px",
      "headline-5": "16px",
      "headline-6": "14px",
      "body-small": "14px",
      "body-medium": "16px",
      "body-large": "18px",
    },
    lineHeight: {
      global: "150%",
    },
    fontFamily: {
      serif: ["var(--font-clash_display)"],
      sans: ["var(--font-satoshi)"],
    },
    screens: {
      xs: "320px",
      sm: "376px",
      s: "480px",
      "m-sm": "600px",
    },
    container: {
      center: true,
    },
    backgroundImage: {
      hero: "url('/images/homepage/hero.webp')",
      "hero-small": "url('/images/homepage/hero_small.webp')",
      "newsletter-bg": "url('/images/homepage/newsletter.webp')",
    },
  },
};
export const plugins = [];
