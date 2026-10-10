import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Product from './Product'

function ProductList() {
  const dispatch = useDispatch()
  const { products, search, error } = useSelector(store => store.product)

  useEffect(() => { dispatch(getAllProducts()) }, [dispatch])

  const filteredProducts = products.filter(product => product.title.toLocaleLowerCase('tr-TR').includes(search.trim().toLocaleLowerCase('tr-TR')))

  return (
    <section className="catalog" aria-label="Ürünler">
      <div className="catalog-heading"><p className="eyebrow">SEÇKİN KOLEKSİYON</p><h1>Alışverişe göz at</h1><p>Günlük yaşamına iyi gelecek parçaları keşfet.</p></div>
      {error && <p className="status-message" role="alert">Ürünler yüklenemedi. İnternet bağlantını kontrol edip sayfayı yenile.</p>}
      {!error && products.length > 0 && filteredProducts.length === 0 && <p className="status-message">Aramanızla eşleşen ürün bulunamadı.</p>}
      <div className="product-grid">{filteredProducts.map(product => <Product key={product.id} product={product} />)}</div>
    </section>
  )
}

export default ProductList
