const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      flowbite.content()
   ],
   theme: {
      extend: {
         fontFamily: {
            mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
         },
         colors: {
            'main': '#607B96',
            'border': '#1e2d3d',
            'dark': '#011221'
         },
         boxShadow: {
            'input' : '0 0 0 2px #607b968b'
         }
      },
   },
   plugins: [
      flowbite.plugin()
   ],
}