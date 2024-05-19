//Dette er startsida


import Link from 'next/link';
import styles from "./page.module.css";
import Partnere from './components/Partnere'


function Homepage() {
  return (
    <>
      <div className={styles.bildeSeksjon}>
        <Bildet />
      </div>
      <div className={styles.regnskapsSeksjon}>
        <Regnskap />
      </div>
      <div className={styles.partnereSeksjon}>
        <Partnere />
      </div>
      <div className={styles.teamSeksjon}>
        <Møtoss />
      </div>
      <div className={styles.kontaktSeksjon}>
        <Kontakt />
      </div>
    </>
  );
}

function Bildet() {
  return (
    <>
      <img src="./HjemMainCompK.jpg" alt="" className={styles.imgStyle} />
      <div className={styles.pictureText}>
        <h1 className={styles.pictureH1}>M&N REGNSKAP</h1>
        <h2 className={styles.pictureH2}>Vi tar vare på regnskapet ditt!</h2>
        <Link href="/team">
          <button className={styles.pictureButton}>
            Om oss
          </button>
        </Link>
      </div>
    </>
  );
}

function Regnskap() {
  return (
    <>
      <h2 className={styles.regnskapsSeksjonH2}>Dine ambisjoner, vår ekspertise - Hvordan kan vi støtte deg?</h2>
      <div className={styles.regnskapsBoks}>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort1.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Regnskap</h3>
          <p className={styles.regnskapsKortP}>
            Løpende bokføring, årsoppgjør og Rapportering til Altinn.
          </p>
        </Link>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort2.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Rådgivning</h3>
          <p className={styles.regnskapsKortP}>
            Få assistanse fra regnskapseksperter for å få mest mulig ut av tiden og pengene dine.
          </p>
        </Link>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort3.Webp" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Lønn</h3>
          <p className={styles.regnskapsKortP}>
            Har du ansatte? Spar tid ved å la oss håndtere lønnsbehandling og rapportering til A-meldingen.
          </p>
        </Link>
        <Link href="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort4.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Skattemelding</h3>
          <p className={styles.regnskapsKortP}>
            Vi hjelper deg med dine private skattemeldinger enten elektronisk eller e-post.
          </p>
        </Link>
      </div>
      <div className={styles.sisteContainer}>
        <Link href="/tjenester" className={styles.regnskapsKnapp}>
          <span className={styles.regnskapsKnappTekst}>
            Mer Info
          </span>
        </Link>
      </div>
    </>
  );
}



function Møtoss() {
  return (
    <>
      <div className={styles.contactBox}>
        <div className={styles.contactHeader}>
          <h2 className={styles.contactHeaderH2}>Møt oss</h2>
        </div>
        <div className={styles.contactCard}>
          <img
            className={styles.contactImg}
            src="./MoosaRundComp.webp"
            alt="Bilde av Moosa, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)"
          />
          <h2 className={styles.contactCardH2}>MOOSA ALI RASHID</h2>
          <p className={styles.contactCardP}>Statsautorisert regnskapsfører</p>
        </div>
        <div className={styles.contactCard}>
          <img
            className={styles.contactImg}
            src="./NailaRundComp.webp"
            alt="Bilde av Naila, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)"
          />
          <h2 className={styles.contactCardH2}>NAILA SOHAIL KHOKHAR</h2>
          <p className={styles.contactCardP}>Statsautorisert regnskapsfører</p>
        </div>
      </div>
    </>
  );
}

function Kontakt() {
  return (
    <>
      <div className={styles.contactPicture}>
        <img
          src="./HjemsideKontaktOssComp.webp"
          alt="Bakgrunnsbilde av noen regnskapsbøker som ligger oppå hverandre."
        />
        <div className={styles.contactPicText}>
          <h1>Ønsker du å samarbeide med oss?</h1>
          <p>Konsentrer deg om det du er god på - Vi tar oss av regnskapet! Kontakt oss for en uforpliktende samtale.</p>
          <Link href="/contact">
            <button className={styles.kontaktKnapp}>
              Kontakt oss
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
