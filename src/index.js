import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'
import { I18nProvider } from './app/i18n-provider'

import { router } from './app/router'
import Pages from './pages'

import '/assets/style/core.scss'

const mountNode = document.getElementById('root')

if (mountNode) {
  ReactDOM.render(
    (
      <RouterProvider router={router}>
        <I18nProvider>
          <Pages />
        </I18nProvider>
      </RouterProvider>
    ),
    mountNode,
  )
}
