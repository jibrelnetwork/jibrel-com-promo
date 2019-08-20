
import React from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'

import style from './style.css'
import title from '/theme/title.css'
import container from '/theme/container.css'

import picDoor from '/assets/img/pic_door.svg'
import picSunrise from '/assets/img/pic_sunrise.svg'
import picDocs from '/assets/img/pic_docs.svg'
import picStairs from '/assets/img/pic_stairs.svg'

function WhatsForYou() {  
  const i18n = useI18n()
  return (  
    <section className={cc([style.whatsForYou, container.container])}>
      <h2 className={cc([title.title, title.center, title.offset])}>{i18n._('Home.whatsForYou.title')}</h2>
      <div className={style.card}>
        <div className={style.text}>
          <h2 className={style.title}>{i18n._('Home.whatsForYou.globalLiquidity.title')}</h2>
          <p className={style.description}>{i18n._('Home.whatsForYou.globalLiquidity.description')}</p>
        </div> 
        <div className={style.imgBox}><img src={picDoor} className={style.img} alt=''/> </div>
      </div>  
      <div className={style.card}>
        <div className={style.text}>
          <h2 className={style.title}>{i18n._('Home.whatsForYou.getInEarly.title')}</h2>
          <p className={style.description}>{i18n._('Home.whatsForYou.getInEarly.description')}</p>
        </div>
        <div className={style.imgBox}><img src={picSunrise} className={style.img} alt=''/></div>
      </div> 
      <div className={style.card}>
        <div className={style.text}> 
          <h2 className={style.title}>{i18n._('Home.whatsForYou.secureSimpleFast.title')}</h2>
          <p className={style.description}>{i18n._('Home.whatsForYou.secureSimpleFast.description')}</p>
        </div>
        <div className={style.imgBox}><img src={picDocs} className={style.img} alt=''/></div>
      </div> 
      <div className={style.card}>
        <div className={style.text}>
          <h2 className={style.title}>{i18n._('Home.whatsForYou.experience.title')}</h2>
          <p className={style.description}>{i18n._('Home.whatsForYou.experience.description')}</p>
        </div>
        <div className={style.imgBox}><img src={picStairs} className={style.img} alt=''/></div>
      </div> 
    </section>
  )
}

export default React.memo(WhatsForYou)
