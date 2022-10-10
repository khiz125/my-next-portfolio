import React, { useRef, useCallback } from 'react'
import Link from 'next/link'
import Top from '../pages/Top'
import { Link as Scroll } from 'react-scroll'
import { useLocale } from "../hooks/useLocale"
import navStyles from '../styles/Nav.module.css'

const Nav: React.FC = () => {
  const { t, locale } = useLocale();
  const lang = locale === 'en' ? 'en' : 'ja';

  const content = useRef<HTMLDivElement>(null);
  const scrollToContent = useCallback(() => {
    content?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  },[])

  return (
    <>
      <nav className={navStyles.navContainer}>
        <ul className={navStyles.nav}>
          <li>
            <Scroll to='top' smooth={true} duration={600}>Top</Scroll>
          </li>
          <li>
            <Scroll to='about' smooth={true} duration={600}>Site</Scroll>
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
      <Top />
    </>
  )
}

export default Nav