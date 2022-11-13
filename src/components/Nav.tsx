import React from 'react'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import { useLocale } from "../hooks/useLocale"
import navStyles from '../styles/Nav.module.css'
import { motion, Variants } from "framer-motion";

const Nav: React.FC = () => {
  const { t, locale } = useLocale();

  return (
    <>
      <nav className={navStyles.navContainer}>
        <ul className={navStyles.nav}>
          <li>
            <Scroll to='top' smooth={true} duration={600}>Top</Scroll>
          </li>
          <li>
            <Scroll to='site' smooth={true} duration={600}>Site</Scroll>
          </li>
          <li>
            <Scroll to='about' smooth={true} duration={600} offset={-50}>About</Scroll>
          </li>
          <li>
            <Scroll to='skills' smooth={true} duration={600} offset={-100}>Skills</Scroll>
          </li>
          <li>
          <Scroll to='job' smooth={true} duration={600} offset={-50}>Experience</Scroll>
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
    </>
  )
}

export default Nav