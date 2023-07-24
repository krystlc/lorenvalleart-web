import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const baseTextColor = "#2A292E";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Noto Serif Display", "serif"],
      sans: ["Roboto Mono", "monospace"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: baseTextColor,
          },
        },
      },
      colors: {
        "rosy-brown": "#C6A7A4",
        "raisin-black": baseTextColor,
        "redwood-dull": "#60413e",
        redwood: "#AA4442",
      },
    },
  },
  plugins: [typography, forms],
};
