import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import '../css/main.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // With Webpack 2 and ES modules mode, you can just rerender `App` without
    // requiring it again.
    const NextApp = require('./App')
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElement
    )
  })
}
