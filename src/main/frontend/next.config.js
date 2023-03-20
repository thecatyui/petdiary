/** @type {import('next').NextConfig} */

// const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  //   prependData: `@import "@/styles/_variables.scss"; @import "@/styles/_mixins.scss"; @import "@/styles/_colors.scss";`,
  // },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // Proxy to Backend
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      use: {
        loader: 'svg-url-loader',
      },
    });
    config.module.rules.push({
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
    });
    return config;
  },
};

module.exports = nextConfig;
