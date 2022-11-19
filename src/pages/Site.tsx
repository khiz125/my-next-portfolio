import React from 'react';
import { useLocale } from "../hooks/useLocale";
import { motion } from "framer-motion";
import styles from "../styles/Site.module.css";

const Site = () => {

  const { t, locale } = useLocale();

  return (
    <main id="site">
      <motion.section
        className={styles.site}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{t.About_this_site}</h2>
        <div className={styles.greeting}>
          <p>{t.Greetings}</p>
        </div>
      </motion.section>
    </main>
  )
}

export default Site