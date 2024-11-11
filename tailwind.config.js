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
        green: '#21c45e',
      },
      backgroundColor: {
        primary: '#3490dc', // Custom background primary color
        black: '#111111', // Custom background black color
      },
      animation: {
        marquee: 'marquee 30s linear infinite', // Increased duration to 30 seconds
        'pulse-custom': 'pulse-custom 1.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-custom': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1', color: 'rgba(255, 0, 0, 0.8)' },
          '50%': { transform: 'scale(1.2)', opacity: '0.6', color: 'rgba(255, 0, 0, 1)' },
        },
      },
    },
  },
  plugins: [require('daisyui')], // DaisyUI plugin for additional UI components
};
