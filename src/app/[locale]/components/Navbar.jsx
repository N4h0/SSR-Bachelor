"use client";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/NavBar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('NavBar');

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'no' : 'en'; // Assuming you have 'en' and 'no' as your locales
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
        <button onClick={toggleLanguage} className={styles.languageButton}>
          {locale === 'en' ? 'NO' : 'EN'}
        </button>
      </div>
      <button className={styles.icon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default NavBar;
