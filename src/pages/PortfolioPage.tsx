import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLocale } from "../hooks/useLocale";
import styles from "../styles/Project.module.css";

const PortfolioPage = () => {
  const router = useRouter();
  const { t, locale } = useLocale();

  return (
    <main className={styles.container}>
      <h2>Kenny's Portfolio</h2>
      <section className={styles.items}>
        <Link href='/' passHref>
          <a>
            <motion.img
              layoutId='PortfolioPage'
              className={styles.card}
              src='/assets/portfolio.svg'
              onClick={() => router.back()}
            />
          </a>
        </Link>
        <div className={styles.badge}>
          <img src="/assets/ts.svg" alt="" />
          <img src="/assets/nx.svg" alt="" />
          <img src="/assets/fm.svg" alt="" />
        </div>
        <div className={styles.text}>
          <p>{t.Project_Portfolio_1}</p>
        </div>
        <div className={styles.logoContainer}>
          <a
            href="https://github.com/khiz125/my-next-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.logo}
              src='/assets/github_b.png'
              alt=""
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

export default PortfolioPage