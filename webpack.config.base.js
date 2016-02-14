const path = require('path')
const webpack = require('webpack')

const JS_ROOT = path.join(__dirname, 'src')

module.exports = {
  entry: [ 'babel-polyfill', './src/main' ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js?[hash]',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: JS_ROOT },
      { test: /\.js$/, loader: 'eslint', include: JS_ROOT },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  }
}
