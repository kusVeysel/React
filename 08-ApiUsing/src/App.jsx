import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3005";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    // await: yazılan kodlar çalışmadan buranın bitmesi gerekir , bunun çalışması bitti devam et(sonraki satıra geç) demektir
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
//? Json Server Kurulumu
//* Terminali aç → npm install json-server ile kur
//* Serveri çalıştır → npx json-server --watch .\src\db.json --port 3005 
//* http://localhost:3005/users → tüm kullanıcıları getir
//* http://localhost:3005/users/2 → ID'si 2 olan  kullanıcıyı getir