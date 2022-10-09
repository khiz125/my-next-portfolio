import React from 'react'
import Link from 'next/link'
import { useLocale } from "../hooks/useLocale"
import navStyles from '../styles/Nav.module.css'

const Nav: React.FC = () => {
  const { t, locale } = useLocale();
  const lang = locale === 'en' ? 'en' : 'ja'

  return (
    <nav className={navStyles.navContainer}>
      <ul className={navStyles.nav}>
        <li>
          <Link href='/'>Top</Link>
        </li>
        <li>
          <Link href='/about-site'>Site</Link>
        </li>
        <li>
          <Link href='/about-me'>About</Link>
        </li>
        <li>
          <Link href='/experience'>Experience</Link>
        </li>
        <li>
          <Link href='/coding'>Codings</Link>
        </li>
        <li>
          {t.LANG === "English" ? 
            <Link href='/' locale='en' passHref>{t.LANG}</Link> 
              :
            <Link href='/' locale='ja' passHref>{t.LANG}</Link>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Nav