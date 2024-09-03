import { useState } from 'react'
import './App.css'
import Auto from './pages/Autos/game.jsx'
import CPU from './pages/CPU/game.jsx'
import GPU from './pages/GPU/game.jsx'
import Category from './components/category.jsx'
import Layout from './components/layout.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Choose a quiz</div>} />
              <Route path="autos" element={<Auto />} />
              <Route path="cpu" element={<CPU />} />
              <Route path="gpu" element={<GPU />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App