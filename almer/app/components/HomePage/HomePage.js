import React from 'react'
import HeroSection from './HeroSection/HeroSection.js'
import Services from './Services/Services.js'
import Highlights from './Highlights/Highlights.js'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Highlights />
    </div>
  )
}
