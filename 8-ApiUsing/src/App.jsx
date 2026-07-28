import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3000";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    // await: yazılan kodlar çalışmadan buranın bitmesi gerekir , bunun çalışması bitti(10.satır) devam et(11.satıra) demektir
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    // const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  }

  useEffect(() => {
    getAllUsers();
    getUserById(1);
  }, [])

  return (
    <>

    </>
  )
}

export default App
// npx json-server --watch .\src\db.json