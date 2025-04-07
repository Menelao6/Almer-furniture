import React from 'react'
import HeroSection from './HeroSection/HeroSection.js'
import Styles from "./HeroSection/HeroSection.module.css"
import Navbar from '../Navbar/Navbar.js'
import Footer from '../HomePage/Footer/Footer.js'
import CustomizationJourney from './CustomizationJourney/CustomizationJourney.js'
import ServiceSpecializations from './ServiceSpecialization/ServiceSpecializations.js'
import Testimonials from './Testimonials/Testimonials.js'
import Showcase from './Showcase/Showcase.js'

export default function ServicesPage() {
  return (
    <div className={Styles.servicesPage}>
      <Navbar />
      <HeroSection />
      <CustomizationJourney />
      <ServiceSpecializations />
      <Testimonials />
      <Showcase />
      <Footer />
    </div>
  )
}