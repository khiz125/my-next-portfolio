import React from 'react';
import { useLocale } from "../hooks/useLocale";
import jobStyles from "../styles/Job.module.css";
import { motion, AnimatePresence } from "framer-motion";

const JobHistory = () => {

  const { t, locale } = useLocale();

  return (
    <main id="job">
      <motion.section
        className={jobStyles.jobExperience}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section className='lineSpacing'>
          <h2>{t.Job_experience}</h2>
          <p>{t.Job_comment}</p>
        </section>
        <section className={jobStyles.jobHistory}>
          <div className={jobStyles.card}>
            <h3>{t.Job_now}</h3>
            <p>{t.Job_now_detail_1}</p>
          </div>
          <div className={jobStyles.card}>
            <h3>{t.Job_1}</h3>
            <p>{t.Job_1_detail_1}</p>
          </div>
          <div className={jobStyles.card}>
            <h3>{t.Job_2}</h3>
            <p>{t.Job_2_detail_1}</p>
          </div>
          <div className={jobStyles.card}>
            <h3>{t.Job_3}</h3>
            <p>{t.Job_3_detail_1}</p>
          </div>
          <div className={jobStyles.card}>
            <h3>{t.Job_4}</h3>
            <p>{t.Job_4_detail_1}</p>
            <p>{t.Job_4_detail_3}</p>
          </div>
        </section>
      </motion.section>
    </main>

  )
}

export default JobHistory