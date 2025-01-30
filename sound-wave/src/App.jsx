import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/header/Header";
import Home from "./components/Home";
//import Main from "./components/main/Main";
//import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Main />*/}
   {/* <Footer />*/}
    </>
  );
}
