import styles from '../PlainText/PlainText.css'

function PlainText({text}) {
  return (
    <p className ={styles.PlainText}> {text}</p>
  )
}

export default PlainText