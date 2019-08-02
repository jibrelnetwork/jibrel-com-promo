import React from 'react'

import { I18nContext } from '/app/i18n-provider'

import { LanguageSelect } from './LanguageSelect'
import { useRouter } from 'react-router5'

export default function TranslationChanger () {
  const router = useRouter()
  const navigateToSamePageDifferentLanguage = (lang) => {
    const state = router.getState()
    router.navigate(state.name, {
      ...state.params,
      lang,
    })
  }

  return (
    <I18nContext.Consumer>
      {
        ({
          languageCode,
        }) => (
          <LanguageSelect
            defaultValue={languageCode}
            onChange={navigateToSamePageDifferentLanguage}
          />
        )
      }
    </I18nContext.Consumer>
  )
}
