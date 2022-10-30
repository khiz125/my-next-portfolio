import React from 'react'
import { useLocale } from "../hooks/useLocale"
import jobStyles from "../styles/Job.module.css"

const JobHistory = () => {

  const { t, locale } = useLocale();

  return (
    <main id="experience" className={jobStyles.jobExperience}>
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
    </main>
  )
}

export default JobHistory