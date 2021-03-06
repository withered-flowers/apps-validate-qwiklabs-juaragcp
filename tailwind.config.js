module.exports = {
  purge: {
    enabled: true,
    content: ["./views/**/*.pug"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
