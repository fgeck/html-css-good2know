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
 * greys: #555 /  
 * Tints:
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
        gray: '#555',
        brand: '#e67e22',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}