// React'in StrictMode özelliğini import ediyoruz.
//
// StrictMode geliştirme aşamasında bazı hataları ve
// potansiyel problemleri fark etmemize yardımcı olur.
import { StrictMode } from 'react'


// React uygulamasını HTML içerisindeki root elementine
// bağlamak için createRoot'u import ediyoruz.
import { createRoot } from 'react-dom/client'


// Global CSS dosyamızı import ediyoruz.
import './index.css'


// Ana App component'imizi import ediyoruz.
import App from './App.jsx'


// React Redux içerisinden Provider'ı import ediyoruz.
//
// Provider:
// Redux Store'u React component ağacının tamamına erişilebilir hale getirir.
//
// Provider kullanılmadan component'lerde:
// useSelector()
// useDispatch()
//
// kullanıldığında Redux Store bağlantısı kurulamaz.
import { Provider } from 'react-redux'


// Daha önce configureStore() ile oluşturduğumuz merkezi Redux Store'u
// import ediyoruz.
import { store } from './redux/Store.jsx'


// HTML içerisindeki id="root" elementini buluyoruz.
//
// createRoot()
// React uygulamasının hangi HTML elementinin içerisine
// yerleştirileceğini belirler.
createRoot(document.getElementById('root')).render(

  // StrictMode geliştirme kontrollerini aktif eder.
  <StrictMode>

    {/*
      Provider'ın store prop'una Redux Store'umuzu veriyoruz.

      store={store}

      sayesinde Provider'ın içerisindeki:

      <App />

      ve App'in içerisindeki tüm component'ler Redux Store'a erişebilir.

      Örneğin:

      useSelector(...)
      useDispatch(...)

      artık çalışabilir.
    */}
    <Provider store={store}>

      {/* Ana React component'imizi çalıştırıyoruz. */}
      <App />

    </Provider>

  </StrictMode>
)