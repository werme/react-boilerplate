require('babel-register')

const env = process.env.NODE_ENV || 'development'

console.log('Compiling with environment set to [ ' + env + ' ]')

module.exports = require('./' + env)
