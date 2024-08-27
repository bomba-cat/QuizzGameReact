import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import Auto from './pages/Autos/game.jsx'

function App() {

  const options = ["Autos", "CPU", "GPU"]
  const option_buttons = options.map(a =>
    <Button key={ a } name={ a } fun={ () => setPage('Auto') } />)

  const [page, setPage] = React.useState('');
  if (page === 'Auto') {
    return <Auto />;
  }
  return (
    <>
      <div className="answer-buttons">
        { option_buttons }
      </div>
    </>
  )
}

export default App
