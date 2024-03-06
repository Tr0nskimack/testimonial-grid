/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moderate_violet: "#7441C7",
        very_dark_gray: "#48556A",
        very_dark_black: "#19202E",
        white: "#FFFFFF",
        light_gray: "#CECECE",
        light_grayish_blue: "#ECF2F8"

      }
    },
  },
  plugins: [],
}