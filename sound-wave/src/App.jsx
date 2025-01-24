import Router from "./components/Router/Router";
//Importar Componentes Header, Main y Footer aqui

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    //Llamar Componentes Header, Main y Footer aqui
    <>
      <Header />
      <Router />
      <h1>Component APP</h1>
      
    </>
  );
}

export default App;
