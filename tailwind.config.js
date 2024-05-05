/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
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
      },
   },
   plugins: [],
}