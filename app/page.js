import Image from 'next/image'
import Form from './form/page'
import styles from './page.module.css'
import send from '../public/send.svg'

export default function Home () {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.title}>
          <h1>Get in touch!</h1>
          <Image alt='Send arrow icon' src={send} />
        </section>
        <Form />
      </main>
    </>
  )
}
