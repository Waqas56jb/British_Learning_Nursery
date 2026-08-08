import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './Friends.css'

export default function Friends() {
  const { t } = useLanguage()
  const friends = t.friends

  return (
    <section id="friends" className="section friends">
      <div className="container">
        <motion.div
          className="friends__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{friends.label}</p>
          <h2 className="section-title">{friends.title}</h2>
          <p className="section-lead">{friends.lead}</p>
        </motion.div>

        <motion.figure
          className="friends__card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <img src={friends.src} alt={friends.alt} />
          <figcaption>{friends.caption}</figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
