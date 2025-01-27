import React from "react";
import style from "./Main.module.css";
import FeelTheMusic from "../TitleFeelTheMusic/FeelTheMusic"

function Main() {
  return (
    <div className={style["main-container"]}>
      <section className={style["left-section"]}>
        <h2>Sección Izquierda</h2>
        <p>Contenido de la seccion izquierda</p>
        <FeelTheMusic
        text = "Discover more than..."
        />
        <FeelTheMusic
        text = "text"
        />

        
      </section>

      <section className={style["right-section"]}>
        <h2>Seccion Derecha</h2>
        <p>Contenido de la sección derecha</p>
      </section>
    </div>
  );
}

export default Main;
