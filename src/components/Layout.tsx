import { ReactNode } from 'react'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout