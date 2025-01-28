import React from "react";
import style from "./Main.module.css";
import H2Title from "../TitleH2/h2Title"
import PlainText from "../PlainText/PlainText";
import Icons from "../Icons/Icons";
import iconsImage from "../../assets/images/microphone.svg"
import moreIcon from "../../assets/images/more.svg"
import AlbumsIcon from "../../assets/images/albums.svg"

function Main() {
  return (
    <div className={style["main-container"]}>
      <section className={style["left-section"]}>
        <h2>Sección Izquierda</h2>
        <p>Contenido de la seccion izquierda</p>
        
      </section>

        <section className={style["right-section"]}>
        <H2Title text = "text"/>
        <PlainText text = "text"/>
        <Icons
        img={iconsImage}
        text= "Charts"
        alt= "microphone icon"
        width= "100px"
        height= "100px"
        />
         <Icons
        img={AlbumsIcon}
        text= "Albums"
        alt= "Albums icon"
        width= "100px"
        height= "100px"
        />
          <Icons
        img={moreIcon}
        text= "More"
        alt= "more icon"
        width= "100px"
        height= "100px"
        />
       
      </section>
    </div>
  );
}

export default Main;
