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
        <a href='https://twitter.com/JibrelNetwork' className={style.link} target='_blank' rel='noopener noreferrer'><img src={twitter} alt='twitter'/></a>
        <a href='https://medium.com/@jibrelnetwork' className={style.link} target='_blank' rel='noopener noreferrer'><img src={medium} alt='medium'/></a>
        <a href='https://www.linkedin.com/company/jibrel-network/' className={style.link} target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='linkedin'/></a>
        <a href='https://www.instagram.com/jibrelnetwork/' className={style.link} target='_blank' rel='noopener noreferrer'><img src={instagram} alt='instagram'/></a>
      </div>
      <div>
        <a className={style.logo}><img src={logoFooter} /></a>
        <div className={style.info}>Copyright © 2019 Jibrel Network. All rights reserved.</div>
      </div>
    </Container>
  )
}

export default React.memo(Footer)
