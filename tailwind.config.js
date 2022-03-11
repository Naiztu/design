module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nue: ["Bebas Neue", "cursive"],
      },
      colors: {
        dis: "#848484",
        hov: "#5C5C5C",
        neutral: "#D9D9D9",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: { scrollbar: ["rounded"] },
};
