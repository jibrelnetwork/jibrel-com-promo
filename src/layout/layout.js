import React from 'react'
import Header from './Header/Header.js'
import PropTypes from 'prop-types'

export default function Layout ({ children }) {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
