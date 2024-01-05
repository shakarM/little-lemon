/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        three: "#333",
        secondary: "#d32f2f",
        customGreen: "#4caf50",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
