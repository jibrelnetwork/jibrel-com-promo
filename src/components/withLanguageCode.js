import React from 'react'

import { I18nContext } from '/app/i18n-provider'

export const withLanguageCode = (Component) => function WithLanguageCode (props) {
  return (
    <I18nContext.Consumer>
      {
        ({ languageCode }) => (
          <Component {...props} languageCode={languageCode}/>
        )
      }
    </I18nContext.Consumer>
  )
}
