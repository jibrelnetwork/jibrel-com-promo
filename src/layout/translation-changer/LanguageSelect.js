import React from 'react'
import { map, noop } from 'lodash-es'
import PropTypes from 'prop-types'

import {
  LANGUAGES,
} from '../../data/languages'

export const LanguageSelect = ({
  defaultValue,
  onChange,
}) => {
  const onChangeSelect = (event) => onChange(event.target.value)

  return (
    <select
      onChange={onChangeSelect}
      defaultValue={defaultValue}
    >
      {map(LANGUAGES, (language, id) => (
        <option key={id} value={id}>{language.title}</option>
      ))}
    </select>
  )
}

LanguageSelect.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
}

LanguageSelect.defaultProps = {
  onChange: noop,
}
