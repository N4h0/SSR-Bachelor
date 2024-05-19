import React from 'react';

import styles from "../../../styles/Team.module.css";

function Team() {
  return (
    <>
      <Test />
    </>
  );
}

function Test() {
  return (
    <>
      <div className={styles.aboutUs_box}>
        <div className={`${styles.aboutUs_box_hero} ${styles.first}`}>
          <div className={styles.aboutUs_box_hero_text} style={{ gridArea: "tekst" }}>
            <h1 className={styles.aboutUs_title}>Vår historie</h1>
            <p className={styles.aboutUs_text}>M&N Regnskap har en sentral beliggenhet på Alna og har omfattende erfaring med regnskapsførsel i ulike bransjer. Vi betjener kunder i Oslo, og andre deler av Norge.</p>
            <p className={styles.aboutUs_text}>Vårt team består av høyt utdannede medarbeidere med lang erfaring innen feltet. Selskapet ble grunnlagt av Moosa Ali Rashid og Naila Sohail Khokhar i 2008, begge med utdanning innen revisjon.</p>
          </div>
          <div className={styles.aboutUs_box_hero_image} style={{ gridArea: "bilde" }}>
            <div className={styles.bilde_seksjon_img}>
              <img src="./OmOss1Comp.webp" alt="" className={styles.img_style} />
            </div>
          </div>
        </div>

        <div className={`${styles.aboutUs_box_hero} ${styles.second}`}>
          <div className={styles.aboutUs_box_hero_image} style={{ gridArea: "bilde" }}>
            <div className={styles.bilde_seksjon_img}>
              <img src="./OmOss2Comp.webp" alt="" className={styles.img_style} />
            </div>
          </div>
          <div className={styles.aboutUs_box_hero_text} style={{ gridArea: "tekst" }}>
            <h1 className={styles.aboutUs_title}>Om oss</h1>
            <p className={styles.aboutUs_text}>M&N Regnskap har en høy faglig standard og gode rutiner for kvalitetssikring, da vi er oppmerksomme på at regnskapsføring er forbundet med strenge krav og stramme tidsfrister. Vi tilbyr tjenester fra A til Å og jobber i dag i stor grad digitalt, men vi tilpasser oss også klientenes ønsker om papirbaserte løsninger. La oss ta oss av regnskapet, slik at du kan fokusere på det du er best på!</p>
            <div className={styles.bold_text}>
              <p className={styles.aboutUs_text}>Konsentrer deg om det du er god på – Vi tar oss av regnskapet!</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.section_white}>
        <h2 className={styles.section_title}>Vårt team</h2>
        <p className={styles.section_subtitle}></p>
        <div className="container">
          <div className="row">
          <div className="col-sm-12 col-md-6">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="./MoosaComp.jpg" className={styles.team_img} alt="pic" />
                </div>
                <h3 className={styles.team_item_heading}>Moosa Ali Rashid</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>Statsautorisert regnskapsfører</p>
                  <p className={styles.team_info_text}>Ferdig utdannet revisor og statsautorisert regnskapsfører med over 19 års bransjeerfaring. Han er også en anerkjent kontrollør i Regnskap Norge, og hans ekspertise og lidenskap for nøyaktighet gjenspeiles i hvert oppdrag han utfører. Moosa leverer skreddersydde regnskapsløsninger med fokus på kvalitet og etterlevelse av gjeldende regelverk. Med hans omfattende kompetanse kan du være trygg på at dine regnskapsmessige behov blir håndtert profesjonelt og effektivt</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="./NailaComp.jpg" className={styles.team_img} alt="pic" />
                </div>
                <h3 className={styles.team_item_heading}>Naila Sohail Khokhar</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>Statsautorisert regnskapsfører</p>
                  <p className={styles.team_info_text}> Naila har utdannelse fra Handelshøyskolen BI i Oslo. Hun er en dyktig revisor, og autorisert regnskapsfører med en imponerende karriere på over 24 år i bransjen. Hun har opparbeidet seg anerkjennelse, og hennes engasjement for nøyaktighet og kvalitet skinner gjennom i hvert oppdrag hun tar på seg. Naila er dedikert til å levere skreddersydde regnskapsløsninger som oppfyller høye standarder og følger gjeldende regelverk til punkt og prikke. Hun har spesialkompetanse innen regnskapsføring for leger og tannleger. </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="./HaseebComp.jpg" className={styles.team_img} alt="pic" />
                </div>
                <h3 className={styles.team_item_heading}>Haseeb Talib</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>Regnskapfører</p>
                  <p className={styles.team_info_text}> Haseeb er en erfaren regnskapsfører med ni års erfaring i bransjen. Han bryr seg om presisjon og er særdeles dedikert, og utmerker seg i å utvikle skreddersydde regnskapsløsninger som møter strenge regulatoriske standarder. </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="./IbrahimComp.jpg" className={styles.team_img} alt="pic" />
                </div>
                <h3 className={styles.team_item_heading}>Ibrahim Mughal</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>Autorisert regnskapsfører</p>
                  <p className={styles.team_info_text}> Ibrahim har over åtte års erfaring med prosjektledelse og strategisk planlegging. Hans ekspertise i å lede tverrfaglige team og hans detaljfokus gjør ham uvurderlig i håndtering av komplekse forretningsutfordringer. </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="./AsadComp.webp" className={styles.team_img} alt="pic" />
                </div>
                <h3 className={styles.team_item_heading}>Asad Haider Khan</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>Regnskapfører</p>
                  <p className={styles.team_info_text}> Asad er en dyktig & nøyaktig regnskapsfører og har 7 års erfaring innen regnskap og revisjon hos oss. Han er dyktig i finansiell rapportering og skattesaker, og bidrar betydelig til våre kunders økonomiske strategier.</p>
                </div>
              </div>
            </div>
            <div className={`${styles.col_sm_12} ${styles.col_md_3}`}>
              <div className={styles.team_item}>
                <div className={styles.text_center}>
                  <img src="./NitashaComp.jpg" className={styles.team_img} alt="pic" />
                </div>
                <h3 className={styles.team_item_heading}>Nitasha Khan</h3>
                <div className={styles.team_info}>
                  <p className={styles.team_item_title}>Regnskaps medarbeidere</p>
                  <p className={styles.team_info_text}> Nitasha er vårt nyeste medlem og har vært en del av teamet vårt i 2 år. Hun en frisk kraft og studerer på Handelshøyskolen BI. Hun er spesielt talentfull innen økonomisk analyse og intern revisjon.</p>
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
