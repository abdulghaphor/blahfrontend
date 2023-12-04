/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { chai: "#ded5c9", deepocean: "#1b365d" },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
