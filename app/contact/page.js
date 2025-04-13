import React from 'react'
import ContactPage from '../components/ContactPage/ContactPage'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/HomePage/Footer/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  )
}
