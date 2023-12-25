/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: { max: "1280px" },
    },
    extend: {
      colors: {
        primary: "#0788DF",
        secondary: "#0666D5",
      },
      fontFamily: {
        primary: [
          "Dosis",
          "sans-serif",
          "Mitr",
          "sans-serif",
          "Public Sans",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
