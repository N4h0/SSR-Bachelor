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
    <Link legacyBehavior  href="/" >
      <a className={styles.navTekst} onClick={closeMenu}>Hjem</a>
    </Link>
    <Link legacyBehavior  href="/team"  >
      <a className={styles.navTekst} onClick={closeMenu}>Om oss</a>
    </Link>
    <Link legacyBehavior href="/tjenester" >
      <a className={styles.navTekst} onClick={closeMenu}>Tjenester</a>
    </Link>
    <Link legacyBehavior href="/informasjon"  >
      <a className={styles.navTekst} onClick={closeMenu}>Nyttig informasjon</a>
    </Link>
    <Link legacyBehavior href="/contact"  >
      <a className={styles.navTekst} onClick={closeMenu}>Kontakt oss</a>
    </Link>
  </div>

      <button className={styles.icon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default NavBar;