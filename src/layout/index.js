import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

import 'normalize.css'
import '/theme/base.css'
import style from './style.css'

export default function Layout ({ children }) {
  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
