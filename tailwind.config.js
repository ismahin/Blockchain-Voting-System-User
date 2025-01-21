/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',    // Indigo
        secondary: '#EC4899',  // Pink
      },
    },
  },
  plugins: [],
};
