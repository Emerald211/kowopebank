/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serrat: "Montserrat"
      },
      backgroundColor: {
        main: "#7052A8"
      }
    },
  },
  plugins: [],
}

