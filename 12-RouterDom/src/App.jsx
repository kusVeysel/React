import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails'


function App() {
  return (
    <div className="app-container">

      {/* Header tüm sayfalarda ortak olarak gösterilir.Kullanıcı hangi Route'a giderse gitsin Header ekranda kalır. */}
      <Header />

      <Routes>

        {/* Ana sayfa: URL: / */}
        <Route path="/" element={<Home />} />


        {/* 
          About ana Route'u.
          Bunun altında iki tane nested/child Route bulunuyor:
          /about/employee
          /about/company
        */}
        <Route path="/about" element={<About />}>
          {/* 
            Parent Route: /about
            Child Route: /about/employee
          */}
          <Route path="employee" element={<EmployeeAbout />} />
          {/* 
            Parent Route: /about
            Child Route: /about/company
          */}
          <Route path="company" element={<CompanyAbout />} />
        </Route>


        {/* Ürünlerin listelendiği sayfa. URL: /products */}
        <Route path="/products" element={<Products />} />


        {/* 
          Ürün detay sayfası. 
          Buradaki :id dinamik(değişken) parametredir.

          Örneğin: 
          /product-details/1
          /product-details/2
          /product-details/3

          Hepsi bu Route tarafından karşılanır.
          :id değerini ProductDetails.jsx içerisinde useParams() ile alacağız.
        */}
        <Route path="/product-details/:id" element={<ProductDetails />} />


        {/* İletişim sayfası. URL: /contact */}
        <Route path="/contact" element={<Contact />} />


        {/* 
          Yukarıdaki Route'ların hiçbirisi URL ile eşleşmezse "*" devreye girer.

          Örneğin:
          /abc
          /test
          /deneme

          gibi tanımlanmamış bir URL girilirse NotFoundPage gösterilir.
        */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Routes, tanımlanan Route'lar arasında o anki aktif linkin eşleşmesi sağlayarak ilgili bileşeni(element) ekrana basar (Switch-Case mantığı). */}

    </div>
  )
}

export default App

//* Terminali aç → npm i react-router-dom
//* Site → https://www.npmjs.com/package/react-router-dom