
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import { Trans } from '@lingui/react'
import { sendEventGTM } from '/utils/send-gtm'

import style from './style.css'
import title from '/theme/title.css'
import button from '/theme/button.css'
import container from '/theme/container.css'

function Tagline() {  
  const i18n = useI18n()
  function handledScroll() {
    const id = document.getElementById('offer')
    const offsetTop = id.offsetTop
    sendEventGTM('lead', 'goToUserType', 'footerButton')
    window.scrollTo({
      top: offsetTop - 30,
      behavior: 'smooth'
    })
  }
  return (  
    <section className={style.tagline}>
      <div className={container.container}>
        <Trans 
          render='h2' 
          className={cc([title.title, title.center, title.white])} 
          id='Home.tagline.title' 
          components={[<br/>]}
        />
        <button onClick={handledScroll} className={cc([button.button, button.white, button.large, style.button])}>
          {i18n._('Home.tagline.offer')}
        </button>
      </div>
    </section>
  )
}

export default React.memo(Tagline)
