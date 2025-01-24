import Router from "./components/Router/Router";
//Importar Componentes Header, Main y Footer aqui
import Image from "./components/Image/Image";

//landingPageGirl - Mover a Main cuando este terminado
import landingPageGirl from "./assets/images/landing-page-girl.png";

import covers from "./assets/images/covers.jpg";

import "./App.css";

export default function App() {
  return (
    //Llamar Componentes Header, Main y Footer aqui
    <>
      <h1>Component APP</h1>
      <h3>A continuacion inician los componentes REUTILIZABLES de main</h3>
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
      <h3>A continuacion finalizan los componentes REUTILIZABLES de main</h3>
    </>
  );
}
