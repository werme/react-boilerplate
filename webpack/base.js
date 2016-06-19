import path from 'path'
import NyanProgressPlugin from 'nyan-progress-webpack-plugin'

const JS_ROOT = path.resolve(__dirname, '../src')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: JS_ROOT },
      { test: /\.js$/, loader: 'eslint', include: JS_ROOT },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new NyanProgressPlugin()
  ]
}
