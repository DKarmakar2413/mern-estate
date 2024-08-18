/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B99C2",
        secondary: "#1A4870",
        highlight1: "#1F316F",
        highlight2: "#F9DBBA",
      },
    },
  },
  plugins: [],
}
