/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#37cdbe",
          neutral: "#3d4451",
         
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
  
}
