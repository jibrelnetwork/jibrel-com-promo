
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import { Trans } from '@lingui/react'
import LanguageLink from '/components/LanguageLink'

import style from './style.css'
import title from '/theme/title.css'
import button from '/theme/button.css'
import container from '/theme/container.css'

function Tagline() {  
  const i18n = useI18n()
  return (  
    <section className={style.tagline}>
      <div className={container.container}>
        <Trans 
          render='h2' 
          className={cc([title.title, title.center, title.white])} 
          id='Home.tagline.title' 
          components={[<br/>]}
        />
        <LanguageLink routeName='#' className={cc([button.button, button.white, button.large, style.button])}>
          {i18n._('Home.tagline.offer')}
        </LanguageLink>
      </div>
    </section>
  )
}

export default React.memo(Tagline)
