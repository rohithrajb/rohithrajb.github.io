const flowbite = require("flowbite-react/tailwind");

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
            'fira': "Fira Code, monospace"
         },
         colors: {
            'main': '#607B96',
            'border': '#1e2d3d'
         },
         boxShadow: {
            'input' : '0 0 0 2px rgba(96, 123, 150, .3)'
         }
      },
   },
   plugins: [
      flowbite.plugin()
   ],
}