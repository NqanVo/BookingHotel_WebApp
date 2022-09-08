/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Ms Madi', 'cursive', 'sans-serif']
      },
      backgroundSize: {
        size200: '200%'
      }
    },
  },
  plugins: [],
}
