import { motion } from 'framer-motion'
import { SITE } from '../data'
import './CtaBanner.css'

export default function CtaBanner() {
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
          <p className="cta__eyebrow">{SITE.admissions}</p>
          <h2 id="cta-heading">Admissions open for the upcoming academic year</h2>
          <p>
            Visit us in {SITE.location}, or message us on WhatsApp — we would love to welcome
            your family.
          </p>
        </motion.div>
        <motion.div
          className="cta__actions"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <a href="#contact" className="btn btn-accent">
            Register Interest
          </a>
          <a
            href={SITE.whatsapp}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
