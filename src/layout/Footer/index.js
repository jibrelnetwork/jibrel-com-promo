import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'

import style from './style.css'
import container from '/theme/container.css'

import { 
  logoFooter,
  twitter,
  medium,
  linkedin,
  instagram 
} from '/assets/icons/'

function Footer() {
  const i18n = useI18n()
  return (
    <footer className={cc([style.footer, container.container])}>
      <div className={style.social}>
        <a href='https://twitter.com/JibrelNetwork' className={style.link} target='_blank' rel='noopener noreferrer'><img src={twitter} alt='twitter'/></a>
        <a href='https://medium.com/@jibrelnetwork' className={style.link} target='_blank' rel='noopener noreferrer'><img src={medium} alt='medium'/></a>
        <a href='https://www.linkedin.com/company/jibrel-network/' className={style.link} target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='linkedin'/></a>
        <a href='https://www.instagram.com/jibrelnetwork/' className={style.link} target='_blank' rel='noopener noreferrer'><img src={instagram} alt='instagram'/></a>
      </div>
      <div>
        <a className={style.logo}><img src={logoFooter} /></a>
        <div className={style.info}>{i18n._('Layout.copyright')}</div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
