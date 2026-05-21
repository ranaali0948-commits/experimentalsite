/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: 'rgb(var(--color-gold, 212 175 55) / <alpha-value>)',
        midnight: 'rgb(var(--color-midnight, 10 10 11) / <alpha-value>)',
        cream: 'rgb(var(--color-cream, 245 241 232) / <alpha-value>)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
