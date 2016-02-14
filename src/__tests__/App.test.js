import React from 'react'
import test from 'ava'
import { renderToStaticMarkup } from 'react-dom/server'
import App from '../App'

test('It greets the world', t => {
  const element = React.createElement(App, {
    greeting: '안영'
  })

  const output = renderToStaticMarkup(element)

  t.ok(output.includes('안영 World'),
    'the greeting is included in the output')
})
