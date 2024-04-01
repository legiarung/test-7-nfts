import React, { useContext, createContext } from 'react'

const I18N_CONFIG_KEY = 'i18nConfig'

let language

try {
  language = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language 
}
catch(e){}

language = (language === 'en' || language === 'ja')? language: 'en'

const initialState = {
    selectedLang: language,
  }

function getConfig() {
    const ls = localStorage.getItem(I18N_CONFIG_KEY)
    if (ls) {
    try {
        return JSON.parse(ls)
    } catch (er) {
        console.error(er)
    }
    }
    return initialState
}

// Side effect
export function setLanguage(lang:any) {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({selectedLang: lang}))
  window.location.reload()
}

const I18nContext = createContext(initialState)

const useLang = () => {
    return useContext(I18nContext).selectedLang
  }

const I18nContextProvider = ({children}:any) => {
    const lang = getConfig()
    return (  
        <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>
    )
}

export {I18nContextProvider,useLang} 