module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
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
        sm: '640px',
        md: '768px',
        lg: '768px',
        xl: '768px',
        '2xl': '1024px',
      },
    },
  },
  variants: {},
  plugins: [],
}
