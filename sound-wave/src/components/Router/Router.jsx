import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pageHome/Home";
import Discover from "../pageDiscover/Discover";
import Join from "../pageJoin/Join";
import "../../../src/index.css";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/discover" element={<Discover />} />
        <Route path="/join" element={<Join />} />  
      </Routes>
    </BrowserRouter>
  );
}
