// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}",
// ];

// export const theme = {

//   extend: {
//     // Font Family
//     fontFamily: {
//       bungee: ['Bungee', 'cursive'],
//       poppins: ["Poppins", "sans-serif"],
//     },

//     // Responsive ScreenSize
//     screens: {
//       desktop: "2580px",
//       '3xl': '1920px',
//       '4k': '2560px', 
//       '5k': '5120px', 
//     },

//     // Animation Section
//     keyframes: {
//         'slide-in-left': {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//       },
      
//       // Animation Slid Left 
//       // animation: {
//       //   'slide-in-left': 'slide-in-left 1s ease-out forwards',
//       // },

//       // borderExpand: {
//       //     "0%": { width: "0%", left: "50%", transform: "translateX(-50%)" },
//       //     "100%": { width: "100%", left: "0%", transform: "translateX(0)" },
//       //   },
//       // gradientMove: {
//       //   "0%": { backgroundPosition: "0% 50%" },
//       //   "100%": { backgroundPosition: "100% 50%" },
//       // },
//   },

//   animation: {
//     borderExpand: "borderExpand 1s ease-out forwards",
//     gradientMove: "gradientMove 2s linear infinite alternate",
//   },

// };

// export const plugins = [];

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee', 'cursive'],
        poppins: ["Poppins", "sans-serif"],
        customSans: ['"Custom Sans"', 'sans-serif'],
      },
      screens: {
        desktop: "2580px",
        '3xl': '1920px',
        '4k': '2560px',
        '5k': '5120px',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        borderExpand: {
          '0%': { width: '0%', left: '50%', transform: 'translateX(-50%)' },
          '100%': { width: '100%', left: '0%', transform: 'translateX(0)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        borderExpand: "borderExpand 1s ease-out forwards",
        gradientMove: "gradientMove 2s linear infinite alternate",
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
