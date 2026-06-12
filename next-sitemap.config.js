/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.choudhuryclinic.com',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/dental-services'),
    await config.transform(config, '/skin-care-services'),
    await config.transform(config, '/about'),
    await config.transform(config, '/gallery-reviews'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/contact'),
  ],
};
