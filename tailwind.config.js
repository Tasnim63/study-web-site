module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},

  daisyui: {

    themes: [
      {
        mytheme: {

          "primary": "#3BBCA7",

          "secondary": "#072F60",

          "accent": "#141948",

          "neutral": "#291334",

          "base-100": "#f6f7f9",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],

    themes: ["cupcake"],


  },
  plugins: [require("daisyui")],
}