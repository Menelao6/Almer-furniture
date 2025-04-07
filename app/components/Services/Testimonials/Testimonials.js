'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Styles from './Testimonials.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    author: 'Anisa K., Tirane',
    text: 'Profesionizëm dhe përfundim i shkëlqyer. Eksperiencë e shkëlqyer nga konsultimi deri te instalimi!',
    project: 'Kuzhinë Moderne',
    image: '/testimonials/avatar1.jpg'
  },
  {
    author: 'Arben L., Durres',
    text: 'Kualitet i jashtëzakonshëm në çdo detaj. Dritaret e reja transformuan ambientin!',
    project: 'Dyer & Dritare',
    image: '/testimonials/avatar2.jpg'
  },
  {
    author: 'Elona S., Vlore',
    text: 'Krijuan një ambient të përsosur për familjen tonë. Vërtet artizanat me pasion!',
    project: 'Sallon Familjar',
    image: '/testimonials/avatar3.jpg'
  },
  {
    author: 'Elona S., Vlore',
    text: 'Krijuan një ambient të përsosur për familjen tonë. Vërtet artizanat me pasion!',
    project: 'Dhome E Fjetjes',
    image: '/testimonials/avatar4.jpg'
  }
];

export default function Testimonials() {
  return (
    <section className={Styles.section} style={{ backgroundColor: '#F5EFE6' }}>
      <div className={Styles.header}>
        <h2 className={Styles.title}>Çfarë Thonë Klientët</h2>
        <p className={Styles.subtitle}>Historitë e Suksesit</p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.1}
        centeredSlides
        loop
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        className={Styles.swiper}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={Styles.slide}>
            <div className={Styles.card}>
              <div className={Styles.imageContainer}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.project} 
                  className={Styles.image}
                  loading="lazy"
                />
                <div className={Styles.projectTag}>{testimonial.project}</div>
              </div>
              
              <div className={Styles.content}>
                <svg className={Styles.quoteIcon} viewBox="0 0 24 24">
                  <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
                </svg>
                <p className={Styles.text}>{testimonial.text}</p>
                <div className={Styles.author}>{testimonial.author}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}