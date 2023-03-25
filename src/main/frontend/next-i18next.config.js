module.exports = {
  i18n: {
    locales: ['en', 'ja', 'kr'],
    defaultLocale: 'ja',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en',
        // other locales that should be handled on this domain
        locales: ['en'],
      },
      {
        domain: 'example.nl',
        defaultLocale: 'nl-NL',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
    ],
  },
};
