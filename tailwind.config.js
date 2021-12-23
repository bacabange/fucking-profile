module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./safelist.txt",
  ],
  options: {
    safelist: ["bg-teal-500", "bg-violet-500"],
  },
  theme: {
    extend: {
      fontFamily: {
        body: ["Fira Sans", "sans-serif"],
      },
      gridTemplateRows: {
        menu: "80px repeat(3, minmax(0, 1fr))",
        header: "20% 1fr",
      },
      height: {
        "screen-layout": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
