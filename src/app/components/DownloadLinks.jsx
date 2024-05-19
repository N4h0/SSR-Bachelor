"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from "../../../styles/Informasjon.module.css";

const PDF_FILE_URL = "https://n4h0.github.io/MN_Regnskap/kasseoppgjor.pdf";
const EXCEL_FILE_URL1 = "https://n4h0.github.io/MN_Regnskap/kassetelling.xlsx";
const EXCEL_FILE_URL2 = "https://n4h0.github.io/MN_Regnskap/ny_kassebok.xlsx";
const EXCEL_FILE_URL3 = "https://n4h0.github.io/MN_Regnskap/Firmabil_beregning_av_fordel.xlsx";
const EXCEL_FILE_URL4 = "https://n4h0.github.io/MN_Regnskap/Omsetningsrapport.xlsx";

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

export default function DownloadLinks() {
  return (
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
  );
}
