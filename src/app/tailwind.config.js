/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        poppins: ['var(--font-poppins)'],
      },
    },
    screens: {
      xl: {max: '1400px'}, 
      lg: {max: '1150px'},
      md: {max: '767px'},
      sm: {max: '639px'},
       
    }
  },
  plugins: [],
}
