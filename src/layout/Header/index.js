import React from 'react'
import cc from 'classcat'
import TranslationChanger from './TranslationChanger'
import LanguageLink from '/components/LanguageLink'

import style from './style.css'
import container from '/theme/container.css'

import { logoHeader } from '/assets/icons/'

function Header() {
  return (
    <header className={cc([style.header, container.container])}>
      <LanguageLink routeName='Home'>
        <img src={logoHeader} className={style.logo} />
      </LanguageLink>
      <TranslationChanger />
    </header>
  )
}

export default React.memo(Header)
