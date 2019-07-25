import React from 'react'

import { I18nContext } from '../../app/i18n-provider'

import { LanguageSelect } from './LanguageSelect'

export default function TranslationChanger () {
  return (
    <I18nContext.Consumer>
      {
        ({
          languageCode,
          changeLanguage,
        }) => (
          <LanguageSelect
            defaultValue={languageCode}
            onChange={changeLanguage}
          />
        )
      }
    </I18nContext.Consumer>
  )
}
