import React from "react";
import Styles from "./Highlights.module.css";
import Image from "next/image";

const highlightsData = [
  {
    title: "Quality Materials",
    description: "Përdorim vetëm materiale premium për një qëndrueshmëri të gjatë.",
    image: "/highQuality.jpg",
  },
  {
    title: "Customization",
    description: "Punime të personalizuara sipas kërkesave tuaja.",
    image: "/highCustomise.jpg",
  },
  {
    title: "Modern & Classic Designs",
    description: "Kombinojmë stilin modern me elegancën klasike.",
    image: "/highModerne.jpg",
  },
  {
    title: "Customer Satisfaction",
    description: "Prioriteti ynë është kënaqësia e klientëve tanë.",
    image: "/highCostumer.jpg",
  },
];

export default function Highlights() {
    return (
      <section className={Styles.highlightsSection}>
          <div className={Styles.highlightsContainer}>
              {highlightsData.map((highlight, index) => (
                  <div key={index} className={Styles.highlightItem}>
                      {/* Text Content */}
                      <div className={Styles.content}>
                          <div className={Styles.textWrapper}>
                              <h3 className={Styles.highlightTitle}>
                                  <span className={Styles.titleNumber}>0{index + 1}</span>
                                  {highlight.title}
                              </h3>
                              <p className={Styles.highlightDescription}>{highlight.description}</p>
                          </div>
                      </div>
                      
                      {/* Image Container */}
                      <div className={Styles.imageContainer}>
                          <Image 
                              src={highlight.image} 
                              alt={highlight.title}
                              width={600}
                              height={400}
                              className={Styles.highlightImage}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={index < 2}
                          />
                          <div className={Styles.imageOverlay}></div>
                      </div>
                  </div>
              ))}
          </div>
      </section>
    )
  }