/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9F9',
          100: '#D9EEEE',
          200: '#B3DEDE',
          300: '#80C7C7',
          400: '#33A3A3',
          500: '#008080',
          600: '#006666', // Primary Brand Color (#006666)
          700: '#005252',
          800: '#003D3D',
          900: '#002929',
          950: '#001A1A',
        },
        navy: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A', // Deep Trust Navy
          950: '#090D16',
        },
        accent: {
          cyan: '#06B6D4',
          blue: '#0284C7',
          emerald: '#10B981',
          amber: '#F59E0B',
          gold: '#EAB308',
          rose: '#F43F5E'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Sora', 'system-ui', 'sans-serif'],
        bengali: ['Hind Siliguri', 'Noto Sans Bengali', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.08)',
        'glow': '0 0 25px -5px rgba(13, 148, 136, 0.3)',
        'glow-lg': '0 0 45px -5px rgba(13, 148, 136, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
