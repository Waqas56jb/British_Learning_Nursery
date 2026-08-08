import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './Founders.css'

export default function Founders() {
  const { t } = useLanguage()

  return (
    <section id="founders" className="section founders">
      <div className="container">
        <motion.div
          className="founders__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{t.founders.label}</p>
          <h2 className="section-title">{t.founders.title}</h2>
          <p className="section-lead">{t.founders.lead}</p>
        </motion.div>

        <div className="founders__grid">
          {t.founders.people.map((person, i) => {
            const bioLines = Array.isArray(person.bio) ? person.bio : [person.bio]
            const initial = person.initial || person.name.trim().charAt(0)

            return (
              <motion.article
                key={`${person.role}-${i}`}
                className="founders__person"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 * i }}
              >
                <div className={`founders__avatar founders__avatar--${i % 3}`} aria-hidden="true">
                  <span>{initial}</span>
                </div>
                <div className="founders__copy">
                  <p className="founders__role">{person.role}</p>
                  <h3>{person.name}</h3>
                  <ul className="founders__bio">
                    {bioLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
