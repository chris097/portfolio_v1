// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primaryred: "#B10808",
        coreblue: "rgba(43, 51, 227, 0.22)",
        primaryblue: "#2B33E3",
        corered: "#FF6B6B",
        coreyellow: "#EFA434",
        secondaryblue: "#151D3B",
        coredark: "#151D3B"
      },
      fontFamily:{
        'metamorphous':['Metamorphous', 'cursive'],
        'roboto':['Roboto', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
      },
      width:{
        "80%": "80%",
        "85%": "85%",
        "600px": "600px"
      },
      height:{
        "400px": "400px"
      }
    },
  },
  plugins: [],
}
