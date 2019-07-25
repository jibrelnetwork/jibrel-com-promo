import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const mountNode = document.getElementById('root')

if (mountNode) {
  ReactDOM.render(
    (
      <App />
    ),
    mountNode,
  )
}
