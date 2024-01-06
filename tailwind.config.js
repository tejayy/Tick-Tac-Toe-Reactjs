/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "button-color": "#005B41",
        "reset": '#008170',
        "h1-color": "E3651D",
      },
    },
  },
  plugins: [],
};

