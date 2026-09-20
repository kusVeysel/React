// Redux Toolkit içerisinden configureStore fonksiyonunu import ediyoruz.
//
// configureStore()
// -> Redux Store oluşturmak için kullanılır.
// -> Reducer'ları tek bir merkezi Store altında birleştirir.
import { configureStore } from '@reduxjs/toolkit'


// CounterSlice içerisinden default olarak export edilen reducer'ı
// import ediyoruz.
//
// CounterSlice sonunda:
//
// export default counterSlice.reducer
//
// olduğu için burada {} kullanmıyoruz.
import counterReducer from '../redux/CounterSlice'


// UserSlice içerisinden default olarak export edilen reducer'ı
// import ediyoruz.
//
// DİKKAT:
//
// Yanlış:
// import { userReducer } from '../redux/UserSlice'
//
// Doğru:
// import userReducer from '../redux/UserSlice'
//
// Çünkü UserSlice'ta userReducer named export edilmedi.
// reducer default export edildi.
import userReducer from '../redux/UserSlice'


// Merkezi Redux Store'u oluşturuyoruz.
//
// Store:
// Uygulamanın global state'lerinin tutulduğu merkezi yapıdır.
//
// React component'leri Redux Store'a:
// - dispatch ile veri gönderebilir.
// - useSelector ile veri okuyabilir.
export const store = configureStore({

    // reducer objesi Store içerisindeki state bölümlerini belirler.
    reducer: {

        // Store içerisindeki counter bölümü CounterSlice reducer'ı
        // tarafından yönetilir.
        //
        // Bu yüzden component içerisinde:
        //
        // store.counter
        //
        // şeklinde erişebiliriz.
        counter: counterReducer,


        // Store içerisindeki user bölümü UserSlice reducer'ı
        // tarafından yönetilir.
        //
        // Component içerisinde:
        //
        // store.user
        //
        // şeklinde erişebiliriz.
        user: userReducer

    }

})