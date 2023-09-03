/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
      darkMode: "class",
      plugins: [require("@tailwindcss/forms")],
      theme: {
        extend: {
          fontFamily: {
            Nunito: ["Nunito", "sans-serif"],
          },
        },
      },
}
