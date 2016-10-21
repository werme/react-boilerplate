const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./')

module.exports = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
})
