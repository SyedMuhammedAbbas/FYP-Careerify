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
    screens: {
      // => @media (min-width: 1024px) { ... }
      xxl: { max: "2300px" },
      xxl1: { min: "2000px" },
      "5xl": { max: "1780px" },
      "5.1xl": { max: "1640px" },
      "4xl": { max: "1580px" },
      "3xl": { max: "1440px" },
      "2xl": { max: "1360px" },
      xl: { max: "1260px" },
      xl1: { max: "1200px" },
      xl2: { max: "1100px" },
      xl3: { max: "1050px" },
      lg: { max: "1000px" },
      tablet: { max: "960px" },
      tablet1: { max: "900px" },
      tablet3: { max: "820px" },
      tablet2: { max: "780px" },
      "tablet2.1": { max: "760px" },
      mobile: { max: "650px" },
      mobile2: { max: "600px" },
      "mobile2.1": { max: "560px" },
      mobile1: { max: "500px" },
      "mobile1.1": { max: "400px" },
      mobilesm: { max: "350px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
});
