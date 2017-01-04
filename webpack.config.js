const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './js'),
  entry: './board.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
