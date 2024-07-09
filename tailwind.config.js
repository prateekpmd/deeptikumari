/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '540px', // min-width
      },
      screens: {
        'xxxs': '400px', // min-width
      },
    },
  },
  plugins: [],
}