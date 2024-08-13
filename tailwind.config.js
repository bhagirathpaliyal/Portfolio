import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: { opacity: 0, transform: 'translateX(-100px) '  },
          to: { opacity: 1, transform: 'translateX(0px) ' },
        },
        appear1: {
          from: { opacity: 0, transform: 'translateX(100px) '  },
          to: { opacity: 1, transform: 'translateX(0px) ' },
        }
      },
      colors: {
        dark: {
          100: '#e0e0e0',
          200: '#c0c0c0',
          300: '#a0a0a0',
          400: '#808080',
          500: '#606060',
          600: '#404040',
          700: '#303030',
          800: '#202020',
          900: '#121212',
        }
      }
    },
  },
  plugins: [],
}
