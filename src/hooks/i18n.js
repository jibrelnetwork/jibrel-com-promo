import React, { useContext } from 'react'

import { I18nContext } from '/app/i18n-provider'

export const useI18n = () => {
  const { i18n } = useContext(I18nContext)

  return i18n
}
