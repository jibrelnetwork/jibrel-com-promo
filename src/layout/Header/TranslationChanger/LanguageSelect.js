import React from 'react'
import cc from 'classcat'
import { map, noop } from 'lodash-es'
import { sendEventGTM } from '/utils/send-gtm'
import PropTypes from 'prop-types'

import {
  LANGUAGES,
} from '/data/languages'

import style from './style.css'
import button from '/theme/button.css'
import { arrowDown } from '/assets/icons/'

export const LanguageSelect = ({
  defaultValue,
  onChange,
}) => {
  const onChangeSelect = (event) => {
    sendEventGTM('settings', 'changeLang', event.target.value)
    onChange(event.target.value)
  }

  return (
    <div className={cc([button.button, button.lightBlue, button.normal, button.withIcon, style.languages])}>
      <div className={style.toggle}> 
        <span className={style.lang}>{ LANGUAGES[defaultValue].title }</span>
        <span className={style.shortLang}>{ LANGUAGES[defaultValue].shorthand }</span>
        <img src={arrowDown} className={button.icon} />
      </div>      
      <select
        onChange={onChangeSelect}
        defaultValue={defaultValue}
        className={style.select}
      >
        {map(LANGUAGES, (language, id) => (
          <option key={id} value={id}>{language.title}</option>
        ))}
      </select>
    </div> 
  )
}

LanguageSelect.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
}

LanguageSelect.defaultProps = {
  onChange: noop,
}
