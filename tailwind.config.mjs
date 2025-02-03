/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
