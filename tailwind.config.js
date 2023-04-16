/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e2f779",

          secondary: "#e02151",

          accent: "#82b7e5",

          neutral: "#262234",

          "base-100": "#F6F8F9",

          info: "#2865D7",

          success: "#22A568",

          warning: "#AF7812",

          error: "#F76466",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
