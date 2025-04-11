import React from 'react'
import HeroSection from './HeroSection/HeroSection.js'
import Services from './Services/Services.js'
import Highlights from './Highlights/Highlights.js'
import Footer from './Footer/Footer.js'
import AboutSection from './AboutSection/AboutSection.js'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutSection />
      <Highlights />
      <Footer />
    </div>
  )
}
