import React from 'react';
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
        <h2>{t.About_me}</h2>
        <div>
          <p>{t.Introduce}</p>
        </div>
      </motion.section>
    </main>
  )
}

export default About