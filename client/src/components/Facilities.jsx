import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './Facilities.css'

export default function Facilities() {
  const { t } = useLanguage()

  return (
    <section id="facilities" className="section facilities">
      <div className="container facilities__layout">
        <motion.div
          className="facilities__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {t.facilities.label ? (
            <p className="section-label">{t.facilities.label}</p>
          ) : null}
          <h2 className="section-title">{t.facilities.title}</h2>
          <p className="section-lead">{t.facilities.lead}</p>
        </motion.div>

        <ul className="facilities__list">
          {t.facilities.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
            >
              <span className={`facilities__bar facilities__bar--${i}`} aria-hidden="true" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
