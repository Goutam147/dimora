/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#B30018',
        'brand-red-dark': '#8F0013',
        'gold-accent': '#D4AF37',
        'gold-light': '#F4E07B',
        'gold-pill': '#E8A824',
        'text-dark': '#222222',
        'text-gray': '#666666',
        'border-gray': '#E2E2E2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
