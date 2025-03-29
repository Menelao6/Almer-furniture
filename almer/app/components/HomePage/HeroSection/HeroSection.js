import React from 'react'
import Styles from './HeroSection.module.css'
import Image from 'next/image'
import Link from 'next/link'
import buttonStyles from "../../Shared/Button.module.css";

export default function HeroSection() {
  return (
    <section className={Styles.heroSection}>
        <div className={Styles.gradientOverlay} />
        
        <div className={Styles.heroImage}>
            <Image 
                src="/background2.jpg" 
                alt="Hero Image" 
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
        </div>

        <div className={Styles.heroContent}>
            <h1>Dizajne të personalizuara për çdo hapësirë.</h1>
            <h3>(Custom designs for every space.)</h3>
            
            <div className={Styles.separator} />
            
            <p>Punime artizanale me dru dhe alumin për ambiente të ngrohta dhe elegante.</p>
            <p>(Handcrafted wood and aluminum works for warm and elegant spaces.)</p>
            
            <Link href="/products">
                <button className={`${buttonStyles.btn} ${Styles.ctaButton}`}>
                    Shiko Projektet
                </button>
            </Link>
        </div>
    </section>
  )
}