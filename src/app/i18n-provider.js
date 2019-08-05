import React from 'react'
import PropTypes from 'prop-types'
import {
  I18nProvider as LinguiI18nProvider,
  I18n,
} from '@lingui/react'
import { useRouteNode } from 'react-router5'

import {
  DEFAULT_LANGUAGE_CODE,
  LANGUAGES,
} from '../data/languages'
import locales from '../locales'

export const I18nContext = React.createContext({
  languageCode: DEFAULT_LANGUAGE_CODE,
  i18n: {
    '_': () => ''
  },
})

export const I18nProvider = ({ children }) => {
  const { route } = useRouteNode('')
  const { lang: languageCode } = route.params

  const language = LANGUAGES[languageCode].tag

  return (
    <LinguiI18nProvider
      language={language}
      catalogs={locales}
      missing='⚠️'
    >
      <I18n>
        {({ i18n }) => (
          <I18nContext.Provider
            value={{
              languageCode,
              i18n,
            }}
          >
            {children}
          </I18nContext.Provider>
        )}
      </I18n>
    </LinguiI18nProvider>
  )
}

I18nProvider.propTypes = {
  children: PropTypes.node,
}
