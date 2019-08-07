
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import LanguageLink from '/components/LanguageLink'
import Animation from '/components/Animation'
import { hourglass } from '/components/Animation/animationLoaders'

import link from '/theme/link.css'
import title from '/theme/title.css'
import resultOfSending from '/theme/result-of-sending.css'
 
import picSuccess from '/assets/img/pic_hourglass_360.svg'

function Success() {
  const i18n = useI18n()
  return ( 
    <section>
      <div className={resultOfSending.wrapper}>
        <h1 className={cc([title.title, resultOfSending.titleOffset])}>{i18n._('Subscribe.success.title')}</h1>
        <div className={resultOfSending.row}>
          <div className={resultOfSending.images}>
            <img src={picSuccess} alt='' className={resultOfSending.img} />
            <Animation loadAnimation={hourglass} className={resultOfSending.anim} isPlayed />
          </div>
          <div>
            <p className={resultOfSending.message}>{i18n._('Subscribe.success.message')}</p>
            <LanguageLink routeName='Home' className={link.link}>
              {i18n._('Subscribe.success.backToMain')}
            </LanguageLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Success)
