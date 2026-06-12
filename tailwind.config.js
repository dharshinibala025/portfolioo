/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: 'var(--bg-primary)',
          800: 'var(--bg-tertiary)',
          700: 'var(--bg-secondary)',
        },
        accent: {
          500: 'var(--accent)',
          400: 'var(--accent-light)',
          300: 'var(--accent-dark)',
          200: 'var(--accent-light)',
          600: 'var(--accent-dark)',
        },
        muted: 'var(--text-secondary)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        borderTheme: 'var(--border)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(176, 141, 87, 0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(15px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-10px, 10px) scale(0.95)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};







