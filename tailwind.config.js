/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      spacing: {
        "3/4": "75%",
        "2/3": "67%",
        "1/2": "50%",
        "1/3": "33%",
        "1/4": "25%",
        "1/5": "20%",
      },
    },
  },
  plugins: [],
};
