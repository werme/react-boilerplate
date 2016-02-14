const path = require('path')
const webpack = require('webpack')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const base = require('./webpack.config.base')

module.exports = Object.assign({}, base, {
  devtool: 'cheap-module-eval-source-map',
  entry: [ 'webpack-hot-middleware/client', ...base.entry ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new NyanProgressPlugin()
  ]
})
