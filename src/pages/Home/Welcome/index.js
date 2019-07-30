
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'

import { arrowRightWhite, arrowRightBlue } from '/assets/icons/'

import style from './style.css'
import title from '/theme/title.css'
import button from '/theme/button.css'
import container from '/theme/container.css'

import picInvestor from '/assets/img/pic_investor.svg'
import picFounder from '/assets/img/pic_founder.svg'
 
function Welcome() {
  const i18n = useI18n()
  return ( 
    <section className={cc([style.welcome, container.container])}>
      <h1 className={cc([title.title, title.blue, title.center])}>{i18n._('Welcome.title')}</h1>
      <p className={style.descr}>{i18n._('Welcome.descr')}</p>
      <p className={style.offer}>{i18n._('Welcome.offer')}</p>
      <div className={style.cards}>
        <div className={style.card}>
          <img src={picInvestor} alt='' className={style.img} />
          <div className={style.text}>
            <div className={style.title}>{i18n._('LeadTile.investor')}</div>
            <a className={cc([button.button, button.blue, button.normal])}>
              {i18n._('LeadTile.signUp')}
              <img src={arrowRightWhite} className={button.icon} alt='' />
              <img src={arrowRightBlue} className={button.hoverIcon} alt='' />
            </a>
          </div>
        </div> 
        <div className={style.card}>
          <img src={picFounder} alt='' className={style.img} />
          <div className={style.text}>
            <div className={style.title}>{i18n._('LeadTile.founder')}</div>
            <a className={cc([button.button, button.blue, button.normal])}>
              {i18n._('LeadTile.signUp')}
              <img src={arrowRightWhite} className={button.icon} alt='' />
              <img src={arrowRightBlue} className={button.hoverIcon} alt='' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Welcome)
