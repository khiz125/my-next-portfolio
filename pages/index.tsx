import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <title>Kenny's portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <section>
        <h2>About this site</h2>
        <div>
          <p>Hi! My name is Kenny. This is my first portfolio website. I am going to post my portfolio once I make.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
