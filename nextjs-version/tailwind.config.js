/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '512px',
        'md': '768px',
        'lg': '960px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1780px'
      },
    }
  },
  plugins: [
    require('rippleui')
  ],
}