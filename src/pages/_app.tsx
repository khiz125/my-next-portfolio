import '../styles/globals.css'
import 'sanitize.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Head>
        <title>Kenny's portfolio</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
