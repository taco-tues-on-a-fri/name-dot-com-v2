import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import deJson from '@src/i18n/locales/de/base.json'
import enJson from '@src/i18n/locales/en/base.json'
import esJson from '@src/i18n/locales/es/base.json'
import frJson from '@src/i18n/locales/fr/base.json'

const supportedLanguagesArray = ['de', 'en', 'es', 'fr']

const resources = {
  de: { base: deJson },
  en: { base: enJson },
  es: { base: esJson },
  fr: { base: frJson },
}

const detectionOptions = {
  order: ['navigator', 'querystring'],
  lookupQuerystring: 'locale',
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectionOptions,
    resources,
    ns: ['base'],
    defaultNS: 'base',
    fallbackNS: 'base',
    fallbackLng: 'en',
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    supportedLngs: supportedLanguagesArray,
    saveMissing: true,
    interpolation: { escapeValue: false },
    react: {
      useSuspense: true,
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      nsMode: 'fallback',
    },
    debug: false,
  })
  .then(() => 'i18n initialized')

export default i18n
