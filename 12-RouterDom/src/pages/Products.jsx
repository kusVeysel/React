import React from 'react'
import Product from '../components/Product'
import productsData from '../data/products.json'

function Products() {
  return (
    <div style={{ padding: '20px' }}>

      <h2>Ürünlerimiz</h2>

      {/* 
        productsData içerisindeki bütün ürünleri dolaşıyoruz.

        map(): Array içerisindeki her eleman için yeni bir JSX yapısı oluşturur.

        Örneğin:

        productsData[0] → Bilgisayar
        productsData[1] → Telefon
        productsData[2] → Televizyon
      */}
      {productsData.map((product) => {

        /*
          Product component'ine mevcut ürünü gönderiyoruz.

          product={product} → Ürünün tamamını Product component'ine gönderir.

          key={product.id} → React'in listedeki elemanları birbirinden ayırt edebilmesi için kullanılır.
        */
        return (
          <Product product={product} key={product.id} />
        )
      })}

    </div>
  )
}

export default Products