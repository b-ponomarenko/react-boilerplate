
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: require.resolve('babel-loader')
      }
    ]
  }
};