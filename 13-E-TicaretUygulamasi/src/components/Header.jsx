import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import '../App.css'

function Header() {
  const [theme, setTheme] = useState(false); // false: Light, true: Dark

  const changeTheme = () => {
    const nextTheme = !theme; // Güncel değeri değişkene alıyoruz
    setTheme(nextTheme);

    const root = document.getElementById('root');
    if (root) {
      if (nextTheme) {
        root.style.background = 'black';
        root.style.color = '#fff';
      } else {
        root.style.background = '#fff';
        root.style.color = 'black';
      }
    }
  }

  return (
    <div className='flex-row' style={{ justifyContent: 'space-between' }}>
      <div className='flex-row'>
        <img className='logo' src="../../src/images/logo.png" alt="Logo" />
        <p className='logo-text'>Veysel A.Ş</p>
      </div>

      <div className='flex-row'>
        <input type="text" className='search-input' placeholder='Bir şeyler ara' />

        <div >
          {
            theme ? (
              <CiLight className='icon' onClick={changeTheme} />
            ) : (
              <FaMoon className='icon' onClick={changeTheme} />
            )
          }

          <CiShoppingBasket className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Header