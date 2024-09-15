/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'nx-',
  content: [
    "./theme.config.tsx",
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};