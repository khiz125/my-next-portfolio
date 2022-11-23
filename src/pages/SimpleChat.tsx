import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLocale } from "../hooks/useLocale";
import styles from "../styles/Project.module.css";

const SimpleChat: React.FC = () => {
  const router = useRouter();
  const { t, locale } = useLocale();

  return (
    <main className={styles.container}>
      <h2>Simple private chat app</h2>
      <section className={styles.items}>
        <Link href='/' passHref>
          <a>
            <motion.img
              layoutId='SimpleChat'
              className={styles.card}
              src='/assets/chat.svg'
              onClick={() => router.back()}
            />
          </a>
        </Link>
        <div className={styles.badge}>
          <img src="/assets/ts.svg" alt="" />
          <img src="/assets/r.svg" alt="" />
          <img src="/assets/fb.svg" alt="" />
        </div>
        <div className={styles.text}>
          <p>{t.Project_Chat_1}</p>
        </div>
        <div className={styles.logoContainer}>
          <a
            href="https://github.com/khiz125/simple-chat-app"
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

export default SimpleChat