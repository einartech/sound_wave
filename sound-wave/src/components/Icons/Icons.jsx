import styles from './Style.module.css'


export default function Icons({img,text, alt}) {
  return (
    <>
    <div  className= {styles.backgroundIcon}>
    <img className= {styles.icons} src={img} alt={alt} />
    <p className={styles.title}>{text}</p>
    </div>
    </>
  )
}
