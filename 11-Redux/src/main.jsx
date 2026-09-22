import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//* React Redux içerisinden Provider'ı import ediyoru.
//* Provider: Redux Store'u React component ağacının tamamına erişilebilir hale getirir.
//! Provider kullanılmadan component'lerde: useSelector(), useDispatch() kullanıldığında Redux Store bağlantısı kurulamaz.
import { Provider } from 'react-redux'
//* Daha önce Store.jsx'te configureStore() ile oluşturduğumuz merkezi Redux Store'u import ediyoruz.
import { store } from './redux/Store.jsx'


createRoot(document.getElementById('root')).render(

  //* StrictMode geliştirme kontrollerini aktif eder.
  <StrictMode>

    {/*
      Provider'ın store prop'una Redux Store'umuzu veriyoruz.

      store = {store} sayesinde Provider'ın içerisindeki: <App /> ve App'in içerisindeki tüm component'ler Redux Store'a erişebilir.
      Örneğin:
        useSelector(...)
        useDispatch(...)
      artık çalışabilir.
    */}
    <Provider store = {store}>

      {/* Ana React component'imizi çalıştırıyoruz. */}
      <App />

    </Provider>

  </StrictMode>
)