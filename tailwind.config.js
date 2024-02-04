/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showModal: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        showModal: 'showModal 200ms ease-in-out',
      },
    },
  },
  plugins: [],
}