import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './'

export default new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
})
