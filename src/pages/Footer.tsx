import React from 'react'
// import Image from 'next/image';
// import GithubLogo from '../../public/assets/github.png';
// import LinkedinLogo from '../../public/assets/linkedin.png';
import { useLocale } from "../hooks/useLocale";
import styles from "../styles/Footer.module.css";

const Footer = () => {

  const { t, locale } = useLocale();

  return (
    <main id="footer" className={styles.footerContainer}>
      <section className={styles.textContainer}>
        <p className={styles.text}>{t.Footer_1}</p>
      </section>
      <section className={styles.logo}>
        <a
          href="https://github.com/khiz125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.image}
            src='/assets/github.png'
            alt="Github logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kenichiro-hirose-465b504a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.image}
            src='/assets/linkedin.png'
            alt="Linkedin Logo"
          />
        </a>
      </section>
    </main>
  )
}

export default Footer