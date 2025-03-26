const { heroui } = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|input|tabs|divider|ripple|spinner|form).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'clash-display': ['ClashDisplay', 'sans-serif'],
      },
      backgroundImage: {
        'fade-gradient': 'linear-gradient(90deg, #121220 0%, transparent 23%, #121220 100%)',
      },
      colors: {
        'primary-white': '#FFFFFF',
        'primary-black': '#090810',
        'primary-black-20': '#121220',
        'primary-white-20': '#FFFFFF33',
        'primary-white-30': '#FFFFFF4D',
        'primary-white-50': '#FFFFFF80',
        'primary-yellow': '#FFB414',
        'primary-purple':'#9747FF',
        'pills-color':'#252343'
      }
    },
    container: {
      center: true,
      padding: '1.563rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1320px', // Set maximum width to 1090px
        '2xl': '1536px' // Also set 2xl to 1090px to ensure it doesn't go larger
      },
    },
  },
  plugins: [heroui()],
}