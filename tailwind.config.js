module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#002',
        'custom-light-green': '#e9f0c9'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
