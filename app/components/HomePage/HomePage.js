import React from 'react'
import HeroSection from './HeroSection/HeroSection.js'
import Services from './Services/Services.js'
import Highlights from './Highlights/Highlights.js'
import Footer from './Footer/Footer.js'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Highlights />
      <Footer />
    </div>
  )
}
