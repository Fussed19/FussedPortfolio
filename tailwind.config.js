/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '400': '400rem',
        '440': '440rem',
      },
      spacing: {
        '15': '3.75rem',
        '70': '17.5rem',
        '125': '31.25rem',
      }
    }
  },
  plugins: [],
}
