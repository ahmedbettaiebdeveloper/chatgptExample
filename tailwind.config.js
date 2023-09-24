/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  mode: 'jit',
  important: false,
  darkMode:'class',
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors:{
        primary:{
          DEFAULT: '#007BA7', // Cerulean
          hover: '#00658F',   // Darker variant for hover
        }
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark-primary': '#1E293B', // A calm dark blue for dark mode
        'dark-secondary': '#283C4F', // A slightly lighter variant for contrasts
      }),
      textColor:{
        'dark-text': '#E4E6EB' // Light grayish color for text in dark mode
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')
  ],
}

