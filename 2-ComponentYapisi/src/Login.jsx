import React from 'react'

export const users = [
    {
        name: "veysel",
        age: "18"
    },
    {
        name: "ilayda",
        age: "18"
    }
]

function Login() {
    return (
        <>
            <label>Kullanıcı Adı</label>
            <input type="text" />

            <label>Şifre</label>
            <input type="password" />

            <button>Giriş Yap</button>
        </>
    )
}


export default Login