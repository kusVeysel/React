import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if(user){
                setEmail('');
                setPassword('');
            }

        } catch (error) {

        }
    }

    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kayıt Ol</h3>
            <div className='input-div' >
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email giriniz' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Şifre giriniz' />
            </div>
            <div className='button-div'>
                <button className='google-button'>Google İle Giriş Yap</button>
                <button className='login-button'>Giriş Yap</button>
                <button className='register-button' onClick={register}>Kayıt ol</button>
            </div>
        </div>
    )
}

export default Auth