import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import '../css/main.css'

const render = () =>
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )

render()

// Run `render` whenever './App' is updated
if (module.hot)
  module.hot.accept('./App', render)
