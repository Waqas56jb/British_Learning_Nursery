import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'bln-lang'

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved === 'ar' || saved === 'en' ? saved : 'en'
    } catch {
      return 'en'
    }
  })

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en')

  const t = useMemo(() => translations[lang] || translations.en, [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    document.title = t.metaTitle
    document.body.classList.toggle('is-rtl', lang === 'ar')
    document.body.classList.toggle('is-ltr', lang === 'en')
  }, [lang, t.dir, t.metaTitle])

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t, isRtl: lang === 'ar' }),
    [lang, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
