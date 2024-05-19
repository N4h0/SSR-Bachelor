import {useTranslations} from 'next-intl';
import Link from 'next/link';
import styles from "./page.module.css";
import Partnere from './components/Partnere'

function Homepage() {
  const t = useTranslations('Index');
  return (
    <>
      <div className={styles.bildeSeksjon}>
        <Bildet t={t} />
      </div>
      <div className={styles.regnskapsSeksjon}>
        <Regnskap t={t} />
      </div>
      <div className={styles.partnereSeksjon}>
        <Partnere />
      </div>
      <div className={styles.teamSeksjon}>
        <Møtoss t={t} />
      </div>
      <div className={styles.kontaktSeksjon}>
        <Kontakt t={t} />
      </div>
    </>
  );
}

function Bildet({ t }) {
  return (
    <>
      <img src="./HjemMainCompK.jpg" alt="" className={styles.imgStyle} />
      <div className={styles.pictureText}>
        <h1 className={styles.pictureH1}>{t('mainTitle')}</h1>
        <h2 className={styles.pictureH2}>{t('mainSubtitle')}</h2>
        <Link href="/team">
          <button className={styles.pictureButton}>
            {t('aboutUs')}
          </button>
        </Link>
      </div>
    </>
  );
}

function Regnskap({ t }) {
  return (
    <>
      <h2 className={styles.regnskapsSeksjonH2}>{t('accountingTitle')}</h2>
      <div className={styles.regnskapsBoks}>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort1.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>{t('accounting')}</h3>
          <p className={styles.regnskapsKortP}>
            {t('accountingDescription')}
          </p>
        </Link>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort2.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>{t('consulting')}</h3>
          <p className={styles.regnskapsKortP}>
            {t('consultingDescription')}
          </p>
        </Link>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort3.Webp" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>{t('payroll')}</h3>
          <p className={styles.regnskapsKortP}>
            {t('payrollDescription')}
          </p>
        </Link>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort4.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>{t('taxReporting')}</h3>
          <p className={styles.regnskapsKortP}>
            {t('taxReportingDescription')}
          </p>
        </Link>
      </div>
      <div className={styles.sisteContainer}>
        <Link href="/tjenester" className={styles.regnskapsKnapp}>
          <span className={styles.regnskapsKnappTekst}>
            {t('moreInfo')}
          </span>
        </Link>
      </div>
    </>
  );
}

function Møtoss({ t }) {
  return (
    <>
      <div className={styles.contactBox}>
        <div className={styles.contactHeader}>
          <h2 className={styles.contactHeaderH2}>{t('meetUs')}</h2>
        </div>
        <div className={styles.contactCard}>
          <img
            className={styles.contactImg}
            src="./MoosaRundComp.webp"
            alt={t('moosaAlt')}
          />
          <h2 className={styles.contactCardH2}>MOOSA ALI RASHID</h2>
          <p className={styles.contactCardP}>{t('authorizedAccountant')}</p>
        </div>
        <div className={styles.contactCard}>
          <img
            className={styles.contactImg}
            src="./NailaRundComp.webp"
            alt={t('nailaAlt')}
          />
          <h2 className={styles.contactCardH2}>NAILA SOHAIL KHOKHAR</h2>
          <p className={styles.contactCardP}>{t('authorizedAccountant')}</p>
        </div>
      </div>
    </>
  );
}

function Kontakt({ t }) {
  return (
    <>
      <div className={styles.contactPicture}>
        <img
          src="./HjemsideKontaktOssComp.webp"
          alt={t('contactBgAlt')}
        />
        <div className={styles.contactPicText}>
          <h1>{t('collaborateTitle')}</h1>
          <p>{t('collaborateSubtitle')}</p>
          <Link href="/contact">
            <button className={styles.kontaktKnapp}>
              {t('contactUs')}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;