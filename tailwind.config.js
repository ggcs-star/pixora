/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];

export const theme = {

  extend: {
    // Font Family
    fontFamily: {
      bungee: ['Bungee', 'cursive'],
      poppins: ["Poppins", "sans-serif"],
    },

    // Responsive ScreenSize
    screens: {
      desktop: "2580px",
      '3xl': '1920px',
      '4k': '2560px', 
      '5k': '5120px', 
    },

    // Animation Section
    keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      
      // Animation Slid Left 
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
      },

  },

};

export const plugins = [];

