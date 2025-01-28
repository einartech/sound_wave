import React from "react";
import style from "./Main.module.css";

import Button from "../Button/Button";
import Title from "../Title/Title";
import Image from "../Image/Image";

//landingPageGirl & covers - Mover a Main cuando este terminado
import landingPageGirl from "../../assets/images/landing-page-girl.png";
import covers from "../../assets/images/covers.jpg";

function Main() {
  return (
    <div className={style["main-container"]}>
      <section className={style["left-section"]}>
        <Title text="main title" />
        <p>parrafo descriptivo</p>

        <Button type="button" value="boton chica" />
      </section>

      <section className={style["right-section"]}>
        <Image
          img={landingPageGirl}
          alt="Una chica de pie con auriculares en la página de aterrizaje"
          width="30%"
          height="65%"
        />
      </section>
    </div>
  );
}

export default Main;
