
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import LanguageLink from '/components/LanguageLink'

import link from '/theme/link.css'
import title from '/theme/title.css'
import resultOfSending from '/theme/result-of-sending.css'
 
import picSuccess from '/assets/img/pic_hourglass_360.svg'

function Success() {
  const i18n = useI18n()
  return ( 
    <section>
      <div className={resultOfSending.wrapper}>
        <div>
          <h1 className={cc([title.title, title.offset])}>{i18n._('success.title')}</h1>
          <p className={resultOfSending.message}>{i18n._('success.message')}</p>
          <LanguageLink routeName='Home' className={link.link}>
            {i18n._('success.backToMain')}
          </LanguageLink>
        </div>
        <img src={picSuccess} alt='' className={resultOfSending.img} />
      </div>
    </section>
  )
}

export default React.memo(Success)
