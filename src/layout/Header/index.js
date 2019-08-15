import React from 'react'
import cc from 'classcat'

import TranslationChanger from './TranslationChanger'
import Logo from '/components/Logo'

import style from './style.css'
import container from '/theme/container.css'

import { logoHeader } from '/assets/icons/'

function Header() {
  return (
    <header className={cc([style.header, container.container])}>
      <Logo img={logoHeader} className={style.logo} />
      <TranslationChanger />
    </header>
  )
}

export default React.memo(Header)
