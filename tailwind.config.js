const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        lightBlue: "#8AFFF1",
        lightViolet: "#c081ff",
        lightRed: "#ff8a8a",
        lightGrey: "#c9c9c9",
        darkBlue: "#003983",
        darkestBlue: "#001123",
        darkRed: "#360000",
        darkViolet: "#1b0033",
      },
      backgroundImage: {
        envelopeCard: "url('/src/assets/envelopeBg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
