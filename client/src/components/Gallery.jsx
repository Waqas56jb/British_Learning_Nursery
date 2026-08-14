import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GALLERY } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import './Gallery.css'

export default function Gallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState(null)
  const caption = (id) => t.gallery.photos[id] || ''

  const close = useCallback(() => setActive(null), [])
  const step = useCallback((delta) => {
    setActive((i) =>
      i === null ? i : (i + delta + GALLERY.length) % GALLERY.length,
    )
  }, [])

  useEffect(() => {
    if (active === null) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <motion.div
          className="gallery__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{t.gallery.label}</p>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-lead">{t.gallery.lead}</p>
        </motion.div>

        <div className="gallery__grid">
          {GALLERY.map((photo, i) => (
            <motion.button
              key={photo.id}
              type="button"
              className={`gallery__tile gallery__tile--${photo.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.04 * (i % 4) }}
              onClick={() => setActive(i)}
              aria-label={`${t.gallery.view} — ${caption(photo.id)}`}
            >
              <img
                src={photo.src}
                alt={caption(photo.id)}
                loading="lazy"
                decoding="async"
                width="1448"
                height="1086"
              />
              <span className="gallery__tile-glow" aria-hidden="true" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="gallery__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={t.gallery.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={close}
          >
            <button
              type="button"
              className="gallery__close"
              aria-label={t.gallery.close}
              onClick={close}
            >
              ×
            </button>

            <motion.figure
              className="gallery__viewer"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={GALLERY[active].src}
                src={GALLERY[active].src}
                alt={caption(GALLERY[active].id)}
              />
              <figcaption>
                <span className="gallery__counter">
                  {active + 1} / {GALLERY.length}
                </span>
                {caption(GALLERY[active].id)}
              </figcaption>
            </motion.figure>

            <div className="gallery__nav" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="gallery__arrow"
                aria-label={t.gallery.prev}
                onClick={() => step(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery__arrow"
                aria-label={t.gallery.next}
                onClick={() => step(1)}
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
