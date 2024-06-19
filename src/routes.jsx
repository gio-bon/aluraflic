import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import React from 'react'
import NovoVideo from "./pages/NovoVideo";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default RoutesApp