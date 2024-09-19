module.exports = {
  content: [
    './*.html', // Point to all HTML files in the root
    './**/*.html', // If HTML files are nested in subfolders
    './*.js', // If you have JavaScript files containing utility classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
