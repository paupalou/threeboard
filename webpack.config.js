module.exports = {
  entry: './js/board.js',
  output: {
    filename: '[name].js',
    path: './'
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
