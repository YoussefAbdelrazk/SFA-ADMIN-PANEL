import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)', 'Cairo', 'Arial', 'Helvetica', 'sans-serif'],
        sans: ['var(--font-cairo)', 'Cairo', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
