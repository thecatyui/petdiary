/** @type {import('next').NextConfig} */

const StylelintPlugin = require('stylelint-webpack-plugin'); // line to add
const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/_variables.scss"; @import "@/styles/_mixins.scss"; @import "@/styles/_colors.scss"; @import "@/styles/_reset.scss";`,
  },
  i18n,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // Proxy to Backend
      },
    ];
  },
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    config.module.rules.push(
      {
        test: /\.svg/,
        use: {
          loader: '@svgr/webpack',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            publicPath: '/_next/static',
            outputPath: 'static',
            emitFile: !options.isServer,
          },
        },
      },
    );
    return config;
  },
};

module.exports = nextConfig;
