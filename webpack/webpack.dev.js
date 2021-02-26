const path = require('path');
const { merge } = require('webpack-merge');
const plugins = require('./plugins');
const commonConfig = require('./webpack.common');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  devServer: {
    port: 3003,
    hot: true,
    stats: 'errors-only',
  },
  plugins: [plugins.htmlWebpackPlugin],
};

module.exports = merge(commonConfig, config);
