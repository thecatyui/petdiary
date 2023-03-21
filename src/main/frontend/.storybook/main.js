const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.plugins.push(new StylelintPlugin());
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
              },
              url: false,
            },
          },
          'sass-loader',
        ],
        include: path.resolve(__dirname, './'),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };
    config.resolve.extensions.push('.ts', '.tsx', 'scss');
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    return config;
  },
  images: {
    disableStaticImages: true,
  },
};
