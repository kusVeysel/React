//* Redux Toolkit içerisinden createSlice fonksiyonunu import ediyoruz
//* createSlice: Redux'ta state + reducer + action yapılarını daha kolay oluşturmamızı sağlar
import { createSlice } from '@reduxjs/toolkit'
//* Counter state'inin başlangıç değerini oluşturuyoruz
//* Redux Store uygulama ilk açıldığında: value = 0 olacaktır

const initialState = {
  // Sayaç değerinin başlangıç değeri
  value: 0

}

//* Counter ile ilgili Redux yapısını oluşturuyoruz.
export const counterSlice = createSlice({

  // Slice'ın adı
  // Bu isim Redux action type'larının oluşturulmasında kullanılır
  name: 'counter',

  // Slice'ın başlangıç state'idir
  // Burada yukarıda oluşturduğumuz initialState'i kullanıyoruz
  initialState,


  // State'i değiştirecek reducer fonksiyonları burada bulunur
  reducers: {


    // increment isimli action/reducer oluşturuyoruz
    // Bu reducer çalıştığında: state.value += 1 yapılır

    increment: (state) => {
      // Sayaç değerini 1 artırıyoruz
      state.value += 1

    },

    // decrement isimli action/reducer oluşturuyoruz
    // Bu reducer çalıştığında: state.value -= 1 yapılır
    decrement: (state) => {

      // Sayaç değerini 1 azaltıyoruz.
      state.value -= 1

    }

  }

})


// createSlice tarafından otomatik oluşturulan action creator'ları dışarı aktarıyoruz

// Artık App.jsx içerisinde:
//   dispatch(increment())
//   dispatch(decrement())
// şeklinde kullanabiliriz
export const { increment, decrement } = counterSlice.actions


// Slice'ın reducer'ını default olarak dışarı aktarıyoruz
// Store.jsx içerisinde: import counterReducer from './CounterSlice' şeklinde kullanılabilir
// Bu reducer, counter state'inin nasıl değişeceğini Redux Store'a bildirir
export default counterSlice.reducer