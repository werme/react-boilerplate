import React from 'react'
import test from 'ava'
import { renderToStaticMarkup } from 'react-dom/server'
import App from '../App'

test('App', t => {

  const output = renderToStaticMarkup(<App greeting="안영" />)

  t.true(output.includes('안영'),
    'the passed greeting is included in the output')
})
