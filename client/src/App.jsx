import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Curriculum from './components/Curriculum'
import Facilities from './components/Facilities'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Curriculum />
        <Facilities />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
