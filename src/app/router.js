import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import { LANGUAGE_CODES, DEFAULT_LANGUAGE_CODE } from '../data/languages'

const LANGUAGE_TAGS_AVAILABLE = Object.values(LANGUAGE_CODES)

const redirectToEnIfLanguageNotAvailable = () => (toState, fromState, done) => {
  const lang = toState.params.lang.toLowerCase()

  if (!LANGUAGE_TAGS_AVAILABLE.find((tag) => tag === lang)) {
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

router.start()
