import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../i18n/LanguageContext'
import './WelcomePage.css'

export default function WelcomePage() {
  const { t, isRtl } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [])

  return (
    <>
      <Header solid />
      <main className="welcome">
        <div className="welcome__bg" aria-hidden="true" />
        <div className="container welcome__wrap">
          <motion.div
            className="welcome__card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/image.png"
              alt={t.welcome.imageAlt}
              className="welcome__image"
            />
            <p className="welcome__message">{t.welcome.message}</p>
            <Link to="/" className="btn btn-primary welcome__back">
              {isRtl ? `${t.welcome.back} →` : `← ${t.welcome.back}`}
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
