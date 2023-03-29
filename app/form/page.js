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
      courtesy: event.target.courtesy === undefined ? '' : event.target.courtesy.value
    }
    fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    event.target.fullName.value = ''
    event.target.email.value = ''
    event.target.phone.value = ''
    event.target.message.value = ''
    alert('Your form has been recived successfully')
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
        <input className={styles.input} type='tel' name='phone' placeholder='555555555' pattern='[0-9]{9}' />
      </label>

      <label className={styles.label} htmlFor='message'>Message
        <textarea className={styles.textarea} type='text' name='message' placeholder='Send us a message...' minLength='10' />
      </label>

      <div>
        <label className={styles.checkbox}>
          <input className={isChecked ? 'checked' : ''} type='checkbox' onChange={e => setIsChecked(e.target.checked)} />
          <span> If you want to choose the courtesy, please check this box</span>
        </label>
      </div>
      {
        isChecked === false
          ? null
          : <select name='courtesy' className={styles.courtesy}>
            <option>Choose your courtesy...</option>
            <option>Mr.</option>
            <option>Mrs.</option>
          </select>
      }

      <ButtonSubmit />

    </form>
  )
}
