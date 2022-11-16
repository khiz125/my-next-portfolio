import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import styles from "../styles/Tango.module.css";

const Tango = () => {
  return (
    <main className={styles.container}>
      <h2 className={styles.text}>Tango Atsumare</h2>
      <section  className={styles.items}>
        <Link href='/Projects'>
          <a>
            <motion.img
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className={styles.card}
              src='/assets/tango.png'
              alt="people catching words"
            />
          </a>
        </Link>
        <div className={styles.text}>
          <p>Tango Atsumare helps users expand their vocabulary by making the process of creating high quality flashcards easier and more fun than ever before.</p>
        </div>
        <a
          href="https://github.com/tangoatsumare/tangoatsumare-readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.logo}
            src='/assets/github.png'
            alt="people catching words"
          />
        </a>
      </section>
    </main>

  )
}

export default Tango