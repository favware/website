/* eslint-disable @typescript-eslint/no-var-requires */

const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { join } = require('path');

module.exports = {
  webpack: (config) => {
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
  distDir: '../../.next'
};
