const path = require('path');
const webpack = require('webpack');
const extensions = require('../consts/media');
const colors = require('../consts/colors');
const postCssCustomProperties = require('postcss-custom-properties')();

postCssCustomProperties.setVariables({ ...colors });

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../../src/index')
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              hmr: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-nested'),
                require('postcss-hexrgba'),
                require('postcss-custom-media')({ extensions }),
                postCssCustomProperties
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(true),
      'process.env.BABEL_ENV': JSON.stringify(true),
      'process.env.BROWSER': JSON.stringify(true),
      'process.env.SERVER': JSON.stringify(false),
    })
  ]
};