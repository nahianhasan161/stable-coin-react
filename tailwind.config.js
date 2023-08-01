/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        offwhite_100:"#707A8A",
        yallow_400:"#F0B90B"
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(180deg, #F0B90B 33.33%, #FBDA3C 100%)',
      },
    },
   
  },
  plugins: [],
}

