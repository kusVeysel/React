import { useState } from 'react'
import './App.css'

// Routes: İçerisinde tanımlanan tüm Route bileşenlerini tarayan ve mevcut URL ile 
// en iyi eşleşen tek bir Route'u ekrana basan kapsayıcı bileşendir.
// Route: Belirli bir URL yolu (path) ile o yol ziyaret edildiğinde render edilecek 
// React bileşenini (element) eşleştiren yapıdır.
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'

function App() {
  return (
    // DÜZELTME: 'header' sınıfı tüm kapsayıcı div yerine sadece Header bileşenine veya 
    // Header içindeki navigasyon alanına uygulanmalıdır. 
    // Sayfa içeriklerinin etkilenmemesi için dış kapsayıcıya 'app-container' verdik.
    <div className='app-container'>
      {/* Header bileşeni her sayfada sabit kalacak navigasyon menüsüdür */}
      <Header />

      {/* Routes bloğu, URL değiştiğinde sadece eşleşen Route bileşenini ekrana getirir */}
      <Routes>
        {/* path="/": Ana sayfayı temsil eder. URL '/' olduğunda Home bileşeni çalışır */}
        <Route path='/' element={<Home />} />

        {/* path="/about": URL '/about' olduğunda About bileşeni çalışır */}
        <Route path='/about' element={<About />} />

        {/* path="/products": URL '/products' olduğunda Products bileşeni çalışır */}
        <Route path='/products' element={<Products />} />

        {/* path="/contact": URL '/contact' olduğunda Contact bileşeni çalışır */}
        <Route path='/contact' element={<Contact />} />

        {/* path="*": Joker (Wildcard) yönlendirmesidir. Yukarıdaki hiçbir yol eşleşmediğinde 
            (örneğin bulunmayan bir URL girildiğinde) 404/NotFoundPage bileşenini gösterir */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App