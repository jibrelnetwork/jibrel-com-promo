import React from 'react'
import cc from 'classcat'
import TranslationChanger from './TranslationChanger'


import style from './style.css'
import container from '/theme/container.css'

import { logoHeader } from '/assets/icons/'

function Header() {
  return (
    <header className={cc([style.header, container.container])}>
      <a><img src={logoHeader} className={style.logo} /></a>
      <TranslationChanger />
    </header>
  )
}

export default React.memo(Header)
