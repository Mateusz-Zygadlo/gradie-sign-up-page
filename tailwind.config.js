const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': '460px',
      ...defaultTheme.screens,
    },
    extend: {
      colors : {
        'main': '#013243'
      },
    },
  },
  plugins: [],
}
