"use client";

import emailjs from '@emailjs/browser';
import styles from '../../../styles/Contact.module.css';
import { useState, useRef } from 'react';

export default function EmailForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Create refs for the input fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !isValidEmail(email) || !message) {
      setErrorMessage("Vennligst fyll ut alle feltene.");
      setSuccessMessage("");  // Clear success message if there's an error
      console.log('Validation failed');
      return;  // Exit the function to prevent sending email
    }

    // Reset error message since validation passed
    setErrorMessage("");

    emailjs
      .sendForm("desig4344.gmail.com", "template_6rs1lh8", e.target, { publicKey: "KyNlFb-WjIs15bWeo" })
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setSuccessMessage("Eposten har blitt sendt!");
          setErrorMessage("");  // Clear error message on success
          e.target.reset();  // Reset the form fields
        },
        (error) => {
          console.log('Failed to send email:', error);
          setErrorMessage("Noe gikk galt. Vennligst prøv igjen.");
          setSuccessMessage("");  // Clear success message if there's an error
        }
      );
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <form onSubmit={sendEmail}>
      <div className={styles.formInput}>
        <input type="text" className={styles.inputName} placeholder="Navn" name="user_name" ref={nameRef} />
      </div>
      <div className={styles.formInput}>
        <input type="email" className={styles.inputEmail} placeholder="Email" name="user_email" ref={emailRef} />
      </div>
      <div className={styles.formInput}>
        <textarea placeholder="Skriv meldingen din her" className={styles.textarea} name="user_message" ref={messageRef} />
      </div>
      <button className={styles.btnCommon} type="submit">Send Inn</button>
      {errorMessage && <div className={styles.errorMessage} style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div className={styles.successMessage} style={{ color: 'green' }}>{successMessage}</div>}
    </form>
  );
}
