import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Navbar() {

  const navigate = useNavigate();

  const logout = async () => {
    const response = await signOut(auth);
    if (response != 0) {
      toast.success("Çıkış İşlemi Başarılı")
      setTimeout(() => {
        navigate("/auth");
      }, 3000);
    }
  }

  return (
    <div className='navbar'>
      <div className='navbar-left'>FIRABASE</div>
      <div className='navbar-right' onClick={logout}>Çıkış Yap</div>
    </div>
  )
}

export default Navbar