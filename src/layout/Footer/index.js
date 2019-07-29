import React from 'react'

import { Container } from '/components'

import style from './style.css'
import { 
  logoFooter,
  twitter,
  medium,
  linkedin,
  instagram 
} from '/assets/icons/'

function Footer() {
  return (
    <Container className={style.footer} tag='footer'>
      <div className={style.social}>
        <a href='#' className={style.link} target='_blank'><img src={twitter} alt='twitter'/></a>
        <a href='#' className={style.link} target='_blank'><img src={medium} alt='medium'/></a>
        <a href='#' className={style.link} target='_blank'><img src={linkedin} alt='linkedin'/></a>
        <a href='#' className={style.link} target='_blank'><img src={instagram} alt='instagram'/></a>
      </div>
      <div>
        <a className={style.logo}><img src={logoFooter} /></a>
        <div className={style.info}>Copyright © 2019 Jibrel Network. All rights reserved.</div>
      </div>
    </Container>
  )
}

export default React.memo(Footer)
