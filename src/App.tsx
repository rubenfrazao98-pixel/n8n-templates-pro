import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Benefits from './components/Benefits'
import TemplatesShowcase from './components/TemplatesShowcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Benefits />
        <TemplatesShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
