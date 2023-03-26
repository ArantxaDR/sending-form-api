import Image from 'next/image'
import check from '../../../public/check.svg'
import styles from './page.module.css'

export default function ButtonSubmit () {
  return (
    <button className={styles.button} type='submit'>
      Submit
      <Image alt='check icon' src={check} />
    </button>
  )
}
