
import React from 'react'
import PropTypes from 'prop-types'
import { router } from '/app/router'
import LanguageLink from '/components/LanguageLink'

export default function Logo ({ className, img }) {
  const currentRouteName = router.getState().name
  return (   
    <> 
    {currentRouteName !== 'Home' ? (
      <LanguageLink routeName='Home'>
        <img src={img} className={className} />
      </LanguageLink>
    ) : (
      <img src={img} className={className} />
    )}
    </>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
}
