import React from 'react'
import { useLocale } from "../hooks/useLocale";
import { motion } from "framer-motion";
import styles from "../styles/Projects.module.css";

const Projects = () => {

  const { t, locale } = useLocale();

  return (
    <main id="project">
      <motion.section
        className={styles.projects}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section className='lineSpacing'>
          <h2>{t.Projects}</h2>
          <p>{t.Projects_1}</p>
        </section>
        <section className={styles.projectsCards}>
          <a
            href="https://github.com/tangoatsumare/tangoatsumare-readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.card}
              src='/assets/tango.png'
              alt="people catching words"
            />
            <p className={styles.text}>Visit Github page</p>
          </a>
        </section>
      </motion.section>
    </main>

  )
}

export default Projects