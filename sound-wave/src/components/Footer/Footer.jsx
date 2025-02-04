import styles from './Footer.module.css'
import twitterImg from '../../assets/images/twitter.svg'
import facebookImg from '../../assets/images/facebook.svg'

/* export default function Footer() {
  return (
    <>
    <footer className={styles.footerContainer}>
        <div className={styles.footerLeftPart}>
        <p className={styles.footerFont}>About Us</p>
        <p className={styles.footerFont}>Contact</p>
        </div>
        <div className={styles.footerRightPart}>
        <div className={styles.wrappedSocials}>
        <img className={styles.footerImg} src={twitterImg}/>
        <p className={styles.footerSocials}>Twitter</p>
        </div>
        <div className={styles.wrappedSocials}>
        <img className={styles.footerImg} src={facebookImg}/>
        <p className={styles.footerSocials}>Facebook</p>
        </div>
        </div>
    </footer>
    </>
  )
} */
export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLeftPart}>
        <a href="https://www.canva.com/design/DAGdlUitKyM/aGVhM9xND0u4RLDWtQ6gBQ/view?utm_content=DAGdlUitKyM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h019692a200">
        <p className={styles.footerFont}>About Us</p></a>
        <a href="https://www.paginasamarillas.es/">
        <p className={styles.footerFont}>Contact</p></a>
      </div>
      <div className={styles.footerRightPart}>
      <div className={styles.wrappedSocials}>
        <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer"  
        style={{ display: "flex", flexWrap: "wrap", alignContent: "center" }}>
          <img className={styles.footerImg} src={twitterImg}/>
          <p className={styles.footerSocials}>Twitter</p>
        </a>
        <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexWrap: "wrap", alignContent: "center" }}>
          <img className={styles.footerImg} src={facebookImg}/>
          <p className={styles.footerSocials}>Facebook</p>
        </a>
        </div>
      </div>
    </footer>
  )
}