
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'

import style from './style.css'
import title from '/theme/title.css'
import container from '/theme/container.css'

import picDoor from '/assets/img/pic_door.svg'
import picSunrise from '/assets/img/pic_sunrise.svg'
import picButton from '/assets/img/pic_button.svg'
import picStairs from '/assets/img/pic_stairs.svg'

function WhatsForYou() {  
  const i18n = useI18n()
  return (  
    <section className={cc([style.whatsForYou, container.container])}>
      <h2 className={cc([title.title, title.center, title.offset])}>{i18n._('WhatsForYou.title')}</h2>
      <div className={style.card}>
        <div className={style.text}>
          <h2 className={style.title}>{i18n._('WhatsForYou.card_1.title')}</h2>
          <p className={style.descr}>{i18n._('WhatsForYou.card_1.descr')}</p>
        </div> 
        <img src={picDoor} className={style.img} alt=''/> 
      </div>  
      <div className={style.card}>
        <div className={style.text}>
          <h2 className={style.title}>{i18n._('WhatsForYou.card_2.title')}</h2>
          <p className={style.descr}>{i18n._('WhatsForYou.card_2.descr')}</p>
        </div>
        <img src={picSunrise} className={style.img} alt=''/>
      </div> 
      <div className={style.card}>
        <div className={style.text}> 
          <h2 className={style.title}>{i18n._('WhatsForYou.card_3.title')}</h2>
          <p className={style.descr}>{i18n._('WhatsForYou.card_3.descr')}</p>
        </div>
        <img src={picButton} className={style.img} alt=''/>
      </div> 
      <div className={style.card}>
        <div className={style.text}>
          <h2 className={style.title}>{i18n._('WhatsForYou.card_4.title')}</h2>
          <p className={style.descr}>{i18n._('WhatsForYou.card_4.descr')}</p>
        </div>
        <img src={picStairs} className={style.img} alt=''/>
      </div> 
    </section>
  )
}

export default React.memo(WhatsForYou)
