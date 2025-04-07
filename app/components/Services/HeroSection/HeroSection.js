'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Styles from './HeroSection.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

const images = {
  desktop: ['/images/services-4.jpg', '/images/services-5.jpg', '/images/services-6.jpg'],
  mobile: ['/images/services-mobile-1.jpg', '/images/services-mobile-2.jpg', '/images/services-mobile-3.jpg']
};

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={Styles.heroSection}>
      <div className={Styles.mediaContainer}>
        {!showVideo ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className={Styles.swiper}
          >
            {(isMobile ? images.mobile : images.desktop).map((img, index) => (
              <SwiperSlide key={index} className={Styles.swiperSlide}>
                <img 
                  src={img}
                  alt={`Service example ${index + 1}`}
                  className={Styles.slideImage}
                  loading="eager"
                  decoding="async"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={Styles.videoWrapper}>
            <video 
              className={Styles.videoPlayer}
              autoPlay
              muted
              loop
              controls
            >
              <source src="/videos/services-video.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </div>

      <div className={Styles.contentOverlay}>
        <h1 className={Styles.contentTitle}>Shërbimet Tona</h1>
        <p className={Styles.contentSubtitle}>
          Krijime unike në dru për shtëpi dhe ambiente komerciale
        </p>
      </div>
      {/* Video Button in case it is needed in the future */}
      {/*} <div className={Styles.controlsContainer}> <button className={Styles.controlButton} onClick={() => setShowVideo(!showVideo)} >  {showVideo ? 'Mbyll Video' : 'Shiko Video'} </button> </div> */}
    </section>
  )
}