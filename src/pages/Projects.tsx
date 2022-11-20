import React from 'react'
import Link from 'next/link';
import { useLocale } from "../hooks/useLocale";
import { motion } from "framer-motion";
import styles from "../styles/Projects.module.css";

interface Project {
  id: number;
  image: string;
  alt: string;
  projectRef: string;
}

const Projects = () => {

  const { t, locale } = useLocale();

  const projects: Project[] = [
    {
      id: 1,
      image: '/assets/tango.png',
      alt: 'people catching words',
      projectRef: 'Tango',
    },
    {
      id: 2,
      image: '/assets/denpoh.png',
      alt: 'raspberrypie connecting LINE Notify',
      projectRef: 'Denpoh',
    }
  ]

  return (
    <main id="project">
      <motion.section
        className={styles.projects}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section className='lineSpacing'>
          <h2>{t.Projects}</h2>
          <p>{t.Projects_1}</p>
        </section>
        <section className={styles.projectsCards}>
          {projects.map((project, index) => (
            <Link href={'/'+`${project.projectRef}`}  key={index} passHref>
              <a>
                <motion.img
                layoutId={project.projectRef}
                className={styles.card}
                src={project.image}
                alt={project.alt}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                />
              </a>
            </Link>
          ))}
          {/* <Link href='/Tango'>
            <a>
              <motion.img
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className={styles.card}
                src='/assets/tango.png'
                alt="people catching words"
              />
            </a>
          </Link> */}
        </section>

        {/* <section className={styles.projectsCards}>
          <a
            href="https://github.com/tangoatsumare/tangoatsumare-readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.card}
              src='/assets/tango.png'
              alt="people catching words"
            />
            <p className={styles.text}>Visit Github page</p>
          </a>
        </section> */}
      </motion.section>
    </main>

  )
}

export default Projects