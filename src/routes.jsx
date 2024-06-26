import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import React from 'react'
import NovoVideo from "./pages/NovoVideo";


const RoutesApp = () => {
  return (
    // Contexto de navegação
    <BrowserRouter>
      <Routes>
        {/* Rota inicial, renderiza o componente Inicial */}
        <Route path="/" element={<Inicial />} />
        {/* Rota "/novo-video", renderiza o componente NovoVideo */}
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default RoutesApp

