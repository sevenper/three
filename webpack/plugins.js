const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cleanWebpackPlugin: new CleanWebpackPlugin(),
  htmlWebpackPlugin: new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '/public/index.html'),
  }),
};
