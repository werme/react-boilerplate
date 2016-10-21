const path = require('path')
const webpack = require('webpack')
const base = require('./base')

module.exports = {
  ...base,
  devtool: 'source-map',
  entry: './src/main',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js'
  },
  plugins: [
    ...base.plugins,
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
