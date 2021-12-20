module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        '3xl': '0 0px 15px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
