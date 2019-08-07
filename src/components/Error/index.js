
import React from 'react'
import * as PropTypes from 'prop-types'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import Animation from '/components/Animation'
import { error } from '/components/Animation/animationLoaders'

import link from '/theme/link.css'
import title from '/theme/title.css'
import resultOfSending from '/theme/result-of-sending.css'
 
import picError from '/assets/img/pic_error_360.svg'

function Error({ onClick }) {
  const props = {
    onClick: onClick,
  }
  const i18n = useI18n()
  return ( 
    <section>
      <div className={resultOfSending.wrapper}>
        <h1 className={cc([title.title, title.offset])}>{i18n._('Subscribe.error.title')}</h1>
        <div className={resultOfSending.row}>
          <div className={resultOfSending.images}>
            <img src={picError} alt='' className={resultOfSending.img} />
            <Animation loadAnimation={error} className={resultOfSending.anim} isPlayed />
          </div>
          <div>
            <p className={resultOfSending.message}>{i18n._('Subscribe.error.message')}</p>
            <button className={link.link} {...props}>
              {i18n._('Subscribe.error.tryAgain')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

Error.propTypes = {
  onClick: PropTypes.func,
}

export default React.memo(Error)
