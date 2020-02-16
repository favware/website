/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars */

const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSCSS = require('@zeit/next-sass');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { join } = require('path');

module.exports = withPlugins([[withCSS], [withSCSS]], {
  webpack: (config, _) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(
        new TsConfigPathsPlugin({
          configFile: join(__dirname, 'tsconfig.json')
        })
      );
    } else {
      config.resolve.plugins = [
        new TsConfigPathsPlugin({
          configFile: join(__dirname, 'tsconfig.json')
        })
      ];
    }

    return config;
  },
  distDir: '../../dist/functions/next'
});
