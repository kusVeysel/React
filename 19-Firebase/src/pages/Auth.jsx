import React from 'react'

function Auth() {
    return (
        <div className='auth'>
        <h3 className='auth-header'>Giriş Yap / Kayıt Ol</h3>
            <div className='input-div' >
                <input type="text" placeholder='Email giriniz' />
                <input type="password" placeholder='Şifre giriniz' />
            </div>
            <div className='button-div'>
                <button className='google-button'>Google İle Giriş Yap</button>
                <button className='login-button'>Giriş Yap</button>
                <button className='register-button'>Kayıt ol</button>
            </div>
        </div>
    )
}

export default Auth