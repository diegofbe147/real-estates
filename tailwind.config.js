module.exports = {
  prefix: 'tw-',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'lh-caribbean-green': '#3ECFAF',
        'lh-jungle-green': '#012D26',
        'lh-md-blue': '#EBEDFF',
        'lh-sky-blue': '#3948FF',
        'lh-bg-gray': '#E5F0EE'
      },
      fontFamily: {
        silka: ['Silka', 'sans-serif', 'ui-sans-serif', 'system-ui' ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
