 //? Axios

import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {

  //? 1. TÜM KULLANICILARI GETİR (GET)
  const getAllUsers = async () => {
    // Sunucudan tüm kullanıcı verisini çeker
    const response = await axios.get(`${BASE_URL}/users`);
    console.log("Tüm Kullanıcılar:", response.data);
    return response.data;
  }

  
  //? 2. ID'YE GÖRE KULLANICI GETİR (GET)
  const getUserById = async (userId) => {
    // DÜZELTME: Veritabanındaki ID tipleri string/number uyuşmazlığı yaşamamak için
    // JS şablon dizisi (template literal) ile güvenli şekilde istek atılır.
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(`ID: ${userId} olan kullanıcı:`, response.data);
    return response.data;
  }


  //? 3. YENİ KULLANICI EKLE (POST)
  const createUser = async (newUser) => {
    // DÜZELTME: json-server (v1+ ve modern sürümler) id değerini otomatik üretir.
    // Manuel string/int id çakışmalarını önlemek için id göndermemek en güvenli yoldur.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("Oluşturulan Kullanıcı:", response.data);
    return response.data; // Yeni eklenen nesneyi (otomatik id'si ile) döner
  }


  //? 4. KULLANICI BİLGİSİNİ GÜNCELLE (PUT)
  const updateUser = async (userId, updatedUser) => {
    // PUT isteği belirtilen ID'deki kaydın TAMAMINI gönderilen veriyle değiştirir.
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log(`ID: ${userId} Güncellendi:`, response.data);
    return response.data;
  }


  //? 5. KULLANICI SİL (DELETE)
  const deleteUserById = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(`ID: ${userId} Silindi:`, response.data);
    return response.data;
  }

  useEffect(() => {
    // CRITICAL DÜZELTME: Asenkron işlemleri sırayla çalıştırma (Race Condition Önleme)
    // Eski kodda tüm istekler aynı anda tetikleniyordu. Bu yüzden silme işlemi eklemeden  önce çalışabiliyor veya güncelleme henüz oluşturulmamış ID'ye atılabiliyordu.

    const executeOperations = async () => {
      try {
        // Step 1: Tüm kullanıcıları çek
        await getAllUsers();

        // Step 2: ID'si 1 olanı getir
        await getUserById("1");

        // Step 3: Yeni kullanıcı oluştur (id alanını json-server'a bırakıyoruz)
        const createdUser = await createUser({
          username: "bilal",
          password: "3366"
        });

        // Step 4: Yeni eklenen kullanıcının id'sini kullanarak güncelleme yap
        if (createdUser && createdUser.id) {
          await updateUser(createdUser.id, {
            username: "react",
            password: "12345"
          });

          // Step 5: Güncellenen kullanıcıyı sil
          await deleteUserById(createdUser.id);
        }

      } catch (error) {
        console.error("API İsteği sırasında hata oluştu:", error.message);
      }
    };

    executeOperations();

  }, []) // Boş bağımlılık dizisi: Bileşen ilk render olduğunda 1 kez çalışır

  return (
    <div>
      <h1>JSON Server & Axios CRUD İşlemleri</h1>
    </div>
  )
}

export default App;

//* npm install axios

//? Json Server Kurulumu
//* Terminali aç → npm install json-server ile kur
//* Serveri çalıştır → npx json-server --watch .\src\db.json --port 3005
// json dosyasında "json.schemaDownload.enable" ile ilgili hata oluyorsa  → npm install json-server@0.17.4

//* http://localhost:3005/users → tüm kullanıcıları getir
//* http://localhost:3005/users/2 → ID'si 2 olan  kullanıcıyı getir

//! console yazdıranaları görmek için projeyi çalıştırmayı da unutma → npm run dev