import React from 'react'
import { useLocale } from "../hooks/useLocale"

const Site = () => {

  const { t, locale } = useLocale();

  return (
    <section id="about">
      <h2>{t.About_this_site}</h2>
      <div>
        <p>{t.Greetings}</p>
      </div>
    </section>
  )
}

export default Site