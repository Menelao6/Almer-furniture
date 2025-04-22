import React from 'react'
import Gallery from '../components/Gallery/Gallery.js'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/HomePage/Footer/Footer.js'

export default function page() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  )
}
