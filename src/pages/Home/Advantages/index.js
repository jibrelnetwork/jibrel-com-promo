
import React, { useState } from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import Animation from '/components/Animation'

import style from './style.css'
import title from '/theme/title.css'
import container from '/theme/container.css'

import picPlanet from '/assets/img/pic_planet_360.svg'
import picTransparency from '/assets/img/pic_transparency_360.svg'
import picRadar from '/assets/img/pic_radar_360.svg'

function Advantages() {
  const i18n = useI18n()
  const [animationName, setAnimationName] = useState(null)


  return (
    <section className={style.advantages}>
      <div className={container.container}>
        <h2 className={cc([title.title, title.center, title.offset])}>{i18n._('Home.advantages.title')}</h2>
        <div className={style.cards}>
          <div
            className={style.card}
            onMouseEnter={() => setAnimationName('planet')} 
            onMouseLeave={() => setAnimationName(null)}
          >
            <img src={picPlanet} className={style.img} alt=''/>
            <Animation animationName='planet' className={style.anim} isPlayed={animationName === 'planet'} />
            <div className={style.body}>
              <div className={style.title}>{i18n._('Home.advantages.markets.title')}</div>
              <p className={style.description}>{i18n._('Home.advantages.markets.description')}</p>
              {animationName === 'planet'}
            </div>
          </div> 
          <div
            className={style.card}
            onMouseEnter={() => setAnimationName('tranparency')} 
            onMouseLeave={() => setAnimationName(null)}
          >
            <img src={picTransparency} className={style.img} alt=''/>
            <Animation animationName='tranparency' className={style.anim} isPlayed={animationName === 'tranparency'} />
            <div className={style.body}>
              <div className={style.title}>{i18n._('Home.advantages.transparency.title')}</div>
              <p className={style.description}>{i18n._('Home.advantages.transparency.description')}</p>
            </div>
          </div>
          <div
            className={style.card}
            onMouseEnter={() => setAnimationName('radar')} 
            onMouseLeave={() => setAnimationName(null)}
          >
            <img src={picRadar} className={style.img} alt=''/>
            <Animation animationName='radar' className={style.anim} isPlayed={animationName === 'radar'} />
            <div className={style.body}>
              <div className={style.title}>{i18n._('Home.advantages.reach.title')}</div>
              <p className={style.description}>{i18n._('Home.advantages.reach.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Advantages)
