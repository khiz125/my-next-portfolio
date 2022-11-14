import React from 'react'
import { useLocale } from "../hooks/useLocale";
import { motion } from "framer-motion";
import styles from "../styles/Skills.module.css";

const Skills = () => {

  const { t, locale } = useLocale();

  return (
    <main id="skills" className={styles.skills}>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section className='lineSpacing'>
          <h2>{t.Skills}</h2>
        </section>
        <section className={styles.skillCards}>
          <div className={styles.card}>
            <h3>Languages</h3>
            <ul>
              {t.Skill_languages.split(',').map((lang, index) => {
                return (
                  <li key={index} className={styles.dash}>{lang}</li>
                )
              })}
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Frontend</h3>
            <ul>
              {t.Skill_frontend.split(',').map((lang, index) => {
                return (
                  <li key={index} className={styles.dash}>{lang}</li>
                )
              })}
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Backend</h3>
            <ul>
              {t.Skill_backend.split(',').map((lang, index) => {
                return (
                  <li key={index} className={styles.dash}>{lang}</li>
                )
              })}
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Database</h3>
            <ul>
              {t.Skill_database.split(',').map((lang, index) => {
                return (
                  <li key={index} className={styles.dash}>{lang}</li>
                )
              })}
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Machine Learning</h3>
            <ul>
              {t.Skill_ML.split(',').map((lang, index) => {
                return (
                  <li key={index} className={styles.dash}>{lang}</li>
                )
              })}
            </ul>
          </div>
        </section>
      </motion.section>
    </main>
  )
}


export default Skills