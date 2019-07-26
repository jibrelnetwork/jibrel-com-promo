import React from 'react'
import Header from './Header/Header.js'

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
