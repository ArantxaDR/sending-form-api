import Form from './form/page'
import styles from './page.module.css'

export default function Home () {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.title}>
          <h1 className={styles.text}>Get in touch!</h1>
        </section>
        <Form />
      </main>
    </>
  )
}
