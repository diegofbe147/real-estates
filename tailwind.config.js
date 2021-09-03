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
        'lh-bg-gray': '#E5F0EE',
        'lh-white': '#FFFFFF'
      },
      fontFamily: {
        silka: ['Silka', 'sans-serif', 'ui-sans-serif', 'system-ui' ],
      },
      borderRadius: {
        lg: '0.625rem',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '20.5': '5.125rem',
        '30': '7.188rem',
        '31.5': '7.625rem',
        '38': '9.375rem',
        '42': '10.5rem',
        '49': '12.25rem',
        '73': '18.25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
