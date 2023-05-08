/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants:{
    extend:{
      display:['group-focus'],
      opacity:['group-focus'],
      inset:['group-focus']
    }
  },
  plugins: [],
}

