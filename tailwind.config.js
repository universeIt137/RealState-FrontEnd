/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24BF6C',
        black: '#111111'
      },
      backgroundColor: {
        primary: '#3490dc',
        black: '#111111'
      }
    },
  },
  plugins: [require('daisyui'),
  ],
}