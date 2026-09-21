/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07070f',
          900: '#0b0b18',
          850: '#0f0f20',
          800: '#131328',
          700: '#1a1a35',
          600: '#242448',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#6d28d9',
          glow: 'rgba(139, 92, 246, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(139, 92, 246, 0.15)',
        'glow-md': '0 0 40px rgba(139, 92, 246, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
