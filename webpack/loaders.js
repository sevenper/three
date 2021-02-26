const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.mode === 'production';

const tslLoader = { loader: 'ts-loader' };

const styleLoader = { loader: 'style-loader' };
const miniCssLoader = MiniCssExtractPlugin.loader;
const cssLoader = { loader: 'css-loader' };
const lessLoader = {
  loader: 'less-loader',
  options: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
};

const ts = {
  test: /\.(ts|tsx)$/,
  use: [tslLoader],
  exclude: /node_modules/,
};

const css = {
  test: /\.(c|le)ss$/,
  use: [isProd ? miniCssLoader : styleLoader, cssLoader, lessLoader],
  exclude: /node_modules/,
};

module.exports = {
  ts,
  css,
};
