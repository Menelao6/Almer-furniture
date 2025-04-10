'use client';
import { useState } from 'react';
import { categories } from './data/productsData';
import Styles from './ProductsPage.module.css';
import CategoryTabs from './CategoryTabs/CategoryTabs.js';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import RequestForm from './RequestForm/RequestForm';
import ValueProps from './ValueProps/ValueProps';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
        <h1 className={Styles.mainTitle}>Portfolio i Punimeve</h1>
        <p className={Styles.subTitle}>Shikoni shembuj nga punimet tona</p>
      </section>

      <ValueProps />

      <CategoryTabs 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {categories.map((category, index) => (
        <section 
          key={index} 
          className={`${Styles.categorySection} ${selectedCategory === index ? Styles.active : ''}`}
        >
          <h2 className={Styles.categoryTitle}>{category.title}</h2>
          <ProductCarousel products={category.products} />
          <button 
            className={Styles.ctaButton}
            onClick={() => setShowForm(true)}
          >
            Kërko një projekt të ngjashëm
          </button>
        </section>
      ))}

      {showForm && <RequestForm onClose={() => setShowForm(false)} />}
    </div>
  )
}