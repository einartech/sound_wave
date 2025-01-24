import styles from './Footer.module.css'
import twitterImg from '../../assets/images/twitter.svg'
import facebookImg from '../../assets/images/facebook.svg'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.footerLeftPart}>
        <p className={styles.footerFont}>About Us</p>
        <p className={styles.footerFont}>Contact</p>
        </div>
        <div className={styles.footerRightPart}>
        <img className={styles.footerImg} src={twitterImg}/>
        <p className={styles.footerSocials}>Twitter</p>
        <img className={styles.footerImg} src={facebookImg}/>
        <p className={styles.footerSocials}>Facebook</p>
        </div>
    </footer>
  )
}
