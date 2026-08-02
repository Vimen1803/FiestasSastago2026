/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0b1330',
          900: '#111d47',
          800: '#192a5e',
          700: '#233876',
          600: '#324a95',
        },
        gold: {
          400: '#f3bd3a',
          500: '#e8a91f',
        },
        coral: {
          400: '#f0766a',
          500: '#e2564a',
        },
        cream: {
          50: '#f7f4ec',
        },
        mist: {
          400: '#98a2cf',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'confetti': "radial-gradient(circle at 15% 20%, rgba(243,189,58,0.12) 0, transparent 45%), radial-gradient(circle at 85% 10%, rgba(240,118,106,0.14) 0, transparent 40%), radial-gradient(circle at 75% 85%, rgba(50,74,149,0.35) 0, transparent 50%)",
      },
    },
  },
  plugins: [],
};
