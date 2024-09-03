import { useState } from 'react'
import './App.css'
import Auto from './pages/Autos/game.jsx'
import CPU from './pages/CPU/game.jsx'
import GPU from './pages/GPU/game.jsx'
import Category from './components/category.jsx'
import Layout from './components/layout.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const options = ["autos", "cpu", "gpu"]
  const option_buttons = options.map(a =>
    <Category key={a} s="m-8 p-4 font-mono text-6xl" name={a} />
  )

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