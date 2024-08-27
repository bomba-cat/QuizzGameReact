import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'

function App() {

  function button_clicked(event) {

  }

  const options = ["Autos", "CPU", "GPU"]
  const option_buttons = options.map(a =>
    <Button key={ a } name={ a } fun={ button_clicked } />)

  return (
    <>
     <div className="answer-buttons">
       { option_buttons }
      </div>
    </>
  )
}

export default App
