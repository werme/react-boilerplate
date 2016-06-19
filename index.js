require('babel-register')

// Use Webpack's dev server in development to enable hot reloading
const server = process.env.NODE_ENV === 'production' ?
  require('./server') :
  require('./webpack/server')

const port = process.env.PORT || 9000

server.listen(port, () =>
  console.log(`Server listening at port ${port}`)
)
