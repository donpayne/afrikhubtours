/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      afrik: '"Black Han Sans", sans-serif',
    },
    extend: {},
  },
  plugins: [],
}