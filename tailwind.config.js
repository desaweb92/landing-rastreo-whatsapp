/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'envia-red': '#ba0020',
        'envia-gray': '#4E4E4D',
      },
      fontFamily: {
        'asap': ['Asap', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
