import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  return (
    <>
      <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantalon" price={980} />

      <Container>
        <Product productName="Telefon" price={10000} />
      </Container>
    </>
  )
}

export default App
