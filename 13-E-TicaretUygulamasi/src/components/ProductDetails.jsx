import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import '../css/ProductDetails.css'
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice'
import { getAllProducts } from '../redux/slices/productSlice'

function ProductDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { products, loading, error } = useSelector(store => store.product)
    const product = products.find(item => String(item.id) === id)
    const [count, setCount] = useState(0)

    useEffect(() => { if (!products.length) dispatch(getAllProducts()) }, [dispatch, products.length])

    const addBasket = () => {
        if (!product) return
        dispatch(addToBasket({ ...product, count }))
        dispatch(calculateBasket())
    }

    if (loading && !product) return <p className="status-message">Ürün yükleniyor…</p>
    if (error && !product) return <p className="status-message" role="alert">Ürün bilgileri yüklenemedi.</p>
    if (!product) return <div className="status-message"><p>Bu ürün bulunamadı.</p><button className="detail-button" onClick={() => navigate('/')}>Ürünlere dön</button></div>

    return (
        <article className="product-details">

            <div className="detail-image-wrap"><img src={product.image} alt={product.title} /></div>

            <div className="detail-copy">
                <button className="back-link" onClick={() => navigate('/')}>← Ürünlere dön</button>
                <p className="eyebrow">ÜRÜN DETAYI</p>
                <h1>{product.title}</h1>
                <p className="detail-description">{product.description}</p>
                <p className="price">{product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>

                <div className="quantity-control" aria-label="Adet seçimi">
                    <button aria-label="Adedi azalt" onClick={() => setCount(value => Math.max(0, value - 1))}><CiCircleMinus /></button>
                    <span>{count}</span>
                    <button aria-label="Adedi artır" onClick={() => setCount(value => value + 1)}><CiCirclePlus /></button>
                </div>
                
                <button className="SepeteEkle" onClick={addBasket}>Sepete ekle</button>
            </div>
        </article>
    )
}

export default ProductDetails
