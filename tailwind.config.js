/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '19': 'repeat(19, minmax(0, 1fr))',
        '29': 'repeat(29, minmax(0, 1fr))',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
      },
      height: {
        'title': 'calc(50vh - 1.5rem)',
        'mobile-title': 'calc(40vh - 1.5rem)'
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

