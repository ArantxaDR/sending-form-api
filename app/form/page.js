'use client'
import ButtonSubmit from '@/app/components/submitButton/page'
import styles from './page.module.css'

export default function Form () {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    }
    fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <label className={styles.label} htmlFor='fullName'>Full name
        <input className={styles.input} required type='text' name='fullName' placeholder='Jane Doe' minLength='3' />
      </label>

      <label className={styles.label} htmlFor='email'>Email
        <input className={styles.input} required type='email' name='email' placeholder='example@example.com' />
      </label>

      <label className={styles.label} htmlFor='phone'>Phone number
        <input className={styles.input} type='tel' name='phone' placeholder='555-555-555' />
      </label>

      <label className={styles.label} htmlFor='message'>Message
        <textarea className={styles.textarea} required type='text' name='message' placeholder='Send us a message...' minLength='10' />
      </label>
      <ButtonSubmit />

    </form>
  )
}
