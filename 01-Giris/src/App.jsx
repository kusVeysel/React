import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // javascript kodları buraya yazılır

  let name = "veysel";
  let yas = 18;
  let vize = Math.trunc(Math.random() * 101);
  let final = Math.trunc(Math.random() * 101);

  let isimler = [
    "veysel",
    "Simitci",
    "Cayci",
    "Kahveci"
  ]

  return (
    // html kodları yazılır
    // javascripti entegre edebilmek için '{}' kullanılır(jsx)
    <>

      <div> {name}'in yasi : {yas} </div>

      {(vize * 0.4) + (final * 0.6) > 50 ? <p> gecti </p> : <p> kaldi </p>}
      <p> Notunuz: {(vize * 0.4) + (final * 0.6)} </p>

      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'red',
            border: '2px solid black'
          }} key={index}> {isim} </div>
        ))
      }

    </>
  )
}

export default App
