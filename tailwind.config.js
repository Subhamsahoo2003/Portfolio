 /** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
   ],
   theme: {
     extend: {
      fontFamily: {
        google: ['"Pirata One"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
   },
  },
   plugins: [],
 }