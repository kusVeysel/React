import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import Product from '../components/Product'

function ProductDetails() {
  /* 
    useParams(): URL'deki dinamik parametreyi yakalar (:id).
    Örn: /product-details/2 -> id = "2"
  */
  const { id } = useParams()

  /* 
    useNavigate(): Sayfalar arası programatik yönlendirme sağlar.
  */
  const navigate = useNavigate()

  /* 
    URL'den gelen `id` string tipindedir. 
    Eğer JSON verisindeki `id` sayısı (number) tipindeyse eşleşme türü uyuşmalıdır. 
    Bu yüzden `String(item.id) === id` veya loose equality `item.id == id` kontrolü güvenlidir.
  */
  const currentProduct = productsData.find(
    (item) => String(item.id) === String(id)
  )

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ürün Detayları</h1>

      {/* Tıklandığında kullanıcıyı /products rotasına geri yönlendirir. */}
      <button onClick={() => navigate('/products')}>
        ← Ürünlere Geri Dön
      </button>

      <hr />

      {/* 
        Ürün bulunduysa Product bileşeni render edilir. 
        showButton={false} ile detay sayfasında tekrar yönlendirme butonu çıkması engellenir.
      */}
      {currentProduct ? (<Product product={currentProduct} showButton={false} />) : (<h2>Ürün Bulunamadı!</h2>)}
    </div>
  )
}

export default ProductDetails