import { useState } from 'react'
import './App.css'
import Dovizkuru from './components/dovizkuru'

function App() {

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Dovizkuru />
    </div>
  )
}

export default App
