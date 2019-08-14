import React from 'react'
import cc from 'classcat'
import * as PropTypes from 'prop-types'

import style from './style.css'

const Input = ({
  onChange,
  type,
  name,
  label,
  className,
  isDisabled,
  isRequired,
}) => {

  return (
    <label className={cc([style.field, className])}>
      <input
        name={name}
        type={type}
        required={isRequired}
        className={style.input}
        disabled={isDisabled}
        onChange={onChange}
      />
      <p className={style.label}>{label}</p>
    </label> 
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  isDisabled: false,
  isRequired: false,
}

export default Input
