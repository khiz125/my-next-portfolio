import type { NextPage } from 'next'
import Head from 'next/head'
import Site from './Site'
import Image from 'next/image'

import { useLocale } from "../hooks/useLocale"


const Home: NextPage = () => {

  const { t, locale } = useLocale();

  return (
    <div>
      <Head>
        <title>Kenny's portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <div className='.wrap'>
        <Site />
      </div>
    </div>
  )
}

export default Home
