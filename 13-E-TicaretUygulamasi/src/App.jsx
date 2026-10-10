import { useEffect } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer, removeFromBasket } from './redux/slices/basketSlice'

function App() {
  const { products, drawer, totalAmount } = useSelector(store => store.basket)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(calculateBasket()) }, [products, dispatch])

  return <PageContainer>
    <Loading />
    <Header />
    <main><RouterConfig /></main>
    <Drawer anchor="right" open={drawer} onClose={() => dispatch(setDrawer())} PaperProps={{ className: 'basket-drawer' }}>
      <div className="drawer-header"><h2>Sepetiniz</h2><button onClick={() => dispatch(setDrawer())} aria-label="Sepeti kapat">×</button></div>
      <div className="drawer-products-list">
        {products.length ? products.map(product => <div key={product.id} className="drawer-item">
          <img src={product.image} alt={product.title} />
          <div className="drawer-product-copy"><p>{product.title}</p><span>{product.count} adet · {(product.price * product.count).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span></div>
          <button className="remove-button" onClick={() => dispatch(removeFromBasket(product.id))}>Sil</button>
        </div>) : <p className="empty-basket">Sepetiniz henüz boş.</p>}
      </div>
      <div className="drawer-footer"><span>Toplam tutar</span><strong>{totalAmount.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</strong></div>
    </Drawer>
  </PageContainer>
}

export default App
