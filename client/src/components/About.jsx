import { motion } from 'framer-motion'
import { FEATURES, SITE } from '../data'
import './About.css'

export default function About() {
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
            <p className="section-label">About BLN</p>
            <h2 className="section-title">Nurturing young hearts and curious minds</h2>
            <p className="section-lead about__lead">
              Since {SITE.established}, British Learning Nursery has welcomed families in{' '}
              {SITE.location} with a warm blend of British learning, values, and sensory
              discovery — a calm, joyful place for children to begin.
            </p>
            <ul className="about__list">
              <li>Qualified, caring educators</li>
              <li>Safe, colourful learning spaces</li>
              <li>Strong partnership with parents</li>
            </ul>
          </motion.div>

          <motion.figure
            className="about__figure"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/incorporate.png"
              alt="British Learning Nursery building in Sabah Al Salem"
            />
            <figcaption>
              Our home in Sabah Al Salem — colourful, welcoming, and made for little learners.
            </figcaption>
          </motion.figure>
        </div>

        <div className="about__features">
          {FEATURES.map((item, i) => (
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
