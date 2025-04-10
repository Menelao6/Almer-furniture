import React from 'react'
import Styles from './HeroSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
    return (
      <section className={Styles.heroSection}>
          <div className={Styles.gradientOverlay} />
          
          <div className={Styles.heroImage}>
              <Image 
                  src="/background33.webp"
                  alt="Punime moderne me dru"
                  layout='fill'
                  objectFit="cover"
                  decoding='async'
                  quality={100}
                  priority
              />
          </div>
  
          <div className={Styles.heroContent}>
              <h1 className={Styles.futuristicText}>
                  <span>Dizajne të Personalizuara </span>
                  <span>Për Çdo Hapësirë</span>
              </h1>
              
              <div className={Styles.neonLine} />
              
              <p className={Styles.subtitle}>
                  Punime artizanale me dru dhe alumin
                  <br />
                  Për ambiente elegante dhe moderne
              </p>
              
              <Link href="/produktet">
                  <button className={Styles.ctaButton}>
                      Shiko Projektet
                  </button>
              </Link>
          </div>
      </section>
    )
  }