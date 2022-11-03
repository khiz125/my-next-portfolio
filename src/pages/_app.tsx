import '../styles/globals.css'
import 'sanitize.css'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
