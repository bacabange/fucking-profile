module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Fira Sans", "sans-serif"],
      },
      gridTemplateRows: {
        menu: "80px repeat(3, minmax(0, 1fr))",
      },
      height: {
        "screen-layout": "calc(100vh - 80px)",
      },
      colors: {
        "deep-orange": "#ff5722",
        "deep-orange-50": "#fbe9e7",
        "deep-orange-100": "#ffccbc",
        "deep-orange-200": "#ffab91",
        "deep-orange-300": "#ff8a65",
        "deep-orange-400": "#ff7043",
        "deep-orange-500": "#ff5722",
        "deep-orange-600": "#f4511e",
        "deep-orange-700": "#e64a19",
        "deep-orange-800": "#d84315",
        "deep-orange-900": "#bf360c",
        "deep-orange-100-accent": "#ff9e80",
        "deep-orange-200-accent": "#ff6e40",
        "deep-orange-400-accent": "#ff3d00",
        "deep-orange-700-accent": "#dd2c00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
