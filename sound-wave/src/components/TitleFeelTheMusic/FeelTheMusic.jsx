import styles from './Style.module.css'

export default function Title({text}) {
  return (
    <>
    <h1 className ={styles.title}> {text}</h1>
    <p className ={styles.line}> {text}</p>
    </>
  )
}