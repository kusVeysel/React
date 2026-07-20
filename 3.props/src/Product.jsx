import React from 'react'

function Product(props) { // 3.kullanım parametre olarak direk "{productName,price}" girmek
    const {productName,price} = props ; // Destruct eder , nokta nokta diye properti belirtmeye gerek yok, 2. kullanım
    return (
        <>
            <div>Ürün Bilgileri</div>
            <hr />
            <div>
                <p>İsim: {productName}</p> {/* Destructsız:  props.productName */}
                <p>Fiyat: {price}</p> {/* Destructsız: props.price */}
            </div>

        </>
    )
}

export default Product