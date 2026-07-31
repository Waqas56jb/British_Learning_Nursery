import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '../data'
import './Header.css'

export default function Header() {
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
  const elevated = scrolled || open

  return (
    <header className={`header ${elevated ? 'header--solid' : 'header--glass'}`}>
      <div className="container header__inner">
        <a href="#home" className="header__brand" onClick={close}>
          <img src="/logo.png" alt="British Learning Nursery" className="header__logo" />
          <span className="header__brand-text">
            <span className="header__mark" aria-hidden="true">
              <span>B</span>
              <span>L</span>
              <span>N</span>
            </span>
            <span className="header__name">British Learning Nursery</span>
          </span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#contact" className="btn btn-primary header__cta">
            Book a Tour
          </a>
          <a
            href={SITE.whatsapp}
            className="btn btn-whatsapp header__cta header__cta--wa"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className={`header__menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
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
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="header__drawer-actions">
              <a href="#contact" className="btn btn-primary" onClick={close}>
                Book a Tour
              </a>
              <a
                href={SITE.whatsapp}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
                onClick={close}
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
