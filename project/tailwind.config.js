const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
       oswald: ["Oswald", "sans-serif"], 
      },
      borderWidth:{
        '1': "1px"
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ]
}

