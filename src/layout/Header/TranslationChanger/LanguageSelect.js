import React from 'react'
import { map } from 'lodash-es'
import {
  LANGUAGES,
} from '/data/languages'

import style from './LanguageSelect.scss'
import { arrowDown } from '/assets/icons/'

export const LanguageSelect = ({
  defaultValue,
  onChange,
}) => {
  const onChangeSelect = (event) => onChange(event.target.value)

  return (
    <div className={style.languages}>
      <button type='button' className={style.toggle}> 
        <span className={style.lang}>{ LANGUAGES[defaultValue].title }</span>
        <span className={style.shortLang}>{ LANGUAGES[defaultValue].shorthand }</span>
        <img src={arrowDown} className={style.arrow} />
      </button>      
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
