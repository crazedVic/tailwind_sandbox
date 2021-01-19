const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
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
