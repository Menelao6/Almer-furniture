'use client';
import { useState, useEffect } from 'react';
import Styles from './ServiceSpecializations.module.css';

const services = [
  {
    title: "Sallon",
    icon: "/icons/sofa.png",
    image: "/images/livingServices.jpg",
    description: "Mobilje funksionale dhe elegante për çdo hapësirë. Dizajne moderne dhe klasike të personalizuara për ju.",
    materials: ["Druri i Ashkël", "Lëkurë Natyrale", "Metale të Forcuara"]
  },
  {
    title: "Kuzhine",
    icon: "/icons/sink.png",
    image: "/images/kitchenServices.jpg",
    description: "Kuzhina të ndërtuara me material cilësor dhe dizajn unik. Optimizim i hapësirës për komoditet maksimal.",
    materials: ["Dru i Egër", "Granit", "Pamje të Integruara"]
  },
  {
    title: "Dhoma Gjumi",
    icon: "/icons/bed.png",
    image: "/images/bedServices.jpg",
    description: "Krijoni një ambient relaksues dhe të ngrohtë për gjumin tuaj.",
    materials: ["Dru Valnor", "Mëndafsh Natyral", "Sistem Ruajtjeje"]
  },
  {
    title: "Dyer Dritare",
    icon: "/icons/door.png",
    image: "/images/doorServices.jpg",
    description: "Dyer druri dhe alumini me cilësi të lartë. Dizajn modern me siguri dhe izolim maksimal.",
    materials: ["Dru i Qëndrueshëm", "Xham i Dyfishtë", "Sisteme Smart"]
  }
];

export default function ServiceSpecializations() {
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={Styles.section}>
      <div className={Styles.header}>
        <h2 className={Styles.title}>Artizanati i Specializuar</h2>
        <p className={Styles.subtitle}>Zonat tona të Ekspertizës</p>
      </div>

      {isMobile ? (
        <div className={Styles.mobileContainer}>
          <div className={Styles.mobileTabs}>
            {services.map((service, index) => (
              <button
                key={index}
                className={`${Styles.mobileTab} ${index === activeService ? Styles.active : ''}`}
                onClick={() => setActiveService(index)}
              >
                <img src={service.icon} alt="" className={Styles.tabIcon} />
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          <div className={Styles.mobileContent}>
            <div className={Styles.imageContainer}>
              <img 
                src={services[activeService].image} 
                alt={services[activeService].title} 
                className={Styles.serviceImage}
              />
            </div>
            
            <div className={Styles.textContent}>
              <h3 className={Styles.serviceTitle}>{services[activeService].title}</h3>
              <p className={Styles.description}>{services[activeService].description}</p>
              
              <div className={Styles.materials}>
                <h4>Materialet Kryesore:</h4>
                <ul>
                  {services[activeService].materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={Styles.desktopContainer}>
          <div className={Styles.imageColumn}>
            <img 
              src={services[activeService].image} 
              alt={services[activeService].title} 
              className={Styles.serviceImage}
            />
          </div>

          <div className={Styles.contentColumn}>
            <div className={Styles.selector}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${Styles.selectorItem} ${index === activeService ? Styles.active : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className={Styles.selectorIcon}>
                    <img src={service.icon} alt="" />
                  </div>
                  <div className={Styles.selectorText}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={Styles.materialsDesktop}>
              <h4>Materialet Premium:</h4>
              <div className={Styles.materialGrid}>
                {services[activeService].materials.map((material, idx) => (
                  <div key={idx} className={Styles.materialCard}>
                    <div className={Styles.materialBadge}>0{idx + 1}</div>
                    {material}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}