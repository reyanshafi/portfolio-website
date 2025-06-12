/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reyannshafi.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 7000,              // split if you have tons of pages
  changefreq: 'daily',
  priority: 0.7,
};
