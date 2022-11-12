import type { NextPage } from 'next';
import Head from 'next/head';
import Top from '../pages/Top'
import Site from './Site';
import About from './About';
import Skills from './Skills';
import JobHistory from './JobHistory';
import Image from 'next/image';

import { useLocale } from "../hooks/useLocale"


const Home: NextPage = () => {

  const { t, locale } = useLocale();

  return (
    <>
      <Head>
        <title>Kenny's portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Top />
      <Site />
      <About />
      <Skills />
      <JobHistory />
    </>
  )
}

export default Home
