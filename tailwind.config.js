/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0093cc'
      },
      fontFamily: {
        primary: `'Montserrat', sans-serif`,
        secondary: `'Open Sans', sans-serif`,
      },
    },
  },
  plugins: [],
}