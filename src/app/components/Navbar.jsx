"use client"
import { useState, useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './NavBar.module.css'; // Correct CSS module import

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
   

    return (
        <div className={`${styles.topnav} ${isMenuOpen ? styles.responsive : ''}`}>
            <div className={styles.leftAlignedItems}>
                <Link href="../Hjem">
                    <img src="../FirmaLogo.WebP" alt="M&N Regnskap Logo" />
                </Link>
            </div>

            <div className={styles.rightAlignedItems}>
                <Link href="../Hjem" onClick={closeMenu}>
                    <span className={styles.navTekst}>Hjem</span>
                </Link>
                <Link href="../om-oss" onClick={closeMenu}>
                    <span className={styles.navTekst}>Om oss</span>
                </Link>
                <Link href="../tjenester" onClick={closeMenu}>
                    <span className={styles.navTekst}>Tjenester</span>
                </Link>
                <Link href="../frister" onClick={closeMenu}>
                    <span className={styles.navTekst}>Nyttig informasjon</span>
                </Link>
                <Link href="../kontakt" onClick={closeMenu}>
                    <span className={styles.navTekst}>Kontakt oss</span>
                </Link>
                
            </div>

            <button className={styles.icon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    );
};

export default NavBar;
