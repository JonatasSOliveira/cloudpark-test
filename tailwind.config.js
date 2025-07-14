/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        primaryLight: '#4DA6FF',
        primaryDark: '#192834',
        success: '#00CC66',
        textPrimary: '#333333',
        textSecondary: '#666666',
        grayBg: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
