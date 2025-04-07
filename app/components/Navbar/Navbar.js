"use client"

import Styles from './Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > prevScrollPos;
            
            if (currentScrollPos > 500 && isScrollingDown) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  return (
    <div className={`${Styles.navbar} ${visible ? Styles.visible : Styles.hidden}`}>
        <div className={Styles.logo}>
            <Link href="/">
                <img src="/Designer.png" alt="Logo" width={150} height={50} />
            </Link>
        </div>
        <button className={Styles.menuButton} onClick={toggleNav}>
            <img src="/hamburger.svg" alt="Menu Icon" width={30} height={30} />
        </button>
            <ul className={`${Styles.navLinks} ${isNavOpen ? Styles.active : ''}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
    </div>
  )
}
