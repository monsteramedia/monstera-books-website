/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#222222',
        darkGrey: '#1A1A1A',
        grey:'#585E70',
        salmon: '#F0776E',
        green: '#0E3C3C',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
