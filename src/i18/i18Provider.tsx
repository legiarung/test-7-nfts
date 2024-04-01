import { useLang } from './I18nContext'
import { IntlProvider } from 'react-intl'
// import '@formatjs/intl-relativetimeformat/polyfill'
// import '@formatjs/intl-relativetimeformat/locale-data/en'
// import '@formatjs/intl-relativetimeformat/locale-data/vn'


import enMessages from './message/en.json'
import jaMessages from './message/ja.json'

const allMessages: any = {
  en: enMessages,
  ja: jaMessages,
}

const I18nProvider = ({ children }: any) => {
  const locale = useLang()
  const messages = allMessages[locale]
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export { I18nProvider }
