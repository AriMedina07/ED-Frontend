/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
   content: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
   theme: {
      extend: {
         colors: {
            upqroo: '#4f2117',
            poli: '#fb730c',
            polib: '#fd7108',
            polibr: '#e90f02',
         },
      },
   },
   plugins: [plugin],
};
