import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import productsData from '../data/products.json'
import Product from '../components/Product'

function ProductDetails() {

  /*
    useParams():

    Route içerisinde:

    /product-details/:id

    şeklinde tanımladığımız :id değerini yakalar.

    Örneğin URL:

    /product-details/2

    ise:

    id = "2"
  */
  const { id } = useParams()

  /*
    Detay sayfasından tekrar ürünler sayfasına
    dönebilmek için useNavigate kullanıyoruz.
  */
  const navigate = useNavigate()

  /*
    JSON içerisindeki ürünleri dolaşıyoruz.

    URL'den gelen id ile ürünün id'sini karşılaştırıyoruz.

    Örneğin:

    URL:
    /product-details/2

    id:
    "2"

    JSON:
    {
      "id": "2",
      "name": "Telefon",
      "price": "20.000"
    }

    eşleştiğinde bu ürün currentProduct değişkenine atanır.
  */
  const currentProduct = productsData.find(
    (item) => item.id === id
  )

  return (
    <div style={{ padding: '20px' }}>

      <h1>Ürün Detayları</h1>

      {/*
        navigate():

        Kullanıcı butona bastığında
        /products Route'una gider.
      */}
      <button
        onClick={() => navigate('/products')}
      >
        ← Ürünlere Geri Dön
      </button>

      <hr />

      {/*
        currentProduct varsa ürün bulundu demektir.

        Ürün bulunduysa Product component'ini
        tekrar kullanıyoruz.

        showButton={false} diyerek
        detay sayfasındaki "Detayına Git"
        butonunu gizliyoruz.
      */}
      {currentProduct ? (

        <Product
          product={currentProduct}
          showButton={false}
        />

      ) : (

        /*
          find() hiçbir ürün bulamazsa
          currentProduct undefined olur.

          Bu durumda kullanıcıya hata mesajı gösteriyoruz.
        */
        <h2>Ürün Bulunamadı!</h2>

      )}

    </div>
  )
}

export default ProductDetails