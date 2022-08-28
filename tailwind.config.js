const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'hswhite': '#FFFFFF',
      'hsblack': '#000000',
      'hsgrey': '#333333',
      'hspurple': '#805DBE',  // primary color
      'hsbg': '#F6F4FA',      // background color
      'hsbeige': '#EDEDED',   // background color for dashboard table
      'hsblue': '#85C4E9'     // background color for profile icon
    }
  },
  fontFamily: {
    'sans': ['Montserrat', 'sans-serif'],
    'code': ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
  },
  plugins: [],
});