/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Background-color":"#F4F2EE",
        "primary-color":"#0a66c2"
      },fontFamily:{
        "Popins":"Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}

