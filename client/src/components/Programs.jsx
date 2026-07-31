import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './Programs.css'

export default function Programs() {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState(null)
  const titleId = useId()
  const programs = t.programs.items
  const active = programs.find((p) => p.id === activeId) || null

  useEffect(() => {
    if (!active) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') setActiveId(null)
    }

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="programs" className="section programs">
      <div className="container">
        <motion.div
          className="programs__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{t.programs.label}</p>
          <h2 className="section-title">{t.programs.title}</h2>
          <p className="section-lead">{t.programs.lead}</p>
        </motion.div>

        <div className="programs__list">
          {programs.map((program, i) => (
            <motion.button
              key={program.id}
              type="button"
              className={`programs__item programs__item--${program.accent}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 * i }}
              onClick={() => setActiveId(program.id)}
              aria-haspopup="dialog"
            >
              <div className="programs__meta">
                <h3>{program.title}</h3>
                <p>{program.detail}</p>
              </div>
              <div className="programs__action">
                <span className="programs__note">{program.note}</span>
                <span className="btn btn-outline programs__more">{t.common.moreInfo}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="programs__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              className={`programs__modal programs__modal--${active.accent}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="programs__close"
                aria-label={t.common.close}
                onClick={() => setActiveId(null)}
              >
                ×
              </button>

              <p className="programs__modal-label">{t.programs.modalLabel}</p>
              <h3 id={titleId}>{active.title}</h3>
              <p className="programs__modal-summary">{active.summary}</p>

              <ul className="programs__highlights">
                {active.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="programs__facts">
                <div>
                  <span>{t.programs.scheduleLabel}</span>
                  <p>{active.schedule}</p>
                </div>
                <div>
                  <span>{t.programs.feesLabel}</span>
                  <p>{active.fees}</p>
                </div>
              </div>

              <div className="programs__modal-actions">
                <Link
                  to="/register"
                  className="btn btn-primary"
                  onClick={() => setActiveId(null)}
                >
                  {t.common.enquire}
                </Link>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setActiveId(null)}
                >
                  {t.common.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
