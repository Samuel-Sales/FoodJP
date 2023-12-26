/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}", "./src/pages/**/*.{html,js,jsx}", "./src/Components/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          fontInter: ['Inter', 'sans-serif'],
          fontMontserrat: ['Montserrat', 'sans-serif'],
          fontPoppins: ['Poppins', 'sans-serif'],
          fontRoboto: ['Roboto', 'sans-serif']
        }
      },
    },
    plugins: [],
  }