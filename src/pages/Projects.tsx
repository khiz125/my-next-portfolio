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
  name: string
}

const Projects = () => {

  const { t, locale } = useLocale();

  const projects: Project[] = [
    {
      id: 1,
      image: '/assets/design-book.png',
      alt: 'web design features',
      projectRef: 'DesignBook',
      name: 'Design book'
    },
    {
      id: 2,
      image: '/assets/tango.png',
      alt: 'people catching words',
      projectRef: 'Tango',
      name: 'Tango Atsumare'
    },
    {
      id: 3,
      image: '/assets/denpoh.svg',
      alt: 'raspberrypie connecting LINE Notify',
      projectRef: 'Denpoh',
      name: 'One touch Den-Poh'
    },
    {
      id: 4,
      image: '/assets/chat.svg',
      alt: 'speech bubble',
      projectRef: 'SimpleChat',
      name: 'Simple chat app'
    },
    {
      id: 5,
      image: '/assets/portfolio.svg',
      alt: 'greeting',
      projectRef: 'PortfolioPage',
      name: 'Portfolio site'
    },
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
            <Link href={'/' + `${project.projectRef}`} key={index} passHref>
              <div>
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
                <p>{project.name}</p>
              </div>
            </Link>
          ))}
        </section>
      </motion.section>
    </main>

  )
}

export default Projects