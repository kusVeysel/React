import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zaman çalışır");
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır");
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName değeri değiştiğinde çalışır")
  }, [firstName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastName değeri değiştiğinde çalışır")
  }, [lastName])

    useEffect(() => {
    console.log("ilk render edildiğinde ve firstName veya lastName değeri değiştiğinde çalışır")
  }, [firstName,lastName])
  return (
    <>
      <div>
        <button onClick={() => setFirstName("Veysel")}>Adı Değiştir</button>
        <button onClick={() => setLastName("Kus")}>Soyismi Değiştir</button>
      </div>
    </>
  )
}

export default App
