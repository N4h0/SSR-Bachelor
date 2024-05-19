import { useTranslations } from 'next-intl';
import React from 'react';
import styles from "../../../styles/Team.module.css";

function Team() {
  const t = useTranslations('Team');
  return (
    <>
      <Test t={t} />
    </>
  );
}

function Test({ t }) {
  return (
    <>
      <div className={styles.aboutUs_box}>
        <div className={`${styles.aboutUs_box_hero} ${styles.first}`}>
          <div className={styles.aboutUs_box_hero_text} style={{ gridArea: "tekst" }}>
            <h1 className={styles.aboutUs_title}>{t('ourHistoryTitle')}</h1>
            <p className={styles.aboutUs_text}>{t('ourHistoryDescription1')}</p>
            <p className={styles.aboutUs_text}>{t('ourHistoryDescription2')}</p>
          </div>
          <div className={styles.aboutUs_box_hero_image} style={{ gridArea: "bilde" }}>
            <div className={styles.bilde_seksjon_img}>
              <img src="../../OmOss1Comp.webp" alt={t('historyImgAlt')} className={styles.img_style} />
            </div>
          </div>
        </div>

        <div className={`${styles.aboutUs_box_hero} ${styles.second}`}>
          <div className={styles.aboutUs_box_hero_image} style={{ gridArea: "bilde" }}>
            <div className={styles.bilde_seksjon_img}>
              <img src="../../OmOss2Comp.webp" alt={t('aboutImgAlt')} className={styles.img_style} />
            </div>
          </div>
          <div className={styles.aboutUs_box_hero_text} style={{ gridArea: "tekst" }}>
            <h1 className={styles.aboutUs_title}>{t('aboutUsTitle')}</h1>
            <p className={styles.aboutUs_text}>{t('aboutUsDescription1')}</p>
            <div className={styles.bold_text}>
              <p className={styles.aboutUs_text}>{t('aboutUsDescription2')}</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.section_white}>
        <h2 className={styles.section_title}>{t('teamTitle')}</h2>
        <p className={styles.section_subtitle}></p>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="../../MoosaComp.jpg" className={styles.team_img} alt={t('moosaAlt')} />
                </div>
                <h3 className={styles.team_item_heading}>Moosa Ali Rashid</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>{t('moosaTitle')}</p>
                  <p className={styles.team_info_text}>{t('moosaDescription')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="../../NailaComp.jpg" className={styles.team_img} alt={t('nailaAlt')} />
                </div>
                <h3 className={styles.team_item_heading}>Naila Sohail Khokhar</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>{t('nailaTitle')}</p>
                  <p className={styles.team_info_text}>{t('nailaDescription')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="../../HaseebComp.jpg" className={styles.team_img} alt={t('haseebAlt')} />
                </div>
                <h3 className={styles.team_item_heading}>Haseeb Talib</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>{t('haseebTitle')}</p>
                  <p className={styles.team_info_text}>{t('haseebDescription')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="../../IbrahimComp.jpg" className={styles.team_img} alt={t('ibrahimAlt')} />
                </div>
                <h3 className={styles.team_item_heading}>Ibrahim Mughal</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>{t('ibrahimTitle')}</p>
                  <p className={styles.team_info_text}>{t('ibrahimDescription')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="../../AsadComp.webp" className={styles.team_img} alt={t('asadAlt')} />
                </div>
                <h3 className={styles.team_item_heading}>Asad Haider Khan</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>{t('asadTitle')}</p>
                  <p className={styles.team_info_text}>{t('asadDescription')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="../../NitashaComp.jpg" className={styles.team_img} alt={t('nitashaAlt')} />
                </div>
                <h3 className={styles.team_item_heading}>Nitasha Khan</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>{t('nitashaTitle')}</p>
                  <p className={styles.team_info_text}>{t('nitashaDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
