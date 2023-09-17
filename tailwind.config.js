/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        burtons: "burtons"
      },
      backgroundImage: {
        'coop': "url('/src/assets/coop.png')",
        'amap': "url('/src/assets/amap.png')"
      }
    },
  },
  plugins: [],
}