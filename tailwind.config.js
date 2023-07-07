const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      hemi: "Hemi Head",
      sfpro: "SF Pro Display Medium",
      montserrat: "Montserrat",
      lemonmilk: "LEMON MILK",
      roboto: "Roboto",
    },
    extend: {},
  },
  plugins: [],
});
