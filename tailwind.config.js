/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ea7fd',
        secondary: '#333',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
