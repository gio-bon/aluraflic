import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";

import React from 'react'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default RoutesApp