import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0F6C5C', dark: '#0B5246', light: '#E6F2F0' },
      },
    },
  },
  plugins: [],
};
export default config;
