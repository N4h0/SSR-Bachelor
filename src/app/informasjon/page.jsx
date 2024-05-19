"use client"

import styles from "../../../styles/Informasjon.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";

const PDF_FILE_URL = "https://n4h0.github.io/MN_Regnskap/kasseoppgjor.pdf";
const EXCEL_FILE_URL1 = "https://n4h0.github.io/MN_Regnskap/kassetelling.xlsx";
const EXCEL_FILE_URL2 = "https://n4h0.github.io/MN_Regnskap/ny_kassebok.xlsx";
const EXCEL_FILE_URL3 = "https://n4h0.github.io/MN_Regnskap/Firmabil_beregning_av_fordel.xlsx";
const EXCEL_FILE_URL4 = "https://n4h0.github.io/MN_Regnskap/Omsetningsrapport.xlsx";

function Frist() {

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <>
      <article className={styles.accountingDeadlines}>
        <h1 className={styles.accountingDeadlinesTitle}>Frister</h1>
        <div className={styles.accountingBox}>
          <h2 className={styles.accountingBoxTitle}>Årets regnskapsfrister</h2>
          <p className={styles.accountingBoxText}>
            Det er viktig å holde styr på frister og innleveringer når det gjelder ulike regnskapsoppgaver. Å holde seg oppdatert med disse fristene er avgjørende. Nedenfor følger en oversikt over de viktigste og mest vanlige fristene som bedriftseiere må ta hensyn til!
          </p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>Aksjonærregisteroppgaven</h3>
          <p className={styles.accountingBoxText}>
            <strong>Frist:</strong> 31. januar
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Hvem:</strong> Alle AS.
          </p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>Mva-frister</h3>
          <p className={styles.accountingBoxText}>
            <strong>Mva (annenhver måned)</strong>
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Frist:</strong> 10. apr. / 10. jun. / 31. aug. / 10. okt. / 10. des. / 10. feb
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Hvem:</strong> Alle mva-registrerte som ikke har årlig mva.
          </p>
          <p className={styles.mvaParagraph}>
            <strong>Mva (årlig)</strong>
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Frist:</strong> 10. mars
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Hvem:</strong> Alle som har årlig mva.
          </p>
          <p className={styles.accountingBoxText}>
            Årlig mva er noe foretak med under 1 million i årlig omsetning kan søke om.
          </p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>A-melding</h3>
          <p className={styles.accountingBoxText}>
            <strong>Frist:</strong> Hver måned (innen den 5. påfølgende måned).
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Hvem:</strong> Alle som utbetaler lønn.
          </p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>Forskuddsskatt</h3>
          <p className={styles.accountingBoxText}>
            <strong>Frist for ENK:</strong> 15. mar. / 15. jun. / 15. sept. / 15. des.
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Frist for AS:</strong> 15. feb. / 15. apr.
          </p>
          <p className={styles.accountingBoxText}>
            <strong>Hvem:</strong> Alle skattepliktige.
          </p>
        </div>
      </article>
      <div className={styles.downloadBoks}>
        <h3 className={styles.downloadBoksH3}>Skjemaer for regnskap</h3>
        <div className={styles.downloadSection}>
          <ul className={styles.downloadLinks}>
            {[
              { url: PDF_FILE_URL, label: "Kasseoppgjør (pdf)" },
              { url: EXCEL_FILE_URL1, label: "Kassetelling (excel)" },
              { url: EXCEL_FILE_URL2, label: "Kassebok (excel)" },
              { url: EXCEL_FILE_URL3, label: "Firmabil beregning av fordel (excel)" },
              { url: EXCEL_FILE_URL4, label: "Omsetningsrapport (excel)" }
            ].map(item => (
              <li key={item.url}>
                <a href={item.url} onClick={(event) => {
                  event.preventDefault();
                  downloadFileAtURL(item.url);
                }}>
                  <FontAwesomeIcon icon={faDownload} /> {/* FontAwesome ikonet her */}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Frist;
