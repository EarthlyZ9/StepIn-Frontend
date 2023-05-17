/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      light: 300,
      medium: 500,
      bold: 700,
    },
    extend: {
      fontFamily: {
        Gmarket: ['GmarketSans', 'sans-serif'],
      },
      fontSize: {
        8: '0.5rem',
        10: '0.625rem',
        11: '0.688rem',
        12: '0.75rem',
        13: '0.813rem',
        14: '0.875rem',
        15: '0.938rem',
        16: '1rem',
        17: '1.063rem',
        18: '1.125rem',
        19: '1.188rem',
        20: '1.25rem',
        21: '1.313rem',
        22: '1.375rem',
        23: '1.438rem',
        24: '1.5rem',
        25: '1.563rem',
        26: '1.625rem',
        27: '1.688rem',
        28: '1.75rem',
        29: '1.813rem',
        30: '1.875rem',
        31: '1.938rem',
        32: '2rem',
        33: '2.063rem',
        34: '2.125rem',
        35: '2.188rem',
        36: '2.25rem',
        37: '2.313rem',
        38: '2.375rem',
        39: '2.438rem',
        40: '2.5rem',
        44: '2.75rem',
        48: '3rem',
        60: '3.75rem',
        64: '4rem',
        72: '4.5rem',
        80: '5rem',
      },
      spacing: {
        15: '3.75rem',
      },
      colors: {
        base: {
          black: '#0C0C20',
          white: '#F6FAF9',
        },
        gray: {
          1: '#F2F2F7',
          2: '#E5E5EA',
          3: '#D1D1D6',
          4: '#C7C7CC',
          5: '#AEAEB2',
          6: '#8E8E93',
          7: '#828385',
          8: '#565656',
        },
        primary: {
          green: {
            1: '#52B69A',
            2: '#E9F4EF',
            3: '#64736F',
            4: '#2AAB87',
          },
        },
        secondary: {
          orange: {
            1: '#F49C1B',
            2: '#FFC570',
            3: '#F8F0E4',
          },
        },
        system: {
          error: '#EA3E69',
          info: '#7EB803',
          success: '#3267DD',
        },
      },
      animation: {
        bounce1: 'bounce 2s ease-in-out infinite ',
        bounce2: 'bounce 2s 0.5s ease-in-out infinite ',
        bounce3: 'bounce 2s 1s ease-in-out infinite ',
        toast: 'toast 1s linear infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%': { transform: `translate(0,0)` },
          '50%': {
            transform: 'translateY(-150%)',
          },
          '85%, 100%': {
            transform: `translate(0,0)`,
          },
        },
        toast: {
          '0%': {
            transform: 'translateY(5%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
      screens: {
        web: '375px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
};
