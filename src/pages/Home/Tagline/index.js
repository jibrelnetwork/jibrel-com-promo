
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'

import style from './style.css'
import title from '/theme/title.css'
import button from '/theme/button.css'
import container from '/theme/container.css'

function Tagline() {  
  const i18n = useI18n()
  return (  
    <section className={style.tagline}>
      <div className={container.container}>
        <h2 className={cc([title.title, title.center, title.white])}>
          {i18n._('Tagline.jibrel')}
          <br/>
          {i18n._('Tagline.message')}
        </h2>
        <a className={cc([button.button, button.white, button.large, style.button])}>{i18n._('Tagline.offer')}</a>
      </div>
    </section>
  )
}

export default React.memo(Tagline)
