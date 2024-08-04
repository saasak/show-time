/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors :{
        'deep-breath': '#22235e',
        'vitamine-c':'#ff9a02'
      },
      fontFamily: {
        rammetto: ['"Rammetto One"', 'sans-serif'],
      },
    },
  },
  plugins: []
};