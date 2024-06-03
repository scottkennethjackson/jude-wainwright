/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'midnight-strike': "url('/images/midnight-strike.png')"
      },

      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif']
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'pink': '#ffb0c4',
        'dark-pink': '#ff7d9e',
        'dark-blue': '#162534',
        'medium-blue': '#1475a4',
        'light-blue': '#61a1bf',
        'brown': '#be9785',
        'grey': '#d3d3d3'
      }
    },
  },
  plugins: [],
}