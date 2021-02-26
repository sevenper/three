const webpack = require('webpack');
const path = require('path');
const plugins = require('./plugins');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',
  entry: './src/index.tsx',
  plugins: [
    plugins.cleanWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
    }),
    // new webpack.DllReferencePlugin({
    //   // 注意: DllReferencePlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败
    //   context: path.resolve(__dirname, '../'),
    //   manifest: path.resolve(__dirname, '../dist/dll/react.manifest.json'),
    // }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  // stats: 'errors-only',
};

module.exports = merge(commonConfig, config);
