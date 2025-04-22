"use client"
import Styles from './Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

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
        <nav className={`${Styles.navbar} ${visible ? Styles.visible : Styles.hidden}`}>
            <div className={Styles.logo}>
                <Link href="/">
                    <img 
                        src="/logo1.png" 
                        alt="Logo" 
                        className={Styles.logoImage}
                    />
                </Link>
            </div>
            <button 
                className={`${Styles.menuButton} ${isNavOpen ? Styles.active : ''}`} 
                onClick={toggleNav}
                aria-label={isNavOpen ? "Mbyll menunë" : "Hap menunë"}
            >
                <span className={Styles.menuBar}></span>
                <span className={Styles.menuBar}></span>
                <span className={Styles.menuBar}></span>
            </button>
            <ul className={`${Styles.navLinks} ${isNavOpen ? Styles.active : ''}`}>
                <li><Link href="/" className={Styles.navLink}>Home</Link></li>
                <li><Link href="/services" className={Styles.navLink}>Services</Link></li>
                <li><Link href="/products" className={Styles.navLink}>Products</Link></li>
                <li><Link href="/gallery" className={Styles.navLink}>Gallery</Link></li>
                <li><Link href="/contact" className={Styles.navLink}>Contact</Link></li>
            </ul>
        </nav>
    )
}