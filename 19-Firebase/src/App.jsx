import './App.css'
import Navbar from './components/Navbar'
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <Navbar />
      <RouterConfig />
      <ToastContainer position='top-right' autoClose={2000} />
    </>
  )
}

export default App

// npm install react-router-dom
// npm i react-toastify

// https://firebase.com/
// npm install firebase