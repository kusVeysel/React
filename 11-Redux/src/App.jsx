import './App.css'
//* UserList component'ini import ediyoruz.Bu component kullanıcı listesini ekrana basacak
import UserList from './UserList'
//* React Redux kütüphanesinden iki hook import ediyoruz
//* useSelector → Redux Store içerisindeki state'i okumak için kullanılır
//* useDispatch → Redux Store'a action göndermek için kullanılır
import { useSelector, useDispatch } from 'react-redux'
//* CounterSlice içerisinden oluşturduğumuz action'ları import ediyoruz
//* increment → sayacı 1 arttıran fonksiyon
//* decrement → sayacı 1 azaltan fonksiyon
import { increment, decrement } from './redux/CounterSlice'


//* App ana component'idir.Uygulamanın ana ekranındaki yapılar burada oluşturulur
function App() {
  
  //* useDispatch() Redux Store'a action göndermemizi sağlayan dispatch fonksiyonunu verir
  //* Örneğin: dispatch(increment())
  //* Burada increment() bir action oluşturur, dispatch() ise oluşturulan action'ı Redux Store'a gönderir
  const dispatch = useDispatch()

  
  //* useSelector() Redux Store içerisindeki state'i okumak için kullanılır
  //* store → Redux Store'un tamamıdır
  //* store.counter → Store içerisinde "counter" adıyla tanımladığımız bölümdür

  const state = useSelector((store) => store.counter)
  //! CounterSlice içindeki tanımından dolayı burada store.counter kullanabiliyoruz

  //  Store.jsx içerisindeki:
  // reducer: {
  //   counter: counterReducer
  // }
  

  return (
    <>
      {/* 
        Redux Store içerisindeki counter state'inin value değerini gösteriyoruz

        CounterSlice içerisindeki başlangıç state'i: value: 0 olduğu için başlangıçta ekranda 0 görünür
      */}
      <h4>{state.value}</h4>


      <div>

        {/*
          Butona tıklandığında increment() action'ı oluşturulur

          increment() → Action oluşturur

          dispatch(increment()) → Oluşturulan action'ı Redux Store'a gönderir

          Redux daha sonra CounterSlice içerisindeki increment reducer'ını çalıştırır
        */}

        <button onClick={() => dispatch(increment())}>
          Arttır
        </button>


        {/*
          Aynı mantık decrement için de geçerlidir

          decrement() → azaltma action'ı oluşturur

          dispatch(decrement()) → Action Redux Store'a gönderilir

          CounterSlice içerisindeki decrement reducer'ı çalışır
        */}

        <button onClick={() => dispatch(decrement())}>
          Azalt
        </button>

      </div>


      {/*
        UserList component'ini çağırıyoruz

        UserList component'i:
        1. Redux Store'dan kullanıcıları alır.
        2. API isteği başlatır.
        3. Gelen kullanıcıları map() ile dolaşır.
        4. Her kullanıcı için User component'i oluşturur.
      */}
      <UserList />

    </>
  )
}


// App component'ini başka dosyalarda kullanabilmek için
// default olarak export ediyoruz.
export default App

//? Redux DevTools
//* googleye git → redux devtools yaz → chrome web store → Chrome'a ekle → alt alta 3 noktaya bas → uzantılar → redux devtools ayrıntılar → araç çubuğuna sabitle aç → sağ üste sabitlenecek
// redux kullandığınız projeyi çalıştırıp sabitlenen ikona basarak test edebilirsiniz

//? Redux DevTools, Redux kullanan uygulamalarda durum (state) yönetimini izlemek, hata ayıklamak (debug) ve uygulamanın nasıl çalıştığını analiz etmek için kullanılan bir geliştirici aracıdır