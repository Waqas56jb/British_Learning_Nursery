import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './About.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about">
      <div className="about__aura" aria-hidden="true" />
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">{t.about.label}</p>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="section-lead about__lead">{t.about.lead}</p>
            <ul className="about__list">
              {t.about.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>

          <motion.figure
            className="about__figure"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/incorporate.png" alt={t.about.imageAlt} />
            <figcaption>{t.about.caption}</figcaption>
          </motion.figure>
        </div>

        <div className="about__features">
          {t.features.map((item, i) => (
            <motion.div
              key={item.title}
              className="about__feature"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <span className={`about__dot about__dot--${i}`} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
