module.exports = {
  purge: ['./**/*.html',
  './**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// npm install -g cross-env
// cross-env NODE_ENV=production  
// npx tailwindcss-cli@latest build ./tailwind.css -o ./app.css
