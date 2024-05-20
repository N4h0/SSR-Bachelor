"use client";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/NavBar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const closeLanguageMenu = () => setIsLanguageMenuOpen(false);

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('NavBar');

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'no' : 'en';
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <div className={`${styles.topnav} ${isMenuOpen ? styles.responsive : ""}`}>
      <div className={styles.leftAlignedItems}>
        <Link href="/">
          <img className={styles.nav_img} src="../FirmaLogo.WebP" alt="M&N Regnskap Logo" />
        </Link>
      </div>

      <div className={styles.rightAlignedIitems}>
        <Link legacyBehavior href={`/${locale}/`}>
          <a className={styles.navTekst} onClick={closeMenu}>{t('home')}</a>
        </Link>
        <Link legacyBehavior href={`/${locale}/team`}>
          <a className={styles.navTekst} onClick={closeMenu}>{t('aboutUs')}</a>
        </Link>
        <Link legacyBehavior href={`/${locale}/tjenester`}>
          <a className={styles.navTekst} onClick={closeMenu}>{t('services')}</a>
        </Link>
        <Link legacyBehavior href={`/${locale}/informasjon`}>
          <a className={styles.navTekst} onClick={closeMenu}>{t('information')}</a>
        </Link>
        <Link legacyBehavior href={`/${locale}/contact`}>
          <a className={styles.navTekst} onClick={closeMenu}>{t('contactUs')}</a>
        </Link>
        <div className={styles.dropDown} onMouseEnter={toggleLanguageMenu} onMouseLeave={closeLanguageMenu}>
          <button className={styles.navTekst}>
            <img src={locale === 'no' ? "/norge.png" : "/usa.png"} alt={locale === 'no' ? "Norwegian Flag" : "US Flag"} />
            {locale === 'no' ? 'Norsk' : 'English'}
            <FontAwesomeIcon icon={isLanguageMenuOpen ? faChevronUp : faChevronDown} />
          </button>
          {isLanguageMenuOpen && (
            <div className={styles.dropDownContent}>
              <button onClick={() => { toggleLanguage(); closeLanguageMenu(); }}>
                <img src="/usa.png" alt="US Flag" /> English
              </button>
              <button onClick={() => { toggleLanguage(); closeLanguageMenu(); }}>
                <img src="/norge.png" alt="Norwegian Flag" />Norwegian
              </button>
            </div>
          )}
        </div>
      </div>
      <button className={styles.icon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default NavBar;
