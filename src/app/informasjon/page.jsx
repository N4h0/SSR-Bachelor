import styles from "../../../styles/Informasjon.module.css";
import DownloadLinks from '../../../src/app/components/DownloadLinks'

function Frist() {
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
      <DownloadLinks />
    </>
  );
}

export default Frist;
