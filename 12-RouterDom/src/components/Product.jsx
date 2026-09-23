import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({ product, showButton = true }) {

  /*
    product prop'undan gerekli bilgileri alıyoruz.

    Örneğin product:

    {
      id: "1",
      name: "Bilgisayar",
      price: "50.000"
    }

    ise:

    id    → "1"
    name  → "Bilgisayar"
    price → "50.000"
  */
  const { id, name, price } = product

  /*
    useNavigate():

    React Router içerisinde JavaScript kullanarak başka bir Route'a geçmemizi sağlar.

    Örneğin: navigate("/products") veya: navigate("/product-details/1")
  */
  const navigate = useNavigate()

  /*
    showButton varsayılan olarak true.

    Product component'i normal ürün listesinde kullanıldığında:

    <Product product={product} />

    showButton → true olur.

    Detay sayfasında ise: <Product product={currentProduct} showButton={false} /> diyerek butonu gizliyoruz.
  */
  return (
    <div
      style={{
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: 'lightgray',
        borderRadius: '8px'
      }}
    >

      <div>Ürün Bilgisi</div>

      <h3>İsim: {name}</h3>

      <h3>Fiyatı: {price} TL</h3>

      {/*
        showButton true ise buton oluşturulur.

        false ise buton hiç oluşturulmaz.
      */}
      {showButton && (
        <button
          onClick={() => {
            /*
              Tıklanan ürünün id değerini URL'ye ekliyoruz.

              Örneğin: id = "1" oluşacak URL: /product-details/1
            */
            navigate(`/product-details/${id}`)
          }}>
          Detayına Git
        </button>
      )}

    </div>
  )
}

export default Product