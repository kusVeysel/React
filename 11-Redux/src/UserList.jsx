// React içerisinden useEffect hook'unu import ediyoruz.
// useEffect, component'in belirli durumlarda yan etkili işlemler
// gerçekleştirmesini sağlar.
//
// Örneğin burada component ilk kez oluşturulduğunda API isteği yapacağız.
import React, { useEffect } from 'react'


// React Redux içerisinden iki hook import ediyoruz.
//
// useDispatch -> Redux Store'a action göndermek için kullanılır.
//
// useSelector -> Redux Store içerisindeki state'i okumak için kullanılır.
import { useDispatch, useSelector } from 'react-redux'


// UserSlice içerisinden createAsyncThunk ile oluşturduğumuz
// getAllUsers fonksiyonunu import ediyoruz.
//
// Bu fonksiyon API isteğini gerçekleştirecek async action'dır.
import { getAllUsers } from './redux/UserSlice'


// Her bir kullanıcıyı gösterecek olan User component'ini import ediyoruz.
import User from './User'


// Kullanıcı listesinden sorumlu component.
function UserList() {

  // useDispatch() Redux Store'a action göndermemizi sağlayan
  // dispatch fonksiyonunu oluşturur.
  const dispatch = useDispatch()


  // useSelector() Redux Store içerisindeki state'i okumamızı sağlar.
  //
  // Store.jsx içerisinde:
  //
  // reducer: {
  //   counter: counterReducer,
  //   user: userReducer
  // }
  //
  // şeklinde tanımladığımız için burada:
  //
  // store.user
  //
  // ile UserSlice'a ait state'e ulaşabiliriz.
  //
  // Buradaki destructuring sayesinde:
  //
  // const { users } = ...
  //
  // diyerek sadece users değerini alıyoruz.
  const { users } = useSelector((store) => store.user)


  // useEffect component oluşturulduktan sonra belirli bir işlemi
  // gerçekleştirmek için kullanılır.
  //
  // Burada amacımız component ilk kez ekrana geldiğinde
  // API'den kullanıcıları almaktır.
  useEffect(() => {

    // getAllUsers() createAsyncThunk tarafından oluşturulmuş
    // async action creator'dır.
    //
    // dispatch() ile bu action'ı Redux Store'a gönderiyoruz.
    //
    // getAllUsers çalıştığında API isteği yapılacak.
    dispatch(getAllUsers())

  }, [dispatch])
  // dispatch dependency olarak yazılır.
  //
  // React'in useEffect kurallarına uygun olması açısından
  // kullanılan dış değişkenleri dependency array içerisinde belirtmek
  // daha doğru yaklaşımdır.
  //
  // dispatch React Redux tarafından stabil olarak sağlandığı için
  // normalde sürekli yeniden çalışmasına neden olmaz.


  // Component'in ekrana basacağı JSX yapısını döndürüyoruz.
  return (
    <>

      {/*
        users değerinin mevcut olup olmadığını kontrol ediyoruz.

        Eğer users null/undefined gibi bir değer olsaydı
        doğrudan users.map() kullanmak hata oluşturabilirdi.

        users &&

        ifadesi users varsa sağ tarafın çalışmasını sağlar.
      */}
      {
        users && users.map((user) => (

          /*
            Her kullanıcı için User component'i oluşturuyoruz.

            user={user}
            -> user isimli prop'a mevcut kullanıcı nesnesini gönderiyoruz.

            key={user.id}
            -> React'in listedeki elemanları birbirinden ayırt
               edebilmesi için unique key veriyoruz.

            JSONPlaceholder kullanıcılarında id değerleri benzersizdir.
          */
          <User
            user={user}
            key={user.id}
          />

        ))
      }

    </>
  )
}


// UserList component'ini dışarıya default olarak export ediyoruz.
export default UserList