import styles from './Style.module.css'


export default function Icons({img,text, alt, width, height}) {
  return (
    <>
    <div  className= {styles.backgroundIcon}>
    <img className= {styles.icons} src={img} alt={alt} width={width} height={height} />
    <p className={styles.title}>{text}</p>
    </div>
    </>
  )
}
