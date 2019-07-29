import React from 'react'
import ReactDOM from 'react-dom'
import { I18nProvider } from './app/i18n-provider'

import App from './app'

const mountNode = document.getElementById('root')

if (mountNode) {
  ReactDOM.render(
    (
      <I18nProvider >
        <App />
      </I18nProvider>
    ),
    mountNode,
  )
}
