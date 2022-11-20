import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Top from '../pages/Top'
import Site from './Site';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import JobHistory from './JobHistory';
import Footer from './Footer';
import { useRouter } from "next/router";
import { animateScroll as scroll } from 'react-scroll'
import { useLocale } from "../hooks/useLocale"


const Home: NextPage = () => {

  const { t, locale } = useLocale();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Kenny's portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Nav />
      <Top />
      <Site />
      <About />
      <Projects />
      <Skills />
      <JobHistory />
      <Footer />
    </>
  )
}

export default Home
