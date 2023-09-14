/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
};
