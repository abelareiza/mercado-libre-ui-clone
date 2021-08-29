module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amarillo: "#fff159",
        gris: "#ebebeb",
        gris2: "#999",
        gris3: "#333333",
        azul: "#5796fa",
        verde: "#00a650",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
