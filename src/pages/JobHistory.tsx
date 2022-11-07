import React from 'react';
import { useLocale } from "../hooks/useLocale";
import jobStyles from "../styles/Job.module.css";
import { motion } from "framer-motion";

const JobHistory = () => {

  const { t, locale } = useLocale();

  return (
    <main id="experience">
      <motion.section
        className={jobStyles.jobExperience}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 'all' }}
        transition={{ duration: 0.8 }}
      >
        <section className='lineSpacing'>
          <h2>{t.Job_experience}</h2>
          <p>{t.Job_comment}</p>
        </section>
        <section className={jobStyles.jobHistory}>
          <div>
            <h3>{t.Job_1}</h3>
            <p>{t.Job_1_detail_1}</p>
            <p>{t.Job_1_detail_2}</p>
          </div>
        </section>
      </motion.section>
    </main>

  )
}

export default JobHistory