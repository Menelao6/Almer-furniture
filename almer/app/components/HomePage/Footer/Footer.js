import React from 'react'
import Styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      {/* Branding Section */}
      <div className={Styles.branding}>
        <h3 className={Styles.companyName}>Almer</h3>
        <p className={Styles.tagline}>Artizanë të Punimeve me Dru</p>
      </div>

      {/* Contact Info */}
      <div className={Styles.footerContent}>
        {/* Left Column - Phone */}
        <div className={Styles.footerColumn}>
          <h4>Na Kontaktoni</h4>
          <p>+355 123 456 789</p>
        </div>
        
        {/* Center Column - Email */}
        <div className={Styles.footerColumn}>
          <h4>Email</h4>
          <p>info@almer.al</p>
        </div>
        
        {/* Right Column - Social Media */}
        <div className={Styles.footerColumn}>
          <h4>Na Ndiqni</h4>
          <div className={Styles.socialLinks}>
            <a href="#" className={Styles.socialLink}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={Styles.socialLink}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={Styles.socialLink}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={Styles.copyright}>
        © 2025 Almer. Të gjitha të drejtat e rezervuara.
      </div>
    </footer>
  )
}