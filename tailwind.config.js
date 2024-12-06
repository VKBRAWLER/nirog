/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'robo-med': ['Roboto-Medium'],
        'robo-bold': ['Roboto-Bold'],
        'robo-light': ['Roboto-Light'],
      },
    },
  },
  plugins: [],
};
