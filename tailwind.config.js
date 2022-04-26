// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryred: "#B10808",
        coreblue: "rgba(43, 51, 227, 0.22)",
      },
      fontFamily:{
        'metamorphous':['Metamorphous', 'cursive'],
      },
    },
  },
  plugins: [],
}
