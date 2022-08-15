/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: '#A4A0FC',
          500: '#9D6EFF',
          700: '#826AFA',
          900: '#43425D',
        },
        green:{
          300: '#4BD991'
        },
      },
      fontFamily: { 
        roboto: 'Roboto, sans-serif',
      },
  },
  plugins: [],
  }}