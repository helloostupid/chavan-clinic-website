import { useEffect, useState, useMemo } from 'react'
import { LanguageContext } from './languageContext'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('chavan-clinic-language') === 'mr' ? 'mr' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr' : 'en'
    try {
      localStorage.setItem('chavan-clinic-language', language)
    } catch {
      // The selected language still works for the current visit if storage is unavailable.
    }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'mr' : 'en')),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

