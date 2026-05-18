/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2F5C',
          light: '#154175',
          dark: '#061C38',
        },
        accent: {
          DEFAULT: '#00C4B4',
          light: '#1CE6D5',
          dark: '#009B8E',
        },
        highlight: {
          DEFAULT: '#F4A900',
          light: '#FFC033',
          dark: '#B87F00',
        },
        'bg-light': '#F8FAFB',
        'text-dark': '#1A1A2E',
      },
      fontFamily: {
        display: ['"Playfair Display"', '"DM Serif Display"', 'serif'],
        sans: ['"Inter"', '"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'premium': '0 8px 30px rgb(10 47 92 / 0.04)',
        'premium-hover': '0 20px 40px rgb(10 47 92 / 0.08)',
        'glass': '0 8px 32px 0 rgba(10, 47, 92, 0.05)',
      }
    },
  },
  plugins: [],
}
