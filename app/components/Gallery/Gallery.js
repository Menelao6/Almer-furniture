'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Styles from './Gallery.module.css';

const categories = [
  { id: 'all', name: 'Të Gjitha' },
  { id: 'sallon', name: 'Sallon' },
  { id: 'kuzhine', name: 'Kuzhinë' },
  { id: 'dhoma-gjumi', name: 'Dhoma Gjumi' },
  { id: 'dery-dritare', name: 'Dyer & Dritare' },
];

const galleryItems = [
  { id: 1, category: 'sallon', image: '/gallery/sallon-1.jpg' },
  { id: 3, category: 'sallon', image: '/gallery/sallon-2.jpg' },
  { id: 2, category: 'kuzhine', image: '/gallery/kitchen-1.jpg' },
  { id: 4, category: 'kuzhine', image: '/gallery/kitchen-2.jpg' },
  { id: 5, category: 'dhoma-gjumi', image: '/gallery/bedroom-1.jpg' },
  { id: 6, category: 'dhoma-gjumi', image: '/gallery/bedroom-2.jpg' },
  { id: 7, category: 'dery-dritare', image: '/gallery/door-1.jpg' },
  { id: 9, category: 'sallon', image: '/gallery/sallon-3.jpg' },
  { id: 10, category: 'kuzhine', image: '/gallery/kitchen-3.jpg' },
  { id: 11, category: 'sallon', image: '/gallery/sallon-4.jpg' },
  { id: 12, category: 'sallon', image: '/gallery/sallon-5.jpg' },
  { id: 13, category: 'kuzhine', image: '/gallery/kitchen-4.jpg' },
  { id: 14, category: 'kuzhine', image: '/gallery/kitchen-5.jpg' },
  { id: 15, category: 'dhoma-gjumi', image: '/gallery/bedroom-3.jpg' },
  { id: 16, category: 'dhoma-gjumi', image: '/gallery/bedroom-4.jpg' },
  { id: 17, category: 'dhoma-gjumi', image: '/gallery/bedroom-5.jpg' },
  { id: 18, category: 'kuzhine', image: '/gallery/kitchen-6.jpg' },
  { id: 19, category: 'sallon', image: '/gallery/sallon-6.jpg' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [itemsToShow, setItemsToShow] = useState(16);
  const [selectedImage, setSelectedImage] = useState(null);

  const categoryFilteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = categoryFilteredItems.slice(0, itemsToShow);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setItemsToShow(16);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImage]);

  return (
    <section className={Styles.gallerySection}>
      <div className={Styles.gradientOverlay} />
      
      <div className={Styles.galleryHero}>
        <h1 className={Styles.galleryTitle}>Punimet Tona</h1>
        <p className={Styles.gallerySubtitle}>Eksploroni punimet tona më të fundit në dizajn dhe ndërtim mobiljesh</p>
      </div>

      <div className={Styles.categoryFilters}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`${Styles.filterButton} ${
              activeCategory === category.id ? Styles.active : ''
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={Styles.galleryGrid}>
        {displayedItems.map(item => (
          <div 
            key={item.id} 
            className={Styles.galleryItem}
            onClick={() => setSelectedImage(item.image)}
          >
            <div className={Styles.imageContainer}>
              <Image
                src={item.image}
                alt={item.category}
                fill
                className={Styles.galleryImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={Styles.imageOverlay}>
                <span className={Styles.categoryTag}>
                  {categories.find(c => c.id === item.category)?.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {categoryFilteredItems.length > itemsToShow && (
        <div className={Styles.loadMore}>
          <button 
            className={Styles.loadButton}
            onClick={() => setItemsToShow(prev => prev + 16)}
          >
            Shiko Më Shumë
          </button>
        </div>
      )}

      {selectedImage && (
        <div className={Styles.lightboxOverlay} onClick={() => setSelectedImage(null)}>
          <div className={Styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={Styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Mbyll"
            >
              ×
            </button>
            <div className={Styles.lightboxImageContainer}>
              <Image
                src={selectedImage}
                alt="Enlarge view"
                fill
                className={Styles.lightboxImage}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}