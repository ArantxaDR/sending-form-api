// import { Inter } from 'next/font/google'
import Form from './form/page'
import Header from './header/page'
import styles from './page.module.css'

export default function Home () {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Form />
      </main>
    </>
  )
}
