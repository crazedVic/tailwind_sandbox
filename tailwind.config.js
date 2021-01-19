const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'sans': ["Poppins","ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI",  "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      green: colors.green,
      red: colors.fuchsia,
      yellow: colors.amber,
      blue: colors.lightBlue,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
// npm install -g cross-env
// cross-env NODE_ENV=production  
// npx tailwindcss-cli@latest build ./tailwind.css -o ./app.css
