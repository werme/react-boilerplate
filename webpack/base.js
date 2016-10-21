const path = require('path')

const JS_ROOT = path.resolve(__dirname, '../src')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: JS_ROOT },
      { test: /\.js$/, loader: 'eslint', include: JS_ROOT },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: []
}
