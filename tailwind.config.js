/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js, jsx, ts, tsx}"],
  theme: {
    extend: {},
  },
  
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
}
