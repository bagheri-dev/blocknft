import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#1B1B1B",
        "primary" : "#4F80EF",
        "box" : "#202020"
      },
      fontFamily: {
        "lato" : "lato",
        "raleway" : "raleway"
      }
    },
  },
  plugins: [],
} satisfies Config;
