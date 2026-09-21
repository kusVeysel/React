import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/*
  BrowserRouter:
  React Router'ın yönlendirme sistemini aktif eder.

  URL değiştiğinde sayfanın tamamını yenilemeden
  React içerisindeki ilgili Route'un çalışmasını sağlar.

  Örneğin:
  /products
  /product-details/1
  /about
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)