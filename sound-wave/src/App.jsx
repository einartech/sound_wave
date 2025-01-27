import React from 'react';

//import Router from './components/Router/Router';
//Importar Componentes Header, Main y Footer aqui
import Image from "./components/Image/Image";
import Button from "./components/Button/Button";
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';

//landingPageGirl & covers - Mover a Main cuando este terminado
import landingPageGirl from "./assets/images/landing-page-girl.png";
import covers from "./assets/images/covers.jpg";
import Main from './components/main/Main';
//import "./App.css";

export default function App() {
  return (
    //Llamar Componentes Header, Main y Footer aqui
    <>

      <Navbar />
      <Main />
      <Image
        img={landingPageGirl}
        alt="Una chica de pie con auriculares en la página de aterrizaje"
        width="300"
        height="auto"
      />
      <Image
        img={covers}
        alt="Varias portadas de discos englobadas en un rectangulo negro"
        width="300"
        height="auto"
      />
      <Button type="button" value="Boton 1" />
      <Button type="button" value="Boton 2" />
      <Title text ="main title"/>
      <Title text ="title 2"/>
      <Title text ="title 3"/>

      <h3>A continuacion finalizan los componentes REUTILIZABLES de main</h3>
    </>
  );
}
