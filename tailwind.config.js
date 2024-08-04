/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        rammetto: ['"Rammetto One"', 'sans-serif'],
      },
    },
  },
  plugins: []
};