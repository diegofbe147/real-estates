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
        'lh-green-gray': '#5B6866',
        'lh-white': '#FFFFFF'
      },
      fontFamily: {
        silka: ['Silka', 'sans-serif'],
      },
      borderRadius: {
        card: '0.625rem',
      },
      spacing: {
        '5.5': '1.375rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '28.5': '7.188rem',
        '30': '7.5rem',
        '30.5': '7.663rem',
        '37.5': '9.375rem',
        '49': '12.25rem',
        '54.5' :'13.625rem',
        '73': '18.25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
