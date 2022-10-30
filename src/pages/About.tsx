import React from 'react'
import { useLocale } from "../hooks/useLocale"

const About = () => {

  const { t, locale } = useLocale();

  return (
    <main id="about">
      <section>
        <h2>{t.About_me}</h2>
        <div>
          <p>{t.Introduce}</p>
        </div>
      </section>
    </main>
  )
}

export default About