import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

const provider = new GoogleAuthProvider();

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            const user = response.user;
            if (user) {
                toast.success("Google ile giriş işlemi başarılı");
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            }

        } catch (error) {
            toast.error(error.message);
        }

    }


    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Giriş Başarılı");
                setTimeout(() => {
                    navigate("/");
                }, 3000)
            }

        } catch (error) {
            toast.error("Giriş Yapılamadı\n" + error.message);
        }

    }


    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu");
                setEmail('');
                setPassword('');
            }

        } catch (error) {
            toast.error("Kayıt Yapılamadı\n" + error.message);
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
                <button className='google-button' onClick={loginWithGoogle} >Google İle Giriş Yap</button>
                <button className='login-button' onClick={login} >Giriş Yap</button>
                <button className='register-button' onClick={register}>Kayıt ol</button>
            </div>
        </div>
    )
}

export default Auth