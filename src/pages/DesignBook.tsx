import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "../hooks/useLocale";
import styles from "../styles/Project.module.css";

const DesignBook = () => {
  const router = useRouter();
  const { t, locale } = useLocale();

  return (
    <main className={styles.container}>
      <h2>DesignBook</h2>
      <section className={styles.items}>
        <a
          href="https://github-vercel-deploy-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            layoutId="DesignBook"
            className={styles.card}
            src="/assets/design-book.png"
            // onClick={() => router.back()}
          />
        </a>
        <div className={styles.badge}>
          <img src="/assets/ts.svg" alt="" />
          <img src="/assets/nextjs.svg" alt="" />
          <img src="/assets/vercel_badge.svg" alt="" />
        </div>
        <div className={styles.text}>
          <p>{t.Project_DesignBook_1}</p>
        </div>
        <div className={styles.logoContainer}>
          <a
            href="https://github.com/khiz125/design-book"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logo} src="/assets/github_b.png" alt="" />
          </a>
          <button className={styles.backButton} onClick={() => router.back()}>
            <a className={styles.buttonLine}>Back to Project</a>
          </button>
        </div>
      </section>
    </main>
  );
};

export default DesignBook;
