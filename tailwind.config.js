/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "zona-pro": ['"Zona Pro Bold"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
