/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // padding: "0.25rem",
      center: true,
    },
    colors: {
      midnight: "#121063",
      "dark-gray": "#191919",
    },
    screens: {
      xs: "375px",
      mediumsmall: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        "cormorant ": ["Cormorant Garamond", "serif"],
        open: ["Open Sans", "sans - serif"],
        karla: ["Karla", "sans - serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
