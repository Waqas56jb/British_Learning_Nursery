import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SITE, HERO_SLIDES } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1]
const SLIDE_MS = 5500

export default function Hero() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  // Only ever mount one slide beyond the current one, so the browser fetches
  // the photos gradually instead of pulling every hero image on first paint.
  const [mounted, setMounted] = useState(2)

  useEffect(() => {
    setMounted((m) => Math.max(m, Math.min(HERO_SLIDES.length, index + 2)))
  }, [index])

  useEffect(() => {
    if (HERO_SLIDES.length < 2) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const timer = window.setInterval(() => {
      if (document.hidden) return
      setIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__media" aria-hidden="true">
        {HERO_SLIDES.slice(0, mounted).map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`hero__image ${i === index ? 'is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
        ))}
        <div className="hero__veil" />
        <div className="hero__glow hero__glow--gold" />
        <div className="hero__glow hero__glow--rose" />
        <div className="hero__grain" />
      </div>

      <div className="hero__frame">
        <div className="hero__content">
          <h1 className="hero__brand" aria-label={t.site.name}>
            {t.site.brandWords.map((word, i) => (
              <motion.span
                key={`${word.text}-${i}`}
                className={`hero__brand-word hero__brand-word--${word.tone}`}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.08 + i * 0.12, ease }}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="hero__rule"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.42, ease }}
            aria-hidden="true"
          />

          <motion.p
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48, ease }}
          >
            {t.site.tagline}
          </motion.p>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease }}
          >
            {t.site.description}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
          >
            <Link to="/register" className="btn btn-primary hero__btn">
              {t.common.bookTour}
            </Link>
            <a
              href={SITE.whatsapp}
              className="btn btn-ghost hero__btn"
              target="_blank"
              rel="noreferrer"
            >
              {t.common.whatsappUs}
            </a>
          </motion.div>

          <motion.div
            className="hero__dots"
            role="group"
            aria-label={t.hero.slidesLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
          >
            {HERO_SLIDES.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`hero__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`${t.hero.slide} ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        aria-label={t.hero.scrollLabel}
      >
        <span>{t.common.discover}</span>
        <span className="hero__scroll-line" />
      </motion.a>
    </section>
  )
}
