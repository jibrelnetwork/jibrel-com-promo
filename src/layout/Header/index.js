import React from 'react'
import TranslationChanger from './TranslationChanger'

import { Container } from '/components'

import style from './style.css'
import { logoHeader } from '/assets/icons/'

function Header() {
  return (
    <Container className={style.header} tag='header'>
      <a><img src={logoHeader} className={style.logo} /></a>
      <TranslationChanger />
    </Container>
  )
}

export default React.memo(Header)
