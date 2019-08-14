import React from 'react'
import * as PropTypes from 'prop-types'

import style from './style.css'

const UserType = ({
  onChange,
  value,
  title,
  description,
  className,
  img,
  isChecked,
  isDisabled
}) => {

  return (
    <label className={className}>
      <input
        name='user_type'
        type='radio'
        value={value}
        className={style.radioField}
        required
        disabled={isDisabled}
        checked={isChecked}
        onChange={ onChange }
      />
      <div className={style.radioBox}>
        {img}
        <p className={style.radioTitle}>{title}</p>
        <p className={style.radioDescription}>{description}</p>
      </div>
    </label>   
  )
}

UserType.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  img: PropTypes.node,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

UserType.defaultProps = {
  isChecked: false,
  isDisabled: false,
}

export default UserType
