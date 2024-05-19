//Dette er startsida
"use client"
import { useEffect } from "react";
import Link from 'next/link';

import styles from "./page.module.css";

function scrollToTop() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
}

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
        <Link to="/om-oss">
          <button className={styles.pictureButton} onClick={scrollToTop}>
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
      <h2>Dine ambisjoner, vår ekspertise - Hvordan kan vi støtte deg?</h2>
      <div className={styles.regnskapsBoks}>
        <Link to="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort1.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Regnskap</h3>
          <p className={styles.regnskapsKortP}>
            Løpende bokføring, årsoppgjør og Rapportering til Altinn.
          </p>
        </Link>
        <Link to="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort2.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Rådgivning</h3>
          <p className={styles.regnskapsKortP}>
            Få assistanse fra regnskapseksperter for å få mest mulig ut av tiden og pengene dine.
          </p>
        </Link>
        <Link to="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort3.Webp" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Lønn</h3>
          <p className={styles.regnskapsKortP}>
            Har du ansatte? Spar tid ved å la oss håndtere lønnsbehandling og rapportering til A-meldingen.
          </p>
        </Link>
        <Link to="/tjenester" className={styles.regnskapsKort}>
          <img src="./HjemKort4.WebP" alt="" loading="lazy" />
          <h3 className={styles.regnskapsKortH3}>Skattemelding</h3>
          <p className={styles.regnskapsKortP}>
            Vi hjelper deg med dine private skattemeldinger enten elektronisk eller e-post.
          </p>
        </Link>
      </div>
      <div className={styles.sisteContainer}>
        <Link className={styles.regnskapsKnapp} to="/tjenester">
          <span className={styles.regnskapsKnappTekst} onClick={scrollToTop}>
            Mer Info
          </span>
        </Link>
      </div>
    </>
  );
}

function Partnere() {
  useEffect(() => {
    $(document).ready(function () {
      $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 529,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 281,
            settings: {
              slidesToShow: 1, // Viser kun 1 logo for skjermer ≤ 281px
            },
          },
        ],
      });
    });
  }, []);

  return (
    <div className={styles.partnerBakgrunn}>
      <h2 className={styles.partnerTittel}>Våre partnere</h2>
      <section className={`${styles.customerLogos} ${styles.bilder}`}>
        <div className={styles.bildet}>
          <a
            href="https://newdelhi.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./NewDelhi.WebP" alt="New Delhi logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://www.masalapolitics.no/?gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH53-Z1aKvYmQJG_BJj_xwWEKJM8jl2dqkMNMPt34kACI5SlTFKfzaZsaAqGEEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./MasalaPolitics.WebP" alt="Masala Politics logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://snappys.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Snappys.WebP" alt="Snappys logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://bighorn.no/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./BigHornSteak.WebP" alt="Big Horn Steak logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://takeitfrombaljit.no/?fbclid=IwAR0wmFMfXblrbUNLlzOqQuBBK7aAN1tls1UKwqCFQPeQRJ_au18rIvHFzA8_aem_Aa0LcFb5CLXNnyDEpiFm-pGGlM13nD5ImmACsHtxuoxRQj4wS7wPefXvN_QOw8xUlB3RD3l3JUsvc5v26yiKGp5O"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Baljit2.WebP" alt="Baljit2 logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://listentobaljit.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Baljit.WebP" alt="Baljit logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://www.carwash.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./CarWash.WebP" alt="Car Wash logo" />
          </a>
        </div>
      </section>
    </div>
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
          <Link to="/kontakt">
            <button className={styles.kontaktKnapp} onClick={scrollToTop}>
              Kontakt oss
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
