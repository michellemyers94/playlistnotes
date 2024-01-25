/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
     './templates/**/*.html', // Path to your Flask templates
    './path/to/other/html/or/js/files/**/*.html',
    './path/to/other/html/or/js/files/**/*.js',
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}