import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// BrowserRouter: React uygulamasında HTML5 History API'sini (pushState, replaceState vb.) 
// kullanarak sayfa yenilenmeden URL güncellemelerini ve yönlendirmeleri yöneten ana bileşendir.
// Yönlendirme (routing) özelliğinin çalışabilmesi için tüm uygulamanın veya kapsanacak alanın 
// bu bileşenle sarılması gerekir.
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // BrowserRouter ile App bileşenini sararak yönlendirme altyapısını aktif ediyoruz.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)