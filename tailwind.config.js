/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: "'DM Sans', serif",
      },
      colors: {
        'softred-rgba': 'rgba(236, 119, 95, 0.7)',
        'cyan-rgba': 'rgba(118, 181, 188, 0.7)',
      },
    },
  },
  plugins: [],
}
