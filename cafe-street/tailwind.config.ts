/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF902B",
        secondary: "#2F2105",
        accents: "#F9D9AA",
        glass: "#FFFFFF",
        light: "#7E7D7A",
      },
    },
  },
  plugins: [],
};
