import type { NextPage } from 'next';
import Head from 'next/head';
import Top from '../pages/Top'
import Site from './Site';
import About from './About';
import Image from 'next/image';

import { useLocale } from "../hooks/useLocale"


const Home: NextPage = () => {

  const { t, locale } = useLocale();

  return (
    <div>
      <Head>
        <title>Kenny's portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Top />
      <Site />
      <About />
    </div>
  )
}

export default Home
