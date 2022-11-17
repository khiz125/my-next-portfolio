import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion } from "framer-motion";
import styles from "../styles/Tango.module.css";

const Denpoh = () => {
  // const {
  //   query: { code: 'nextjs', page: 'Denpoh'},
  // } = useRouter();

  return (
    <main className={styles.container}>
      <h2 className={styles.text}>One touch Den-Poh</h2>
      <section className={styles.items}>
        <Link href='/' passHref>
          <a>
            <motion.img
              layoutId='Denpoh'
              className={styles.card}
              src='/assets/denpoh.png'
            />
          </a>
        </Link>
        <div className={styles.text}>
          <p>Den-Poh is the idea of Nurse Call notification system using raspberry pi.</p>
        </div>
        <a
          href="https://github.com/khiz125/notification_with_raspberry_pi"
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

export default Denpoh