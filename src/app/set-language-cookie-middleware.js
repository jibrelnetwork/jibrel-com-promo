import Cookies from 'js-cookie'
import {
  LANGUAGE_PATHS_AVAILABLE,
} from '../data/languages'

export const setLanguageCookieMiddleware = () => (toState) => {
  const { lang } = toState.params
  if (
    lang
    && LANGUAGE_PATHS_AVAILABLE.indexOf(lang) > -1
  ) {
    Cookies.set('lang', lang, { expires: 365 })
  }

  return toState
}
