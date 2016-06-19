import path from 'path'
import webpack from 'webpack'
import base from './base'

export default {
  ...base,
  devtool: 'source-map',
  entry: './src/main',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js'
  },
  plugins: [
    ...base.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
