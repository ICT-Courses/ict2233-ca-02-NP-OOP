/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scan all source files
  ],
  darkMode: 'class', // enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
