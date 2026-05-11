import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        laje: {
          950: '#0A0A0A',
          900: '#141414',
          800: '#1F1F1F',
          700: '#2E2E2E',
          600: '#4A4A4A',
        },
        prata: {
          700: '#555452',
          500: '#B5B3B2',
          300: '#D4D2D0',
          200: '#E0DEDB',
          100: '#ECEAE6',
        },
        creme: {
          50: '#EFEAE0',
          25: '#F5F1E8',
        },
        papel: '#FAF7F0',
        brasa: {
          100: '#FFE0CF',
          300: '#FFAA82',
          500: '#F4571A',
          600: '#D9430A',
          700: '#A93305',
        },
        lima: {
          100: '#F1FBC0',
          300: '#DEF577',
          500: '#CCEC2A',
          700: '#8AAF10',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '2xl': '28px',
        '3xl': '36px',
      },
      boxShadow: {
        card: '0 8px 24px -8px rgba(27, 23, 20, 0.12), 0 2px 6px -2px rgba(27, 23, 20, 0.06)',
        cover: '0 24px 60px -16px rgba(27, 23, 20, 0.35)',
        pop: '0 16px 40px -12px rgba(27, 23, 20, 0.22), 0 4px 12px -4px rgba(27, 23, 20, 0.10)',
      },
      backgroundImage: {
        holo: 'linear-gradient(115deg, #FFB6E1 0%, #C7B8FF 22%, #A6E8FF 42%, #C9F2D6 58%, #FFE3B0 78%, #FFB6E1 100%)',
        'holo-soft': 'linear-gradient(115deg, #FFD9EE 0%, #DCD2FF 25%, #C9EEFF 50%, #DCF6DF 75%, #FFE9CB 100%)',
      },
    },
  },
  plugins: [forms],
};

export default config;
