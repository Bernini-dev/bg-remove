/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#BC409D"
      }
    },
  },
  plugins: [],
}

