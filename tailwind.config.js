// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         customColor: '#5A6DBE', 
//         customPurple: '#401d54',
//         customBlack: '#25221F' ,
//         customGradiet: ' linear-gradient(233.66deg, rgba(52, 50, 110, 0.67) 40.14%, rgba(59, 56, 56, 0.67) 106.84%)'
//       },

//       before: {
//         'content': '""',
//         'position': 'absolute',
//         'top': '0',
//         'left': '0',
//         'width': '100%',
//         'height': '100%',
//         'opacity': '0.35',
//         'background': rgba(0, 0, 0, 1)',
//         'z-index': '-1'
//     }
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#5A6DBE',
        customPurple: '#401d54',
        customBlack: '#25221F',
        customGradient: 'linear-gradient(233.66deg, rgba(52, 50, 110, 0.67) 40.14%, rgba(59, 56, 56, 0.67) 106.84%)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(233.66deg, rgba(52, 50, 110, 0.67) 40.14%, rgba(59, 56, 56, 0.67) 106.84%)'
      }
    },
  },
  // plugins: [
  //   function ({ addComponents }) {
  //     addComponents({
  //       '.before-content': {
  //         content: '""',
  //         position: 'absolute',
  //         top: '0',
  //         left: '0',
  //         width: '100%',
  //         height: '100%',
  //         // opacity: '0.5',
  //         backgroundImage :  'url(./Starbg.jpg)',
  //         zIndex: '-1',
  //       }
  //     });
  //   }
  // ],
};
