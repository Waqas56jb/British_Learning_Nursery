import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import './Graduates.css'

export default function Graduates() {
  const { t } = useLanguage()
  const photos = t.graduates.photos || []
  const friends = t.graduates.friends

  return (
    <section id="graduates" className="section graduates">
      <div className="container">
        <motion.div
          className="graduates__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{t.graduates.label}</p>
          <h2 className="section-title">{t.graduates.title}</h2>
          <p className="section-lead">{t.graduates.lead}</p>
        </motion.div>

        {friends ? (
          <motion.figure
            className="graduates__friends"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <img src={friends.src} alt={friends.alt} />
            <figcaption>{friends.caption}</figcaption>
          </motion.figure>
        ) : null}

        {photos.length > 0 ? (
          <div className="graduates__grid">
            {photos.map((photo, i) => (
              <motion.figure
                key={photo.src || i}
                className="graduates__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
              >
                <img src={photo.src} alt={photo.alt || photo.caption || ''} />
                {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
              </motion.figure>
            ))}
          </div>
        ) : (
          <div className="graduates__empty" aria-live="polite">
            {[0, 1, 2].map((slot) => (
              <motion.div
                key={slot}
                className="graduates__placeholder"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * slot }}
              >
                <span>{t.graduates.empty}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
