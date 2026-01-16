/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0e1525',
          black: '#000000',
          gold: '#aa772d',
          offwhite: '#F8FAFC',
          card: '#1a2332',
          success: '#10B981',
        },
      },
    },
  },
  plugins: [],
};
