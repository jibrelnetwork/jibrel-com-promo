import React from 'react'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
