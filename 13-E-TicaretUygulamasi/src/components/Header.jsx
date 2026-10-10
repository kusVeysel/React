import { useEffect, useState } from 'react'
import { CiShoppingBasket, CiLight } from 'react-icons/ci'
import { FaMoon } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from '../redux/slices/basketSlice'
import { setSearch } from '../redux/slices/productSlice'

function Header() {
  const [theme, setTheme] = useState(false)
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, totalItems } = useSelector(store => store.basket)

  useEffect(() => {
    document.documentElement.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate('/')} aria-label="Ana sayfa">
        <span className="brand-mark">V</span><span className="brand-name">Veysel A.Ş.</span>
      </button>
      <div className="header-actions">
        <input type="search" className="search-input" placeholder="Ürünlerde ara" aria-label="Ürünlerde ara" value={searchText} onChange={event => { setSearchText(event.target.value); dispatch(setSearch(event.target.value)) }} />
        <button className="icon-button" aria-label="Temayı değiştir" onClick={() => setTheme(value => !value)}>
          {theme ? <CiLight className="icon" /> : <FaMoon className="icon" />}
        </button>
        <button className="icon-button basket-button" aria-label="Sepeti aç" onClick={() => dispatch(setDrawer())}>
          <Badge badgeContent={totalItems || products.reduce((sum, product) => sum + product.count, 0)} color="error"><CiShoppingBasket className="icon" /></Badge>
        </button>
      </div>
    </header>
  )
}

export default Header
