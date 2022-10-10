import { ReactNode } from 'react'
import Nav from './Nav'
import Top from '../pages/Top'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout