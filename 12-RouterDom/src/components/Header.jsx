//* Link: Sayfanın yeniden yüklenmesini (refresh/reload) engelleyerek SPA (Single Page Application) mantığına uygun bir şekilde sayfalar arası geçiş yapmayı sağlayan bileşendir.
//* HTML'deki <a> etiketinin yerini alır; 'href' yerine 'to' prop'u kullanılır.
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link className='link' to="/">Anasayfa</Link>
      <Link className='link' to="/about">Hakkımızda</Link>
      <Link className='link' to="/products">Ürünlerimiz</Link>
      <Link className='link' to="/contact">İletişim</Link>
    </div>
  )
}

export default Header