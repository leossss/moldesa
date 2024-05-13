module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      // Elimina la referencia al archivo CSS personalizado
    ],
  },
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Desactiva el prefijo de estilos base
  },
};
