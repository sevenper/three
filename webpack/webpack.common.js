const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:6].bundle.js',
    chunkFilename: '[name].[contenthash:6].bundle.js',
  },
  module: {
    rules: [loaders.ts, loaders.css],
  },
  plugins: [plugins.htmlWebpackPlugin, new FriendlyErrorsWebpackPlugin()],
};
