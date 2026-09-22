import React from 'react'

//* Tek bir kullanıcıyı ekrana göstermekten sorumlu component
function User({ user }) {
  //! user prop'unu destructuring ile alıyoruz
  //* UserList içerisinde: <User user={user} /> şeklinde gönderdiğimiz değer burada user değişkenine gelir

  // Örneğin user nesnesi:
  // {
  //   id: 1,
  //   name: "Leanne Graham",
  //   username: "Bret",
  //   email: "..."
  // }
  // şeklinde olabilir.


  return (

    <div>
      {/*
        user nesnesinin name property'sini ekrana yazdırıyoruz
        Örneğin: user.name → "Leanne Graham" değerini verebilir
      */}

      {user.name}
    </div>
  )
}

// User component'ini dışarıya default olarak export ediyoruz
export default User