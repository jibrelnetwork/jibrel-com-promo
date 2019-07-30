import React from 'react'
import PropTypes from 'prop-types'
import { I18nContext } from '/app/i18n-provider'
import { Link } from 'react-router5'

export default function Layout ({ children, routeName, className }) {
  return (    
    <I18nContext.Consumer>
      {({ languageCode }) => (   
        <Link routeName={routeName} className={className} routeParams={{ lang: languageCode }}>{ children }</Link>
      )}
    </I18nContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  routeName: PropTypes.string,
  className: PropTypes.string,
}
