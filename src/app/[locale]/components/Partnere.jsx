// components/Partnere.js
"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../page.module.css";

const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 529,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 281,
      settings: {
        slidesToShow: 1, // Viser kun 1 logo for skjermer ≤ 281px
      },
    },
  ],
};

export default function Partnere() {
  return (
    <div className={styles.partnerBakgrunn}>
      <h2 className={styles.partnerTittel}>Våre partnere</h2>
      <Slider {...settings} className={`${styles.customerLogos} ${styles.bilder}`}>
        <div className={styles.bildet}>
          <a
            href="https://newdelhi.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./NewDelhi.WebP" alt="New Delhi logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://www.masalapolitics.no/?gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH53-Z1aKvYmQJG_BJj_xwWEKJM8jl2dqkMNMPt34kACI5SlTFKfzaZsaAqGEEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./MasalaPolitics.WebP" alt="Masala Politics logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://snappys.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Snappys.WebP" alt="Snappys logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://bighorn.no/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./BigHornSteak.WebP" alt="Big Horn Steak logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://takeitfrombaljit.no/?fbclid=IwAR0wmFMfXblrbUNLlzOqQuBBK7aAN1tls1UKwqCFQPeQRJ_au18rIvHFzA8_aem_Aa0LcFb5CLXNnyDEpiFm-pGGlM13nD5ImmACsHtxuoxRQj4wS7wPefXvN_QOw8xUlB3RD3l3JUsvc5v26yiKGp5O"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Baljit2.WebP" alt="Baljit2 logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://listentobaljit.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Baljit.WebP" alt="Baljit logo" />
          </a>
        </div>
        <div className={styles.bildet}>
          <a
            href="https://www.carwash.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./CarWash.WebP" alt="Car Wash logo" />
          </a>
        </div>
      </Slider>
    </div>
  );
}
