import { motion } from 'framer-motion'
import { PILLARS } from '../data'
import './Curriculum.css'

export default function Curriculum() {
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
          <p className="section-label">Curriculum</p>
          <h2 className="section-title">Four pillars that shape every day</h2>
          <p className="section-lead">
            British curriculum, values, life skills, and sensory learning — woven together
            with care.
          </p>
        </motion.div>

        <div className="curriculum__grid">
          {PILLARS.map((pillar, i) => (
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
