import React from 'react';
import { useLocale } from "../hooks/useLocale";
import { motion } from "framer-motion";

const Site = () => {

  const { t, locale } = useLocale();

  return (
    <motion.section
      id="site"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 'all' }}
      transition={{ duration: 0.8 }}
    >
      <h2>{t.About_this_site}</h2>
      <div>
        <p>{t.Greetings}</p>
      </div>
    </motion.section>
  )
}

export default Site