import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, price, image, title } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt={title} loading="lazy" />
            <div>
                <p style={{ textAlign: 'center', height: '85px', marginTop: '20px' }} >{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</h3>
            </div>
            <div className='flex-row'>
                <button className='detail-button' onClick={() => navigate(`/product-details/${id}`)} >Detayına git</button>
            </div>
        </div>
    )
}

export default Product
