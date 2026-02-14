/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './src/layouts/**/*.{astro,html,js,jsx,ts,tsx}',
    './src/components/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '400': '400px',
        '440': '440px',
      },
      spacing: {
        '15': '3.75rem',
        '70': '17.5rem',
        '125': '31.25rem',
      },

      screens: {
        '2xl': '2480px',
        '4xl': '3060px',
      }
    }
  },
  plugins: [],
}
