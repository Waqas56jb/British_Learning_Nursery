import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SITE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import './RegisterPage.css'

const initialForm = {
  parentName: '',
  phone: '',
  email: '',
  childName: '',
  childAge: '',
  program: '',
  message: '',
}

export default function RegisterPage() {
  const { t, isRtl } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 700)
  }

  return (
    <>
      <Header solid />
      <main className="register">
        <div className="register__bg" aria-hidden="true" />
        <div className="container register__wrap">
          <motion.div
            className="register__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">{t.register.label}</p>
            <h1 className="section-title">{t.register.title}</h1>
            <p className="section-lead">{t.register.lead}</p>
            <Link to="/" className="register__back">
              {isRtl ? `${t.register.back} →` : `← ${t.register.back}`}
            </Link>
          </motion.div>

          <motion.div
            className="register__panel"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'success' ? (
              <div className="register__success" role="status">
                <h2>{t.register.thankYou}</h2>
                <p>
                  {t.register.success}{' '}
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    {t.common.whatsapp}
                  </a>
                </p>
                <div className="register__success-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setStatus('idle')}
                  >
                    {t.register.submitAnother}
                  </button>
                  <Link to="/" className="btn btn-outline">
                    {t.register.returnHome}
                  </Link>
                </div>
              </div>
            ) : (
              <form className="register__form" onSubmit={onSubmit} noValidate>
                <div className="register__grid">
                  <label className="register__field">
                    <span>{t.register.parentName}</span>
                    <input
                      name="parentName"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.parentName}
                      onChange={onChange}
                      placeholder={t.register.parentPlaceholder}
                    />
                  </label>

                  <label className="register__field">
                    <span>{t.register.phone}</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={onChange}
                      placeholder={t.register.phonePlaceholder}
                    />
                  </label>

                  <label className="register__field">
                    <span>{t.register.email}</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder={t.register.emailPlaceholder}
                    />
                  </label>

                  <label className="register__field">
                    <span>{t.register.childName}</span>
                    <input
                      name="childName"
                      type="text"
                      required
                      value={form.childName}
                      onChange={onChange}
                      placeholder={t.register.childNamePlaceholder}
                    />
                  </label>

                  <label className="register__field">
                    <span>{t.register.childAge}</span>
                    <input
                      name="childAge"
                      type="text"
                      required
                      value={form.childAge}
                      onChange={onChange}
                      placeholder={t.register.childAgePlaceholder}
                    />
                  </label>

                  <label className="register__field">
                    <span>{t.register.program}</span>
                    <select name="program" value={form.program} onChange={onChange}>
                      <option value="">{t.register.programPlaceholder}</option>
                      {t.programs.items.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                      <option value={t.register.notSure}>{t.register.notSure}</option>
                    </select>
                  </label>
                </div>

                <label className="register__field register__field--full">
                  <span>{t.register.message}</span>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    placeholder={t.register.messagePlaceholder}
                  />
                </label>

                <div className="register__footer">
                  <p className="register__note">{t.register.note}</p>
                  <button
                    type="submit"
                    className="btn btn-accent register__submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? t.register.sending : t.register.submit}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
