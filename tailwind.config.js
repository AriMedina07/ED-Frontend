/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
   content: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
   theme: {
      extend: {
         colors: {
            upqroo: '#4f2117',
            poli: '#fb730c',
         },
      },
   },
   plugins: [plugin],
};
