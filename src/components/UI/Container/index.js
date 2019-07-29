import React from 'react'
import cc from 'classcat'
import * as PropTypes from 'prop-types'

import style from './style.css'

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType,
}

function Container({ children, className, tag: Tag }) {
  return (
    <Tag className={cc([style.container, className])}>
      {children}
    </Tag>
  )
}

Container.defaultProps = {
  tag: 'div',
}

export default React.memo(Container)
