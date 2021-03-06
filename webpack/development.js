const path = require('path')
const webpack = require('webpack')
const base = require('./base')

module.exports = {
  ...base,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${process.env.PORT || 9000}`,
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    ...base.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
