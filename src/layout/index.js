import React from 'react'
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
