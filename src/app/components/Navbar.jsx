"use client";
import { useState, useContext } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../../styles/NavBar.module.css"; // Correct CSS module import

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`${styles.topnav} ${isMenuOpen ? styles.responsive : ""}`}>
      <div className={styles.leftAlignedItems}>
        <Link href="/">
          <img className={styles.nav_img} src="../FirmaLogo.WebP" alt="M&N Regnskap Logo" />
        </Link>
      </div>

      <div className={styles.rightAlignedIitems}>
    <Link href="/" legacyBehavior onClick={closeMenu}>
      <a className={styles.navTekst}>Hjem</a>
    </Link>
    <Link href="/team" legacyBehavior onClick={closeMenu}>
      <a className={styles.navTekst}>Om oss</a>
    </Link>
    <Link href="/tjenester" legacyBehavior onClick={closeMenu}>
      <a className={styles.navTekst}>Tjenester</a>
    </Link>
    <Link href="/informasjon" legacyBehavior onClick={closeMenu}>
      <a className={styles.navTekst}>Nyttig informasjon</a>
    </Link>
    <Link href="/contact" legacyBehavior onClick={closeMenu}>
      <a className={styles.navTekst}>Kontakt oss</a>
    </Link>
  </div>

      <button className={styles.icon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default NavBar;
