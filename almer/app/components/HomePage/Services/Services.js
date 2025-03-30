"use client"

import React, { useState, useEffect } from 'react';
import Styles from './Services.module.css';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
    {
        title: "Sallon",
        icon: "/sofa.png",
        image: "/livingServices.jpg",
        description: "Mobilje funksionale dhe elegante për çdo hapësirë. Dizajne moderne dhe klasike të personalizuara për ju.",
        link: "/services"
    },
    {
        title: "Kuzhine",
        icon: "/sink.png",
        image: "/kitchenServices.jpg",
        description: "Kuzhina të ndërtuara me material cilësor dhe dizajn unik. Optimizim i hapësirës për komoditet maksimal.",
        link: "/services"
    },
    {
        title: "Dhoma Gjumi",
        icon: "/bed.png",
        image: "/bedServices.jpg",
        description: "Krijoni një ambient relaksues dhe të ngrohtë për gjumin tuaj. Mobilje të personalizuara për rehati dhe stil.",
        link: "/services"
    },
    {
        title: "Dyer Dritare",
        icon: "/door.png",
        image: "/doorServices.jpg",
        description: "Dyer druri dhe alumini me cilësi të lartë. Dizajn modern me siguri dhe izolim maksimal.",
        link: "/services"
    }
];

export default function Services() {
    const [activeCard, setActiveCard] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Client-side check
        setIsMobile(window.innerWidth <= 768);
        
        const handleClickOutside = (e) => {
            if (isMobile && !e.target.closest(`.${Styles.servicesCard}`)) {
                setActiveCard(null);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleClickOutside);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobile]);

    const handleCardClick = (index) => {
        if (isMobile) {
            setActiveCard(activeCard === index ? null : index);
        }
    };

    return (
        <section className={Styles.services} id="services">
            <div className={Styles.servicesContainer}>
                <div className={Styles.servicesHeader}>
                    <h1>Sherbimet Tona</h1>
                </div>
                
                <div className={Styles.servicesContent}>
                    {servicesData.map((service, index) => (
                        <article 
                            key={index}
                            className={`${Styles.servicesCard} ${activeCard === index ? Styles.active : ''}`}
                            onClick={() => handleCardClick(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Shiko detajet për ${service.title}`}
                        >
                            <div className={Styles.cardFront}>
                                <Image 
                                    src={service.icon}
                                    alt={service.title}
                                    width={100}
                                    height={100}
                                    className={Styles.serviceIcon}
                                />
                                <h2>{service.title}</h2>
                                {isMobile && (
                                    <span className={Styles.mobileIndicator}>🞃</span>
                                )}
                            </div>

                            <div className={Styles.cardBack}>
                                <Image 
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={Styles.cardImage}
                                    priority
                                />
                                <div className={Styles.cardContent}>
                                    <h2>{service.title}</h2>
                                    <p className={Styles.cardDescription}>{service.description}</p>
                                    <Link 
    href={service.link} 
    passHref
    legacyBehavior
>
    <a 
        className={Styles.servicesButton}
        onClick={(e) => {
            e.stopPropagation();
            if (isMobile) {
                setActiveCard(null);
            }
        }}
    >
        Shiko më shumë
    </a>
</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}