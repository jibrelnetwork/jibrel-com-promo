import { values } from 'lodash-es'

export const LANGUAGE_CODES = {
  EN: 'en',
  AR: 'ar',
  ZH: 'zh-hans',
  KO: 'ko',
}

export const DEFAULT_LANGUAGE_CODE = LANGUAGE_CODES.EN

export const LANGUAGE_PATHS_AVAILABLE = values(LANGUAGE_CODES)

export const LANGUAGES = {
  [LANGUAGE_CODES.EN]: {
    tag: 'en',
    dir: 'ltr',
    title: 'English',
    shorthand: 'en',
  },
  [LANGUAGE_CODES.AR]: {
    tag: 'ar',
    dir: 'rtl',
    title: 'العربية',
    shorthand: 'ع',
  },
  [LANGUAGE_CODES.ZH]: {
    tag: 'zh-Hans',
    dir: 'ltr',
    title: '中文',
    shorthand: '中文',
  },
  [LANGUAGE_CODES.KO]: {
    tag: 'ko',
    dir: 'ltr',
    title: '한국어',
    shorthand: '한국어',
  },
}
