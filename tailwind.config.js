const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'hswhite': '#FFFFFF',
      'hsblack': '#000000',
      'hsgrey': '#333333',
      'hspurple': '#805DBE',  // primary color
      'hsbg': '#F6F4FA',      // background color
    }
  },
  fontFamily: {
    'hsfont': ['Montserrat', 'sans-serif'],
    'hscodefont': ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
  },
  plugins: [],
});