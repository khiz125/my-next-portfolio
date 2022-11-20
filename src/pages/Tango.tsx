import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLocale } from "../hooks/useLocale";
import styles from "../styles/Project.module.css";

const Tango: React.FC = () => {
  const router = useRouter();
  const { t, locale } = useLocale();

  return (
    <main className={styles.container}>
      <h2 className={styles.text}>Tango Atsumare</h2>
      <section className={styles.items}>
        <Link href='/' passHref>
          <a>
            <motion.img
              layoutId='Tango'
              className={styles.card}
              src='/assets/tango.png'
              onClick={() => router.back()}
            />
          </a>
        </Link>
        <div className={styles.text}>
          <p>{t.Project_Tango_1}</p>
        </div>
        <div className={styles.logoContainer}>
          <a
            href="https://github.com/tangoatsumare/tangoatsumare-readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.logo}
              src='/assets/github_b.png'
              alt="people catching words"
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

export default Tango