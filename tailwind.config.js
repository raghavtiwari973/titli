/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        titli: {
          lavender: '#D9DDF7',
          pink: '#F2B6C8',
          coral: '#F39A9E',
          peach: '#F7C9A5',
          yellow: '#F6D58A',
          aqua: '#A9DCD5',
          sky: '#AFC8EA',
          plum: '#743D61',
          'plum-deep': '#5B354F',
          gold: '#C59B68',
          'warm-white': '#FBFAFD',
          ivory: '#FAF6F0',
          'pink-soft': '#FBE4EC',
          'lavender-soft': '#EEF0FB',
          'peach-soft': '#FDEEE2',
          'aqua-soft': '#E6F4F1',
          charcoal: '#4B4650',
        },
      },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Inter', 'Manrope', 'DM Sans', 'system-ui', 'sans-serif'],
      display: ['Playfair Display', 'serif'],
    },
      backgroundImage: {
        'butterfly-gradient':
          'linear-gradient(90deg, #D9DDF7 0%, #F2B6C8 20%, #F7C9A5 40%, #F6D58A 60%, #A9DCD5 80%, #D9DDF7 100%)',
        'hero-wash':
          'linear-gradient(135deg, #EEF0FB 0%, #FBE4EC 35%, #FDEEE2 65%, #E6F4F1 100%)',
        'plum-gradient':
          'linear-gradient(135deg, #743D61 0%, #5B354F 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'wing-flap': {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(0.92)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'draw-line': 'draw-line 3s ease-in-out forwards',
        'wing-flap': 'wing-flap 4s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
};
