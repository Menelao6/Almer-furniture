'use client';
import Styles from './CategoryTabs.module.css';

export default function CategoryTabs({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className={Styles.tabsContainer}>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`${Styles.tab} ${selectedCategory === index ? Styles.active : ''}`}
          onClick={() => setSelectedCategory(index)}
        >
          {category.title}
        </button>
      ))}
    </div>
  )
}