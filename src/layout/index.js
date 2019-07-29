import React from 'react'
import PropTypes from 'prop-types'
import TranslationChanger from './translation-changer'

export default function Layout ({ children }) {
  return (
    <div>
      <TranslationChanger />
      <div>
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
