import React from 'react'
import PropTypes from 'prop-types'
import { I18nContext } from '/app/i18n-provider'
import { Link } from 'react-router5'

export default function LanguageLink ({ children, routeName, className, onClick }) {
  return (    
    <I18nContext.Consumer>
      {({ languageCode }) => (   
        <Link routeName={routeName} className={className} onClick={onClick} routeParams={{ lang: languageCode }}>{ children }</Link>
      )}
    </I18nContext.Consumer>
  )
}

LanguageLink.propTypes = {
  children: PropTypes.node,
  routeName: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}
