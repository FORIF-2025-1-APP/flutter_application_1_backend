import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Pretendard", "var(--font-sans)"],
    },
    extend: {
      backgroundColor: {
        'gray-100': '#f3f4f6',
      },
    },
  },
  plugins: [],
};

export default config; 