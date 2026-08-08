import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SITE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import './CtaBanner.css'

export default function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="cta__bg" aria-hidden="true" />
      <div className="container cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="cta__eyebrow">{t.site.admissions}</p>
          <h2 id="cta-heading">{t.cta.title}</h2>
          <p>{t.cta.text}</p>
        </motion.div>
        <motion.div
          className="cta__actions"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Link to="/welcome" className="btn btn-accent">
            {t.common.registerInterest}
          </Link>
          <a
            href={SITE.whatsapp}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            {t.common.whatsappUs}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
