import { useEffect } from 'react'
import { initSmoothScroll } from './lib/smoothScroll'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import CulturalStatement from './sections/CulturalStatement'
import Legacy from './sections/Legacy'
import EEE from './sections/EEE'
import Wings from './sections/Wings'
import Portfolio from './sections/Portfolio'
import Archive from './sections/Archive'
import Precision from './sections/Precision'
import MoreThanClub from './sections/MoreThanClub'
import Events from './sections/Events'
import Recognition from './sections/Recognition'
import Team from './sections/Team'
import ReadyToCreate from './sections/ReadyToCreate'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'
import FinalStatement from './sections/FinalStatement'

function App() {
  useEffect(() => {
    const cleanup = initSmoothScroll()
    return cleanup
  }, [])

  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <CulturalStatement />
        <Legacy />
        <EEE />
        <Wings />
        <Portfolio />
        <Archive />
        <Precision />
        <MoreThanClub />
        <Events />
        <Recognition />
        <Team />
        <ReadyToCreate />
        <Contact />
        <FAQ />
        <FinalStatement />
      </main>
      <Footer />
    </>
  )
}

export default App
