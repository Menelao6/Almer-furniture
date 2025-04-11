'use client';
import Styles from './AboutSection.module.css';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className={Styles.section}>
      <div className={Styles.content}>
        <h2 className={Styles.title}>Artizanat me Pasuri</h2>
        
        <div className={Styles.grid}>
          <div className={Styles.textContent}>
            <p className={Styles.leadText}>
              Që nga viti 1998, ne kemi shndërruar drurin shqiptar në krijime të përjetshme.
            </p>
            
            <div className={Styles.highlights}>
              <div className={Styles.highlightItem}>
                <div className={Styles.highlightNumber}>25+</div>
                <div className={Styles.highlightText}>Vjet Përvojë</div>
              </div>
              <div className={Styles.highlightItem}>
                <div className={Styles.highlightNumber}>1500+</div>
                <div className={Styles.highlightText}>Projekte të Përfunduara</div>
              </div>
            </div>

            <p className={Styles.description}>
              Kombinojmë teknikat tradicionale me teknologjinë moderne për të krijuar mobilje unike që rrjedhin nga pasuria e drurit tonë lokal.
            </p>
          </div>

          <div className={Styles.imageWrapper}>
            <Image
              src="/images/workshop.webp"
              alt="Workshopi ynë"
              fill
              className={Styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={Styles.imageOverlay} />
          </div>
        </div>
      </div>
    </section>
  )
}