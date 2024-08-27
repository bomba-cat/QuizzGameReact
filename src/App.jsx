import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import Auto from './pages/Autos/game.jsx'
import CPU from './pages/CPU/game.jsx'
import GPU from './pages/GPU/game.jsx'

function App() {

  const options = ["Autos", "CPU", "GPU"]
  const option_buttons = options.map(a =>
    <Button key={ a } name={ a } fun={ (event) => setPage( event.target.innerHTML ) } />)

  const [page, setPage] = useState('');
  if (page === 'Autos') {
    return (<><Auto /></>);
  } else if (page === 'CPU') {
    return (<><CPU /></>);
  } else if (page === 'GPU') {
    return (<><GPU /></>);
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
