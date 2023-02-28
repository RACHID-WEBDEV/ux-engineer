const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif']
    },
    boxShadow: {
      'primary-xs': '0px 0px 0px 4px rgba(1, 179, 248, 0.2)',
      'primary-sm': '0px 0px 0px 4px rgba(172, 230, 253, 0.4)',
      'secondary-xs': '0px 0px 0px 4px rgba(52, 64, 85, 0.2)',
      'success-xs': ' 0px 0px 0px 4px rgba(0, 202, 105, 0.2)',
      'danger-xs': '0px 0px 0px 4px rgba(255, 81, 81, 0.25)',
      'warning-xs': '0px 0px 0px 4px rgba(234, 196, 53, 0.2)',
      normal: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink
    },
    extend: {
      colors: {
        bg: '#1f2937',
        secondary: '#F5C249',
        'bg-100': '#FBFCFF'
      },
      backgroundImage: {
        'rachid-bg': "url('/assets/images/rasheed.png')",
        'bg-divider': "url('/assets/images/Rect Light.svg')",
        'bg-divider1': "url('/assets/images/bg-divider1.png')"
      },
      rotate: {
        360: '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeInAndBounce: 'fadeIn 3s ease-out'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
