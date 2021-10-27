module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ml-yellow": "#fff159",
        "ml-gray-100": "#ebebeb",
        "ml-gray-200": "#999",
        "ml-gray-300": "#333333",
        "ml-blue": "#5796fa",
        "ml-green": "#00a650",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
