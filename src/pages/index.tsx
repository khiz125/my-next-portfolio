import type { NextPage } from 'next';
import Head from 'next/head';
import Top from '../pages/Top'



const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Kenny's portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Top />
    </>
  )
}

export default Home
