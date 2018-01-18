const path = require('path');
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SplitEntryWebpackPlugin = require('./plugins/SplitEntryWebpackPlugin');

module.exports = env => {
  return {
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    resolve: {
      alias: {
        env: path.resolve(__dirname, `../config/env_${env}.json`)
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
          include: path.resolve(__dirname, '../src/renderer')
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'resolve-url-loader'},
            {loader: 'sass-loader'}
          ]
        }
      ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({ clearConsole: env === 'development' }),
      new SplitEntryWebpackPlugin()
    ]
  };
};
