import React from 'react'
import cc from 'classcat'
import * as PropTypes from 'prop-types'

import COUNTRIES from '/constants/countries.json'

import style from './style.css'


export default function CountrySelect ({
  onChange,
  label,
  value,
  placeholder,
  className,
  isDisabled,
  isRequired,
}) {
  function setCountry(value) {
    const currentCountry = COUNTRIES.filter(country => country.id === value)
    
    return `${currentCountry[0].flag} ${currentCountry[0].title}`
  }
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
        {COUNTRIES.map(item => <option value={item.id} key={item.id}>{item.title}</option> )}
      </select>     
      <div className={style.toggle}>
        {value ? setCountry(value) : <span className={style.placeholder}>{placeholder}</span>}
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
}

CountrySelect.defaultProps = {
  type: 'text',
  isDisabled: false,
  isRequired: false,
}
