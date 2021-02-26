const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom'],
  },
  // 这个是输出 dll 文件
  output: {
    path: path.resolve(__dirname, '../dist/dll'),
    filename: '[name].js',
    library: '[name]',
  },
  // 这个是输出映射表
  plugins: [
    new webpack.DllPlugin({
      name: '[name]', // name === output.library
      path: path.resolve(__dirname, '../dist/dll/[name].manifest.json'),
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
