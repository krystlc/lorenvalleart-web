/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Noto Serif Display", "serif"],
      sans: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        "rosy-brown": "#C6A7A4",
        "raisin-black": "#2A292E",
        "redwood-dull": "#9B5E59",
        redwood: "#AA4442",
      },
    },
  },
  plugins: [],
};
