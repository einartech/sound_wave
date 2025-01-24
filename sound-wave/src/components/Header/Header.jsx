import style from './Style.module.css'
import soundWaveLogo from '../../assets/images/logo.svg'

export default function Header() {
    
  return (
    <header>
        <>
        <img scr= {soundWaveLogo} alt = "logo de SoundWave"/>
        <p> Soundwave</p>
        </>
       
        <div classname={style.text}>
        <p className={style.discover}> Discover </p>
        <p className={style.join}> Join </p>
        </div>
    
    </header>
  );
}
