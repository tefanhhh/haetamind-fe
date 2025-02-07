module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 32s linear infinite',
        'spin-slow-md': 'spin 64s linear infinite',
      },
      fontFamily: {
        sans: [
          'Montserrat',
          'Lato',
          'Inter',
          'DM Sans',
          'Poppins',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    container: {
      screens: {
        sm: '604px',
        md: '736px',
        lg: '736px',
        xl: '736px',
        '2xl': '992px',
      },
    },
  },
  variants: {},
  plugins: [],
}
