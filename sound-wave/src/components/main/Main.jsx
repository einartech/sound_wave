import React from "react";
import style from "./Main.module.css";
import Icons from "../Icons/Icons";
import iconsImage from "../../assets/images/microphone.svg";
import moreIcon from "../../assets/images/more.svg";
import AlbumsIcon from "../../assets/images/albums.svg";

function Main() {
  return (
    <div className={style["main-container"]}>
      <section className={style["left-section"]}></section>

      <section className={style["right-section"]}></section>
    </div>
  );
}

export default Main;
