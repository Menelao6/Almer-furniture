'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Styles from './ProductCarousel.module.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function ProductCarousel({ products }) {
  return (
    <Swiper
      modules={[FreeMode, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1.2}
      freeMode={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 4 }
      }}
      className={Styles.carousel}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} className={Styles.slide}>
          <div className={Styles.productCard}>
            <img 
              src={product.img} 
              alt={product.desc}
              className={Styles.productImage}
              loading="lazy"
            />
            <div className={Styles.productInfo}>
              <p className={Styles.description}>{product.desc}</p>
              <div className={Styles.dimensions}>{product.dimensions}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}