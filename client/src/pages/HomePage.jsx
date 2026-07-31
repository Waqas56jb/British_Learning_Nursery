import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Founders from '../components/Founders'
import Programs from '../components/Programs'
import Curriculum from '../components/Curriculum'
import Facilities from '../components/Facilities'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function HomePage() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [hash, pathname])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Founders />
        <Programs />
        <Curriculum />
        <Facilities />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
