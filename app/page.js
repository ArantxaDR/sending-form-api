// import { Inter } from 'next/font/google'
import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <label>Nombre completo: </label>
          <input type='text' placeholder='Jane Doe' minLength='3' />
        </div>
        <div>
          <label>Email: </label>
          <input type='email' placeholder='example@example.com' minLength='3' />
        </div>
        <div>
          <label>Teléfono: </label>
          <input type='phone' placeholder='555-555-555' minLength='3' />
        </div>
        <div>
          <label>Mesaje: </label>
          <textarea type='text' placeholder='Escriba aquí su mensaje...' minLength='10' />
        </div>
        <button>Enviar formilario</button>
      </div>
    </main>
  )
}
