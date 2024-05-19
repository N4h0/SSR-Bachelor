import styles from "../../../styles/Tjenester.module.css";

function Tjenester() {
    return (
        <>
        {/* BILDET OG OVERSKRIFTEN TIL TJENESTER SIDEN */}
        <div className={styles.helContainer}>
            <div className={styles.helVenstre}>
                <img src="MoosaTjenesterBildeComp.jpg" alt="Bilde av Moosa på tjenester siden" className={styles.MoosaTjenesterBilde} />
            </div>
            <div className={styles.helHøyre}>
                <h1 className={styles.tjenesterTittel}>Vi hjelper deg innen en bred mengde tjenester</h1>
                <p className={styles.tjenesterParagraf}>Blant annet hjelper vi med regnskap, rådgivning, lønn og skattemelding. Les videre for flere detaljer.</p>
            </div>
        </div>

        {/* HER ER ALLE KORTENE SIN INFORMASJON */}
        <div className={styles.alleKort}>
            {/* FØRSTE KORT */}
            <div className={styles.førsteBoks}>
                <div className={styles.førsteKort}>
                    <div className={styles.kortInnhold}>
                        <h2>Regnskap</h2>
                        <p>Løpende bokføring, årsoppgjør og rapportering til Altinn. Regnskapstjenester omfatter en rekke viktige oppgaver for å sikre god økonomistyring og rapportering for bedrifter og organisasjoner.</p>
                        <p>Dette inkluderer løpende bokføring, som er kontinuerlig registrering og oppdatering av økonomiske transaksjoner som kjøp, salg og betalinger. Årsoppgjør er en essensiell del av regnskapsprosessen, der regnskapsåret avsluttes og alle økonomiske data samles og analyseres for å lage årsregnskapet.</p>
                    </div>
                </div>
            </div>

            {/* ANDRE KORT */}
            <div className={styles.andreBoks}>
                <div className={styles.andreKort}>
                    <div className={styles.kortInnhold}>
                        <h2>Rådgivning</h2>
                        <p>Få assistanse fra regnskapseksperter for å få mest mulig ut av tiden og pengene dine. Rådgivning innen regnskap gir deg muligheten til å få profesjonell assistanse fra erfarne regnskapseksperter.</p>
                        <p>Ved å benytte deg av regnskapsrådgivning kan du maksimere effektiviteten i bruk av både tid og ressurser. Ekspertrådgivning innen regnskap hjelper deg med å optimalisere din økonomiske situasjon og gjøre kloke beslutninger som sikrer best mulig utbytte av dine midler.</p>                
                    </div>
                </div>
            </div>

            {/* TREDJE KORT */}
            <div className={styles.tredjeBoks}>
                <div className={styles.tredjeKort}>
                    <div className={styles.kortInnhold}>
                        <h2>Lønn</h2>
                        <p>Har du ansatte? Spar tid ved å overlate lønnsbehandlingen og rapporteringen til A-meldingen til oss.</p>
                        <p>Med våre tjenester tar vi oss av alle aspekter ved lønnsadministrasjonen, inkludert beregning av lønn, utbetaling, rapportering av skattetrekk og trygdeavgifter, samt innrapportering til A-meldingen.</p>
                        <p>Du kan stole på våre regnskapseksperter for nøyaktig og effektiv håndtering av lønnsprosessen, slik at du kan fokusere på å drive virksomheten din.</p>
                    </div> 
                    <div className={styles.førsteAndre}>
                        <img src="HaseebTjenesterComp.jpg" alt="Haseeb bilde tjenester side" className={styles.HaseebTjenesterBilde} />
                    </div>
                </div>
            </div>

            {/* FJERDE KORT */}
            <div className={styles.fjerdeBoks}>
                <div className={styles.fjerdeKort}>
                    <div className={styles.kortInnhold}>
                        <h2>Skattemelding</h2>
                        <p>Vi hjelper deg med dine private skattemeldinger, enten elektronisk eller på papir.</p>
                        <p>Skattemelding er en viktig del av personlig økonomi, og vi er her for å gjøre den prosessen enklere for deg. Enten det er elektronisk eller på papir, kan våre regnskapseksperter veilede deg gjennom dine private skattemeldinger.</p>
                        <p>Ta kontakt med oss når som helst – vi sikrer alltid din tilfredshet.</p>           
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Tjenester;
