import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/header/Header";
import Home from "./components/pageHome/Home";
import Discover from "./components/pageDiscover/Discover";

import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      {/* Página Home - LAPTOP -PAGE 1  */}
      {/* <Navbar />
      <Home /> */}
      {/* Página Home - LAPTOP -PAGE 1  - END */}

      {/* Página Discover - LAPTOP -PAGE 2  */}

      <Navbar />
      <Discover />
      <Footer />

      {/* Página Discover - LAPTOP -PAGE 2 - END */}

      {/* Página Join - LAPTOP -PAGE 3  */}
      {/* <Navbar />
      <Join />
      <Footer /> */}

      {/* Página Join - LAPTOP -PAGE 3 - END */}
    </>
  );
}
