const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = env => {
  return merge(base(env), {
    entry: {
      main: './src/main.js',
      mainWindow: './src/renderer/windows/mainWindow/index.jsx'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist')
    }
  });
};
