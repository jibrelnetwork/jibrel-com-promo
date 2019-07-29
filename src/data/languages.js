export const LANGUAGE_CODES = {
  EN: 'en',
  AR: 'ar',
  ZH: 'zh-hans',
}

export const DEFAULT_LANGUAGE_CODE = LANGUAGE_CODES.EN

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
    shorthand: 'ar',
  },
  [LANGUAGE_CODES.ZH]: {
    tag: 'zh-Hans',
    dir: 'ltr',
    title: '中文',
    shorthand: '中文',
  },
}
