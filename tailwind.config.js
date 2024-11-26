/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ['30px'],
      base: ['40px'],
      lg: ['60px'],
      xl: ['70px'],
    },
    extend: {
      fontFamily: {
        anonymous: ["AnonymousPro", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'orange-main': '#EFBC5D',
        'orange-secondary': '#d7a953',
        'gray-main': '#D9D9D9',
        'gray-secondary': '#F1F1F1',
        'gray-third': '#3f3f3f'
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
