/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      animation: {
        'h-scroll': 'hscroll 5s linear infinite',
      },
      keyframes: {
        hscroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
          '100.1%': { transform: 'translateX(0)' },
        }
      },
    },
  },
  plugins: [],
}

