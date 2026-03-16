'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experiences from '@/components/Experiences'
import EducationAndLanguages from '@/components/EducationAndLanguages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 40%, #F9FAFB 100%)' }}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <EducationAndLanguages />
      <Contact />
      <Footer />
    </main>
  )
}
