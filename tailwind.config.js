/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
      colors: {
        'gradient-start': '#26B77D',
        'gradient-end': '#00B0A7',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #26B77D 0%, #00B0A7 100%)',
      },
    },
  },
  plugins: [],
}

