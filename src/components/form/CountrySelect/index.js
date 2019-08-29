import React from 'react'
import cc from 'classcat'
import * as PropTypes from 'prop-types'

import COUNTRIES_INDEX from '/constants/countries/index.json'
import COUNTRIES_ORDER_AR from '/constants/countries/order/ar.json'
import COUNTRIES_ORDER_EN from '/constants/countries/order/en.json'
import COUNTRIES_ORDER_KO from '/constants/countries/order/ko.json'
import COUNTRIES_ORDER_ZH from '/constants/countries/order/zh-hans.json'
import COUNTRY_NAMES_IN_ENGLISH from '/constants/countries/en.common.json'
import { LANGUAGE_CODES, DEFAULT_LANGUAGE_CODE } from '/data/languages'

import { withLanguageCode } from '../../withLanguageCode'

import style from './style.css'

const COUNTRIES_ORDER = {
  [LANGUAGE_CODES.EN]: COUNTRIES_ORDER_EN,
  [LANGUAGE_CODES.AR]: COUNTRIES_ORDER_AR,
  [LANGUAGE_CODES.KO]: COUNTRIES_ORDER_KO,
  [LANGUAGE_CODES.ZH]: COUNTRIES_ORDER_ZH,
}

function CountrySelect ({
  onChange,
  label,
  value,
  placeholder,
  className,
  isDisabled,
  isRequired,
  languageCode,
}) {
  const isWindowsSystem = navigator.appVersion.indexOf('Win') !== -1
  const countriesOrder = COUNTRIES_ORDER[languageCode]
  const getTitle = languageCode === LANGUAGE_CODES.EN
    ? (id) => COUNTRY_NAMES_IN_ENGLISH[`ref.country.${id}`]
    : (id) => COUNTRIES_INDEX[id].title

  return (
    <div className={cc([style.field, className])}>
      <select
        name='country'
        required={isRequired}
        disabled={isDisabled}
        className={style.input}
        onChange={onChange}
        defaultValue=''
      >
        <option value='' disabled>{placeholder}</option>
        {countriesOrder
          .map(id => (
            <option value={id} key={id}>
              {getTitle(id)}
            </option>
          ))
        }
      </select>
      <div className={style.toggle}>
        {value ? (
          <>
          {!isWindowsSystem && <span className={style.flag}>{COUNTRIES_INDEX[value].flag}</span> }
          <span className={style.name}>{getTitle(value)}</span>
          </>
        ) : (
          <span className={style.placeholder}>{placeholder}</span>
        )}
        <svg className={style.arrow} width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z' /></svg>
      </div>
      <p className={style.label}>{label}</p>
    </div>
  )
}

CountrySelect.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  languageCode: PropTypes.string.isRequired,
}

CountrySelect.defaultProps = {
  type: 'text',
  isDisabled: false,
  isRequired: false,
  languageCode: DEFAULT_LANGUAGE_CODE,
}

export default withLanguageCode(CountrySelect)
