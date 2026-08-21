import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../data'
import { NAV_HREFS } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'
import './Header.css'

export default function Header({ solid = false }) {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)
  const elevated = solid || scrolled || open

  return (
    <header className={`header ${elevated ? 'header--solid' : 'header--glass'}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={close}>
          <img src="/logo.png" alt={t.site.name} className="header__logo" />
          <span className="header__name">{t.site.name}</span>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          {NAV_HREFS.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__lang" role="group" aria-label={t.lang.switchTo}>
            <button
              type="button"
              className={`header__lang-btn ${lang === 'en' ? 'is-active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              {t.lang.en}
            </button>
            <button
              type="button"
              className={`header__lang-btn ${lang === 'ar' ? 'is-active' : ''}`}
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
            >
              {t.lang.ar}
            </button>
          </div>

          <a
            href={SITE.whatsapp}
            className="btn btn-whatsapp header__cta header__cta--wa"
            target="_blank"
            rel="noreferrer"
          >
            {t.common.whatsapp}
          </a>
          <button
            type="button"
            className={`header__menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="header__drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="header__drawer-nav" aria-label="Mobile">
              {NAV_HREFS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  {t.nav[link.key]}
                </motion.a>
              ))}
            </nav>
            <div className="header__drawer-lang">
              <button
                type="button"
                className={`header__lang-btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
              >
                English
              </button>
              <button
                type="button"
                className={`header__lang-btn ${lang === 'ar' ? 'is-active' : ''}`}
                onClick={() => setLang('ar')}
              >
                العربية
              </button>
            </div>
            <div className="header__drawer-actions">
              <a
                href={SITE.registerForm}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                onClick={close}
              >
                {t.common.registerInterest}
              </a>
              <a
                href={SITE.whatsapp}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
                onClick={close}
              >
                {t.common.whatsappUs}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
