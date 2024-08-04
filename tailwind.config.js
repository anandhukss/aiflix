/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#00BFFF'
      },
      fontFamily: {
        primary: `'Montserrat', sans-serif`,
        secondary: `'Open Sans', sans-serif`,
      },
    },
  },
  plugins: [],
}