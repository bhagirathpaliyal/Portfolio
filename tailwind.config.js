import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
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

    
   
    },
  },
  plugins: [],
}

