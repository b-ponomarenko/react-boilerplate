import { renderApp } from './template';


const webpack = require('webpack');
const compression = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./client/webpack.config.dev');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

process.env.BROWSER = 'false';
process.env.SERVER = 'true';
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(devMiddleware(compiler, {
  filename: "bundle.js",
  publicPath: "/",
  stats: {
    colors: true
  },
  historyApiFallback: true
}));
app.use(hotMiddleware(compiler));

app.get('*', (req, res) => renderApp(req, res));

app.listen(PORT, () => console.log(`🎉🎉🎉 App listening on port ${PORT}!`));