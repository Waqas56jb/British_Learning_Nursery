import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './Curriculum.css'

export default function Curriculum() {
  const { t } = useLanguage()

  return (
    <section id="curriculum" className="section curriculum">
      <div className="container">
        <motion.div
          className="curriculum__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{t.curriculum.label}</p>
          <h2 className="section-title">{t.curriculum.title}</h2>
          <p className="section-lead">{t.curriculum.lead}</p>
        </motion.div>

        <div className="curriculum__grid">
          {t.curriculum.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className={`curriculum__pillar curriculum__pillar--${pillar.tone}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.07 * i }}
            >
              <span className="curriculum__index" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
