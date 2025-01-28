import styles from '../PlainText/PlainText.module.css'

export default function PlainText({text}) {
  return (
    <p className ={styles.PlainText}> {text}</p>
  )
}

