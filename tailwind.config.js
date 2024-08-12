/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#2a2a2a'
      },
      fontFamily: {
        primary: `'Montserrat', sans-serif`,
        secondary: `'Open Sans', sans-serif`,
      },
      screens: {
        lg: { max: '1280px' },
        md: { max: '1100px' },
        sm: { max: '768px' },
        xs: { max: '350px' },
      },
    },
  },
  plugins: [],
}