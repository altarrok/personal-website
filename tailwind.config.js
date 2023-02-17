/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'l': '-0.7rem 0 2rem 0 rgb(21 27 31 / 50%)'
      }
    },
  },
  plugins: []
}
