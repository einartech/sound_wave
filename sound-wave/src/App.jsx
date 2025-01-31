import React from "react";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    //Llamar Componentes Header, Main y Footer aqui
    <>
      <Navbar />
      <Main />
      <Form />
      <Footer />
    </>
  );
}
