import React from 'react';
import Image from 'next/image';
import meImage from '../../public/assets/me.jpg'
import { useLocale } from "../hooks/useLocale";
import { motion } from "framer-motion";

const About = () => {

  const { t, locale } = useLocale();

  return (
    <main id="about">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 'all' }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ width: '50%' }}>
          <Image src={meImage} layout='responsive' alt="cat on lap" />
        </div>
        <h2>{t.About_me}</h2>
        <div>
          <p>{t.Introduce}</p>
        </div>
      </motion.section>
    </main>
  )
}

export default About