'use client'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ButtonSubmit from '@/components/submitButton/page'
import styles from './page.module.css'

export default function Form () {
  const [isChecked, setIsChecked] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = {
      id: uuidv4(),
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
      checkbox: event.target.checked
    }
    // fetch('/api/form', {
    //   method: 'POST',
    //   body: JSON.stringify(formData)
    // })
    console.log(formData)
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
      <label className={styles.label} htmlFor='checkbox'>If you want to choose the treatment, please check this box
        <input type='checkbox' name='checkbox' checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
      </label>
      {
        isChecked === false
          ? null
          : <select name='treatment' className={styles.input}>
            <option disabled>Choose your treatment...</option>
            <option>Mr.</option>
            <option>Mrs.</option>
          </select>
      }

      <ButtonSubmit />

    </form>
  )
}
