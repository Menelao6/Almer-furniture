import React from 'react'
import HeroSection from './HeroSection/HeroSection.js'
import Styles from "./HeroSection/HeroSection.module.css"
import Navbar from '../Navbar/Navbar.js'
import Footer from '../HomePage/Footer/Footer.js'

export default function ServicesPage() {
  return (
    <div className={Styles.servicesPage}>
      <Navbar />
      <HeroSection />
      <Footer />
      {/* Add other sections */}
    </div>
  )
}