/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['"Roboto Mono"', "serif"],
      },
      colors: {
        cambridgeBlue: "#739E82",
        dark: "#1d1d1f",
        darkGray: "#4c4c4c",
      },
    },
  },
  plugins: [],
};
