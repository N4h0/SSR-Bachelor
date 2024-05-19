import { useTranslations } from 'next-intl';
import styles from "../../../styles/Tjenester.module.css";

function Tjenester() {
    const t = useTranslations('Services');
    return (
        <>
            {/* BILDET OG OVERSKRIFTEN TIL TJENESTER SIDEN */}
            <div className={styles.helContainer}>
                <div className={styles.helVenstre}>
                    <img src="../../MoosaTjenesterBildeComp.jpg" alt={t('moosaAlt')} className={styles.MoosaTjenesterBilde} />
                </div>
                <div className={styles.helHøyre}>
                    <h1 className={styles.tjenesterTittel}>{t('servicesTitle')}</h1>
                    <p className={styles.tjenesterParagraf}>{t('servicesDescription')}</p>
                </div>
            </div>

            {/* HER ER ALLE KORTENE SIN INFORMASJON */}
            <div className={styles.alleKort}>
                {/* FØRSTE KORT */}
                <div className={styles.førsteBoks}>
                    <div className={styles.førsteKort}>
                        <div className={styles.kortInnhold}>
                            <h2>{t('accounting')}</h2>
                            <p>{t('accountingDescription1')}</p>
                            <p>{t('accountingDescription2')}</p>
                        </div>
                    </div>
                </div>

                {/* ANDRE KORT */}
                <div className={styles.andreBoks}>
                    <div className={styles.andreKort}>
                        <div className={styles.kortInnhold}>
                            <h2>{t('consulting')}</h2>
                            <p>{t('consultingDescription1')}</p>
                            <p>{t('consultingDescription2')}</p>
                        </div>
                    </div>
                </div>

                {/* TREDJE KORT */}
                <div className={styles.tredjeBoks}>
                    <div className={styles.tredjeKort}>
                        <div className={styles.kortInnhold}>
                            <h2>{t('payroll')}</h2>
                            <p>{t('payrollDescription1')}</p>
                            <p>{t('payrollDescription2')}</p>
                            <p>{t('payrollDescription3')}</p>
                        </div>
                        <div className={styles.førsteAndre}>
                            <img src="../../HaseebTjenesterComp.jpg" alt={t('haseebAlt')} className={styles.HaseebTjenesterBilde} />
                        </div>
                    </div>
                </div>

                {/* FJERDE KORT */}
                <div className={styles.fjerdeBoks}>
                    <div className={styles.fjerdeKort}>
                        <div className={styles.kortInnhold}>
                            <h2>{t('taxReturn')}</h2>
                            <p>{t('taxReturnDescription1')}</p>
                            <p>{t('taxReturnDescription2')}</p>
                            <p>{t('taxReturnDescription3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tjenester;
