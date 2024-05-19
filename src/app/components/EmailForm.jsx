"use client";

import emailjs from '@emailjs/browser';
import styles from '../../../styles/Contact.module.css';
import { useState } from 'react';

export default function EmailForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSucessMessage] = useState("");

    const sendEmail = (e) => {
         e.preventDefault();
   
        const name = document.querySelector('.input-name').value;
        const email = document.querySelector('.input-email').value;
        const message = document.querySelector('.textarea').value;

        if (!name || !isValidEmail(email) || !message) {
            setErrorMessage(textData.alert_message);
        } else {
            setErrorMessage("");
            setSucessMessage(textData.success_message)
        }

        emailjs
            .sendForm("desig4344.gmail.com", "template_6rs1lh8", e.target, { publicKey: "KyNlFb-WjIs15bWeo" })
            .then(
                () => {
                    /*
                    console.log('Eposten er sendt!');    //vis popup melding
                    setShowSuccessMessage(true);         //reset skjemaet etter vellykket sending
                    e.target.reset();
                    */
  
                    console.log('Suksess!');

                    if (name && isValidEmail(email) && message) {
                      
                        e.target.reset();
                        setSucessMessage("");
               
                    }
                   
                },
                (error) => {
                    console.log('Noe gikk galt:', error.text);
                    alert(textData.notSuccess_message)
                },
        );
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

    };

  return (
    <form onSubmit={sendEmail}>
      <div className={styles.formInput}>
        <input type="text" className={styles.inputName} placeholder="Navn" name="user_name" />
      </div>
      <div className={styles.formInput}>
        <input type="email" className={styles.inputEmail} placeholder="Email" name="user_email" />
      </div>
      <div className={styles.formInput}>
        <textarea placeholder="Skriv meldingen din her" className={styles.textarea} name="user_message" />
      </div>
      <button className={styles.btnCommon} type="submit">Send Inn</button>
      {errorMessage && <div className={styles.errorMessage} style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div className={styles.errorMessage} style={{ color: 'green' }}>{successMessage}</div>}
    </form>
  );
}
