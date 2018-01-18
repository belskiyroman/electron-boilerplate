const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = class SplitEntryWebpackPlugin {

  apply (compiler) {
    Object.keys(compiler.options.entry).forEach((entryKey) => compiler.apply(
      new HtmlWebpackPlugin({
        filename: entryKey + '.html',
        chunks: [entryKey]
      })
    ));
  }

};
