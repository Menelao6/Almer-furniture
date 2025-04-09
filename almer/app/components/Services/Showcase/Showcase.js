'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from './Showcase.module.css';
import 'swiper/css';

const projects = [
  {
    title: 'Sallon Modern',
    category: 'Residential',
    images: ['/projects/living-1.jpg', '/projects/living-2.jpg'],
    details: 'Mobilje moderne në dru ashkël me përfundim mat'
  },
  {
    title: 'Kuzhinë Premium',
    category: 'Commercial',
    images: ['/projects/kitchen-1.jpg', '/projects/kitchen-2.jpg'],
    details: 'Zgjidhje kuzhine me panele druri të egër'
  },
  {
    title: 'Dhoma Gjumi Elegante',
    category: 'Residential',
    images: ['/projects/bedroom-1.jpg', '/projects/bedroom-2.jpg'],
    details: 'Krijim ambienti të qetë me dizajn minimalist'
  },
  {
    title: 'Dyer Artizanale',
    category: 'Architectural',
    images: ['/projects/door-1.jpg', '/projects/door-2.jpg'],
    details: 'Dyer druri me dekorime tradicionale dhe moderne'
  }
];

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <section className={Styles.section} style={{ backgroundColor: '#F5EFE6' }}>
      <div className={Styles.header}>
        <h2 className={Styles.title}>Portfolio i Punimeve</h2>
        <p className={Styles.subtitle}>Krijimet tona në Fokus</p>
      </div>

      {/* Desktop Grid */}
      <div className={Styles.desktopGrid}>
        {projects.map((project, index) => (
          <div 
            key={index}
            className={Styles.projectCard}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className={Styles.imageContainer}>
              <img
                src={project.images[0]}
                alt={project.title}
                className={Styles.mainImage}
              />
              <img
                src={project.images[1]}
                alt={project.title}
                className={Styles.hoverImage}
              />
              <div className={Styles.categoryTag}>{project.category}</div>
            </div>
            <div className={Styles.content}>
              <h3>{project.title}</h3>
              <p>{project.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className={Styles.mobileCarousel}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className={Styles.mobileCard}>
                <div className={Styles.mobileImageContainer}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className={Styles.mobileImage}
                  />
                  <div className={Styles.mobileCategory}>{project.category}</div>
                </div>
                <div className={Styles.mobileContent}>
                  <h3>{project.title}</h3>
                  <p>{project.details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Progress Indicator */}
      <div className={Styles.progress}>
        {projects.map((_, index) => (
          <div 
            key={index}
            className={`${Styles.progressDot} ${index === activeIndex ? Styles.active : ''}`}
          />
        ))}
      </div>
    </section>
  )
}