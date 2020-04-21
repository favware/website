/* eslint-disable @typescript-eslint/no-var-requires */
const sitemap = require('nextjs-sitemap-generator');
const { resolve } = require('path');

sitemap({
  baseUrl: 'https://favware.tech',
  pagesDirectory: resolve(__dirname, '..', 'src', 'app', 'pages'),
  targetDirectory: resolve(__dirname, '..', 'src', 'app', 'public'),
  nextConfigPath: resolve(__dirname, '..', 'src', 'app', 'next.config.js')
});
