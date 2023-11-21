import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-20': 'span 20 / span 20',
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
export default config
