/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        revolve: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'revolve': 'revolve 20s linear infinite',
      },
    },
  },
  plugins: [],
  layers: {
    utilities: ['@tailwindcss/utilities'],
  },
};
