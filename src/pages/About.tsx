import React from 'react';
import Image from 'next/image';
import meImage from '../../public/assets/me.jpg';
import { useLocale } from "../hooks/useLocale";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";


const About = () => {

  const { t, locale } = useLocale();

  return (
    <main id="about">
      <motion.section
        className={styles.about}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <section className='lineSpacing'>
          <h2>{t.About_me}</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '50%', margin: '2%' }}>
              <Image
                src={meImage}
                layout='responsive'
                alt="cat on lap"
                style={{ borderRadius: '2%' }} />
            </div>
          </div>
        </section>
        <section>
          <ul className={styles.introduce}>
            <li className={styles.dash}>{t.Introduce_1}</li>
            <li className={styles.dash}>{t.Introduce_2}</li>
            <li className={styles.dash}>{t.Introduce_3}</li>
          </ul>
        </section>
      </motion.section>
    </main>
  )
}

export default About