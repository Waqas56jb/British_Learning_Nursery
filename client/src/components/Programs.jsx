import { motion } from 'framer-motion'
import { PROGRAMS } from '../data'
import './Programs.css'

export default function Programs() {
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
          <p className="section-label">Programs</p>
          <h2 className="section-title">Learning paths for every little day</h2>
          <p className="section-lead">
            A simple overview for now — full program details, schedules, and fees will be
            added once your information is ready.
          </p>
        </motion.div>

        <div className="programs__list">
          {PROGRAMS.map((program, i) => (
            <motion.article
              key={program.title}
              className={`programs__item programs__item--${program.accent}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 * i }}
            >
              <div className="programs__meta">
                <h3>{program.title}</h3>
                <p>{program.detail}</p>
              </div>
              <div className="programs__action">
                <span className="programs__note">{program.note}</span>
                <a href="#contact" className="btn btn-outline">
                  Enquire
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
