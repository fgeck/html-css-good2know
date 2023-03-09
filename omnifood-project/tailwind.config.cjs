/**
 * CSS Config
 * 
 * 1 Typography:
 * font-sizes:    10 / 12/ 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
 * font-weights:  default: 400 / 
 * font-heights: default: 1 / 

 * 
 * 2 Colors:
 * primary/brand: #e67e22 /
 * greys: #555 /  #333
 * Tints: #fdf2e9 / #cf711f
 * Accents:
 * Shades: 
 * 
 * 5 Shadows:
 * 
 * 6 Border-Radius:
 * 
 * 7 Whitespace:
 * Spacing:       2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
 * 
 */

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        grey: '#555',
        greyLight: '#333',
        greyLighter: '#ddd',
        brand: '#e67e22',
        brandDark: '#cf711f',
        brandLight: '#fae5d3',
        brandVeryLight: '#fdf2e9',
      },
    },
    fontFamily: {
      'sans': ['Rubik', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}