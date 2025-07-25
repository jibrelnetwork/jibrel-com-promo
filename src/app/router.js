import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { includes } from 'lodash-es'

import { setLanguageCookieMiddleware } from './set-language-cookie-middleware'

import {
  LANGUAGE_PATHS_AVAILABLE,
  DEFAULT_LANGUAGE_CODE,
} from '../data/languages'

const redirectToEnIfLanguageNotAvailable = () => (toState, fromState, done) => {
  const lang = toState.params.lang.toLowerCase()

  if (!includes(LANGUAGE_PATHS_AVAILABLE, lang)) {
    return done({
      redirect: {
        name: toState.name,
        params: {
          lang: DEFAULT_LANGUAGE_CODE,
        }
      }
    })
  }

  return done()
}

const routes = [
  {
    name: 'Home',
    path: '/:lang',
    canActivate: redirectToEnIfLanguageNotAvailable,
  },
  {
    name: 'SubscribeInvestor',
    path: '/:lang/investor',
    canActivate: redirectToEnIfLanguageNotAvailable,
  },
  {
    name: 'SubscribeFounder',
    path: '/:lang/founder',
    canActivate: redirectToEnIfLanguageNotAvailable,
  },
]

export const router = createRouter(routes)

router.usePlugin(browserPlugin())
router.useMiddleware(setLanguageCookieMiddleware)

router.start()
