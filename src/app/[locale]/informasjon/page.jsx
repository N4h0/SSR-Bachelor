import { useTranslations } from 'next-intl';
import styles from "../../../styles/Informasjon.module.css";
import DownloadLinks from '../../../../src/app/[locale]/components/DownloadLinks';

function Frist() {
  const t = useTranslations('Information');
  return (
    <>
      <article className={styles.accountingDeadlines}>
        <h1 className={styles.accountingDeadlinesTitle}>{t('deadlinesTitle')}</h1>
        <div className={styles.accountingBox}>
          <h2 className={styles.accountingBoxTitle}>{t('yearlyDeadlinesTitle')}</h2>
          <p className={styles.accountingBoxText}>{t('yearlyDeadlinesDescription')}</p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>{t('shareholderTaskTitle')}</h3>
          <p className={styles.accountingBoxText}><strong>{t('deadline')}</strong> {t('shareholderTaskDeadline')}</p>
          <p className={styles.accountingBoxText}><strong>{t('who')}</strong> {t('shareholderTaskWho')}</p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>{t('vatDeadlinesTitle')}</h3>
          <p className={styles.accountingBoxText}><strong>{t('vatEveryTwoMonths')}</strong></p>
          <p className={styles.accountingBoxText}><strong>{t('deadline')}</strong> {t('vatEveryTwoMonthsDeadline')}</p>
          <p className={styles.accountingBoxText}><strong>{t('who')}</strong> {t('vatEveryTwoMonthsWho')}</p>
          <p className={styles.mvaParagraph}><strong>{t('vatYearly')}</strong></p>
          <p className={styles.accountingBoxText}><strong>{t('deadline')}</strong> {t('vatYearlyDeadline')}</p>
          <p className={styles.accountingBoxText}><strong>{t('who')}</strong> {t('vatYearlyWho')}</p>
          <p className={styles.accountingBoxText}>{t('vatYearlyDescription')}</p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>{t('incomeReportingTitle')}</h3>
          <p className={styles.accountingBoxText}><strong>{t('deadline')}</strong> {t('incomeReportingDeadline')}</p>
          <p className={styles.accountingBoxText}><strong>{t('who')}</strong> {t('incomeReportingWho')}</p>
        </div>
        <div className={styles.accountingBox}>
          <h3 className={styles.accountingBoxH3}>{t('advanceTaxTitle')}</h3>
          <p className={styles.accountingBoxText}><strong>{t('advanceTaxDeadlineENK')}</strong> {t('advanceTaxENK')}</p>
          <p className={styles.accountingBoxText}><strong>{t('advanceTaxDeadlineAS')}</strong> {t('advanceTaxAS')}</p>
          <p className={styles.accountingBoxText}><strong>{t('who')}</strong> {t('advanceTaxWho')}</p>
        </div>
      </article>
      <DownloadLinks />
    </>
  );
}

export default Frist;
