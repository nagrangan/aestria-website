/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Instrument Serif', 'serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      colors: {
        pastel: {
          pink: '#F8BBD9',
          lavender: '#E4C1F9',
          mint: '#C7CEEA',
          peach: '#FFB5A7',
          cream: '#FDF2F8',
          sage: '#B8E6B8',
          sky: '#A8DADC',
          butter: '#F1E3B1',
        },
        luxury: {
          gold: '#D4AF37',
          champagne: '#F7E7CE',
          pearl: '#F8F6F0',
          charcoal: '#36454F',
          graphite: '#41424C',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
