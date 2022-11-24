import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLocale } from "../hooks/useLocale";
import styles from "../styles/Project.module.css";

const Denpoh = () => {
  const router = useRouter();
  const { t, locale } = useLocale();

  return (
    <main id='denpoh' className={styles.container}>
      <h2>One touch Den-Poh</h2>
      <section className={styles.items}>
        <Link href='/' passHref>
          <a>
            <motion.img
              layoutId='Denpoh'
              className={styles.card}
              src='/assets/denpoh.svg'
              onClick={() => router.back()}
            />
          </a>
        </Link>
        <div className={styles.badge}>
          <img src="/assets/rp.svg" alt="" />
          <img src="/assets/py.svg" alt="" />
        </div>
        <div className={styles.text}>
          <p>{t.Project_Denpoh_1}</p>
        </div>
        <div className={styles.logoContainer}>
          <a
          href="https://github.com/khiz125/notification_with_raspberry_pi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.logo}
            src='/assets/github_b.png'
            alt="raspberrypie connecting LINE Notify"
          />
        </a>
        <button
            className={styles.backButton}
            onClick={() => router.back()}
          >
            <a className={styles.buttonLine}
            >Back to Project
            </a>
          </button>
        </div>
      </section>
    </main>

  )
}

export default Denpoh