/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins']
      },
      colors: {
        'prim1' : "#282D32",
        'prim2' : '#191B1F',
        'prim3' : "#363C43",
        'prim4' : "#171717",
        'prim5' : '#28292F',
        'prim6': '#6F787C',
        'prim7': '#303439',
        'grey1' : '#A3ADB2',
        'grey2' : '#969696',
        'lig' : "#616161",
        'ligblue' : "#96BEE7",
      },
      dropShadow : {
        'cus' : '5.67px 5.67px 3.78px rgba(0,0,0,0.4)',
        'cus1' : '13.49px 13.87px 40.47px  rgba(0,0,0,1)',
        'cus2' : '-0.5px -0.5px 6.9px rgba(255,255,255,0.25), 9px 10px 7.1px rgba(0,0,0,0.4)'
      },
      boxShadow: {
        'cus2' : '-0.5px -0.5px 6.9px rgba(255,255,255,0.25), 9px 10px 7.1px rgba(0,0,0,0.4),inset 0px 0px 48.91px rgba(255,255,255,0.05), inset 0px 3.26px 3.26px rgba(255,255,255,0.15)',
        'cus1' : '-5px -3px 30px rgba(150,190,231,1),4px 5px 30px rgba(16,18,19,1)'
      }
    },
  },
  plugins: [],
}

