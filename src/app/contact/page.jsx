import styles from '../../../styles/Contact.module.css';
import EmailForm from '../../../src/app/components/EmailForm';

function Contact() {
  return (
    <>
      <div className={styles.contactUsPage}>
        <section className={styles.heroContent}>
          <div className={styles.mainWrapper}>
            <div className={styles.heroBody}>
              <div className={styles.heroText}>
                <h1 className={styles.heroHeading}>Har du noe på hjertet?</h1>
                <p className={styles.heroP}>Vi gjør jobben vår vanskeligere, slik at det er lettere for deg. Vårt dedikerte team er klare for å lytte til dine behov, og gi deg den beste opplevelsen.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contact}>
          <div className={styles.mainWrapper}>
            <div className={styles.supports}>
              <div className={`${styles.supportCard} ${styles.first}`}>
                <img src="./KontaktOss1.WebP" className={styles.supportCardImage} />
                <h2 className={styles.supportCardH2}>Snakk med oss</h2>
                <span>Din tilbakemelding er viktig for oss. Vi er klare til å lytte og finne løsninger sammen.</span>
                <a className={styles.supportCardA} href="tel:+004740056898">+0047 40 05 68 98</a>
                <h2 className={styles.supportCardH2}>Når en er i nød</h2>
                <span>.. trenger man litt hjelp fra venner... eller MN Regnskap support. Ikke overtenk... vi er her for deg.</span>
              </div>
              <div className={`${styles.supportCard} ${styles.second}`}>
                <img src="./KontaktOss2.WebP" className={styles.supportCardImage} alt="Melding" />
                <h2 className={styles.supportCardH2}>Be om konsultasjon</h2>
                <span>Konsentrer deg om det du er god på – Vi tar oss av regnskapet! Ta kontakt med oss for en uforpliktende samtale.</span>
                <EmailForm />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.connect}>
          <div className={styles.mainWrapper}>
            <div className={styles.connectTitle}>
              <h2 className={styles.title}>Skal vi ta det over en kopp kaffe? ☕️</h2>
            </div>
            <div className={styles.connectMain}>
              <div className={styles.connectBody}>
                <div className={styles.mapBox}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.231473078393!2d10.841315276934159!3d59.92830116293287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd150a3273b%3A0xeb0005b15b49be33!2sM%20%26%20N%20Regnskap%20DA!5e0!3m2!1sno!2sno!4v1712682261082!5m2!1sno!2sno"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className={styles.connectDetail}>
                  <div className={styles.detailItem}>
                    <h3 className={styles.detailItemH3}>Hovedkontor</h3>
                    <span>Vollaveien 20 A, Oslo, 0668, Norge</span>
                  </div>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailItemH4}>Ring oss</h4>
                    <span>+0047 40 05 68 98</span>
                  </div>
                  <div className={`${styles.detailItem} ${styles.fax}`}>
                    <span>mn@mnregnskap.no</span>
                  </div>
                  <h4 className={styles.detailItemH4}>Organisasjonsnummer</h4>
                  <a className={styles.supportCardA} href="mailto:mn@mnregnskap.no">992 720 999</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
