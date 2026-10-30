module.exports = {
  // Input markdown file(s) or directory
  //inputDir: './files',
  
  // Output directory
  //output: './',
  
  // Default output format (pdf, html, pptx, png, jpeg)
  html: true,
  
  // Custom themes to register
  themeSet: [
    './themes/rose-pine-moon.css',
  ],
  
  // Enable watching file changes by default
  watch: false,
  
  // Allow local file access for images/resources
  allowLocalFiles: true,
  
  // Options for Marp Core / Markdown-It renderer
  options: {
    markdown: {
      breaks: true,
    },
  },
};