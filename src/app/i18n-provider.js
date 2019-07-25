import React, { Component } from 'react'
import {
  I18nProvider as LinguiI18nProvider,
  I18n,
} from '@lingui/react'

import {
  DEFAULT_LANGUAGE_CODE,
  LANGUAGES,
} from '../data/languages'
import locales from '../locales'

export const I18nContext = React.createContext({
  languageCode: DEFAULT_LANGUAGE_CODE,
  changeLanguage: () => Promise.resolve(),
  i18n: {
    '_': () => ''
  },
})

export class I18nProvider extends Component {
  state = {
    languageCode: DEFAULT_LANGUAGE_CODE,
  }

  changeLanguage = async (languageCode) => new Promise(
    (resolve, reject) => {
      if (LANGUAGES[languageCode]) {
        this.setState({
          languageCode,
        }, () => {
          if (document) {
            document.dir = LANGUAGES[languageCode].dir
          }

          resolve()
        })
      } else {
        const error = new Error('LANGUAGE_NOT_AVAILABLE')
        error.props = {
          languageCode,
        }

        reject(error)
      }
    }
  )

  render () {
    const { languageCode } = this.state
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
                changeLanguage: this.changeLanguage,
                i18n,
              }}
            >
              {this.props.children}
            </I18nContext.Provider>
          )}
        </I18n>
      </LinguiI18nProvider>
    )
  }
}
