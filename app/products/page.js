import React from 'react'
import ProductsPage from '../components/ProductsPage/ProductsPage.js'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/HomePage/Footer/Footer.js'

export default function page() {
  return (
    <div>
      <Navbar />
      <ProductsPage />
      <Footer />
    </div>
  )
}
