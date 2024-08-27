import { useState } from 'react'
import '../../App.css'
import Button from '../../components/Button.jsx'

function Auto() {
  function button_clicked(event) {
    const clicked = event.target.innerHTML
    const answer = "Bledion"
    if (clicked == answer) {
      document.getElementById("result").innerHTML=`<img src="https://cdn.discordapp.com/attachments/1147460422719508491/1277950825003487232/45d4a3411dbbe7160c9a29070afb7eff.png?ex=66cf07f3&is=66cdb673&hm=b745fa99596e5c05a85c7e47be23cda13020e708e82fd71e3b26322c93a01765&" />`
    } else {
      document.getElementById("result").innerHTML=`<img src="https://cdn.discordapp.com/attachments/1147460422719508491/1277952045705465938/unknown.png?ex=66cf0916&is=66cdb796&hm=426e6893fb4b6b0bb2c0c38e95ffcea14c414321aac3c1a140699e295a89b071&" />`
    }
  }

  const answer = ["Bruno", "Bledion", "Pascal"]
  const answer_buttons = answer.map(a =>
    <Button key={ a } name={ a } fun={ button_clicked } />)

  const [page, setPage] = React.useState('');
  if (page === 'Auto') {
    return <Home />;
  }

  return (
    <>
      <div className="p-48 bg-gradient-to-tr from-amber-500 to-pink-500 h-screen w-screen absolute top-0 left-0">
        <h1 className="absolute top-36 -translate-y-1/2 -translate-x-1/2 left-1/2">Which cat is the silliest?</h1>
        <div className="answer-buttons m-1 absolute inset-y-3/4 -translate-y-1/2 -translate-x-1/2 left-1/2">
          { answer_buttons }
        </div>
        <div id="result" className="size-48 mx-auto absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-2/4"></div>
      </div>
    </>
  )
}

export default Auto
