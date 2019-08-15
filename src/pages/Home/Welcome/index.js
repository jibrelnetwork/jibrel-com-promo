
import React, { useState } from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import { sendEventGTM } from '/utils/send-gtm'
import LanguageLink from '/components/LanguageLink'
import Animation from '/components/Animation'
import { founder, investor } from '/components/Animation/animationLoaders'

import { arrowRightWhite, arrowRightBlue } from '/assets/icons/'

import style from './style.css'
import title from '/theme/title.css'
import button from '/theme/button.css'
import container from '/theme/container.css'

import picInvestor from '/assets/img/pic_investor.svg'
import picFounder from '/assets/img/pic_founder.svg'
 
function Welcome() {
  const i18n = useI18n()
  const [animationName, setAnimationName] = useState(null)
  function handleClick(eventLabel) {
    sendEventGTM('lead', 'goToForm', eventLabel)   
  }
  return ( 
    <section className={cc([style.welcome, container.container])}>
      <h1 className={cc([title.title, title.blue, title.center])}>{i18n._('Home.welcome.title')}</h1>
      <p className={style.description}>{i18n._('Home.welcome.description')}</p>
      <p className={style.offer} id='offer'>{i18n._('Home.welcome.offer')}</p>
      <div className={style.cards}>
        <div className={style.card}
          onMouseEnter={() => setAnimationName('investor')}
          onMouseLeave={() => setAnimationName(null)}
        >
          <img src={picInvestor} alt='' className={style.img} />
          <Animation loadAnimation={investor} className={style.anim} isHovered={animationName === 'investor'} />
          <div className={style.text}>
            <div className={style.title}>{i18n._('Home.welcome.investor')}</div>
            <LanguageLink 
              routeName='SubscribeInvestor'
              className={cc([button.button, button.blue, button.normal, button.withIcon])}
              onClick={() => handleClick('investor')}
            >
              {i18n._('Home.welcome.signUp')}
              <img src={arrowRightWhite} className={button.icon} alt='' />
              <img src={arrowRightBlue} className={button.hoverIcon} alt='' />
            </LanguageLink>
          </div>
        </div> 
        <div 
          className={style.card}
          onMouseEnter={() => setAnimationName('founder')}
          onMouseLeave={() => setAnimationName(null)}
        >
          <img src={picFounder} alt='' className={style.img} />
          <Animation loadAnimation={founder} className={style.anim} isHovered={animationName === 'founder'} />
          <div className={style.text}>
            <div className={style.title}>{i18n._('Home.welcome.founder')}</div>
            <LanguageLink
              routeName='SubscribeFounder'
              className={cc([button.button, button.blue, button.normal, button.withIcon])}
              onClick={() => handleClick('founder')}
            >
              {i18n._('Home.welcome.signUp')}
              <img src={arrowRightWhite} className={button.icon} alt='' />
              <img src={arrowRightBlue} className={button.hoverIcon} alt='' />
            </LanguageLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Welcome)
