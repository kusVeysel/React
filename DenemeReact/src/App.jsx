import { useEffect, useState } from 'react'
import './App.css'
import Saat from './component/Saat.jsx'
import Butonlar from './component/Butonlar.jsx';

function App() {
  const [Dakika, SetDakika] = useState(0);
  const [Dakika2, SetDakika2] = useState(0);
  const [Oclock, SetOclock] = useState(0);
  const [Oclock2, SetOclock2] = useState(0);
  const [Saniye, SetSaniye] = useState(0);
  const [Saniye2, SetSaniye2] = useState(0);

  const SecondPlus = () => {
    SetSaniye2(Saniye2 + 1)
    if (Saniye2 == 9) {
      SetSaniye2(0)
      SetSaniye(Saniye + 1)
    }
    if (Saniye == 5) {
      if (Saniye2 == 9) {
        SetDakika2(Dakika2 + 1)
        SetSaniye(0)
      }
    }
    if (Dakika2 == 9) {
      if (Saniye == 5) {
        if (Saniye2 == 9) {
          SetDakika(Dakika + 1)
          SetDakika2(0)
        }
      }
    }
    if (Dakika == 5) {
      if (Dakika2 == 9) {
        if (Saniye == 5) {
          if (Saniye2 == 9) {
            SetOclock2(Oclock2 + 1)
            SetDakika(0)
          }
        }
      }
    }
    if (Oclock2 == 9) {
      if (Dakika == 5) {
        if (Dakika2 == 9) {
          if (Saniye == 5) {
            if (Saniye2 == 9) {
              SetOclock(Oclock + 1)
              SetOclock2(0)
            }
          }
        }
      }
    }
    if (Oclock == 2) {
      if (Oclock2 == 3) {
        if (Dakika == 5) {
          if (Dakika2 == 9) {
            if (Saniye == 5) {
              if (Saniye2 == 9) {
                SetOclock(0)
                SetOclock2(0)
                SetDakika(0)
                SetDakika2(0)
                SetSaniye(0)
                SetSaniye2(0)
              }
            }
          }
        }
      }
    }
  }

  return (
    <>
      <Saat hour={Oclock} hour2={Oclock2} minute={Dakika} minute2={Dakika2} second={Saniye} second2={Saniye2} />
      <button onClick={SecondPlus}>Saniye Arttır</button>
      <button >Dakika Arttır</button>
      <button >Saat Arttır</button>
    </>
  )
}

export default App
