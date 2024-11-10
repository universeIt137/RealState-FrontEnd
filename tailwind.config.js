/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24BF6C', // Custom primary color
        black: '#111111', // Custom black color
      },
      backgroundColor: {
        primary: '#3490dc', // Custom background primary color
        black: '#111111', // Custom background black color
      },
      animation: {
        marquee: 'marquee 30s linear infinite', // Increased duration to 30 seconds
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('daisyui')], // DaisyUI plugin for additional UI components
}
