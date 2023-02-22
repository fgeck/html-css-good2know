/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        hero: `
        linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
        url(./public/images/hero.jpg)
        `
      }
    },
  },
  plugins: [],
}
