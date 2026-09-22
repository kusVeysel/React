//* Redux Toolkit içerisinden iki fonksiyon import ediyoruz
//* createSlice → Redux state + reducer + action yapısını tek yerde oluşturmamızı sağlar.
//* createAsyncThunk → API isteği gibi asynchronous (asenkron) işlemler için kullanılır.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//* HTTP istekleri gerçekleştirmek için axios kütüphanesini import ediyoruz.
import axios from 'axios'

const initialState = {
    // API'den gelecek kullanıcılar burada tutulacak. Başlangıçta henüz kullanıcı olmadığı için boş array kullanıyoruz.
    users: [],
    // API isteğinin devam edip etmediğini takip eder:
    // false → istek devam etmiyor
    // true  → istek devam ediyor
    loading: false,
    // API isteğinde hata oluşursa hata mesajını burada tutabiliriz.
    error: null
}

// createAsyncThunk(): API gibi asynchronous işlemleri Redux ile yönetmek için kullanılır.
// İlk parametre action'ın type prefix'idir.

// 'users/getAllUsers':
// → users: hangi alan/modül?
// → getAllUsers: hangi işlem?

// İkinci parametre async callback fonksiyonudur.

// Bu fonksiyon API isteğini gerçekleştirir.
export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    // Axios'un response.data alanında API tarafından gönderilen asıl veri bulunur
    // Buradaki return değeri createAsyncThunk tarafından fulfilled action'ının payload'ı haline gelir
    return response.data
})
// createAsyncThunk(): Redux Toolkit'te asenkron işlemleri (API istekleri vb.) yürütmek ve bunların pending, fulfilled, rejected durumlarını otomatik üreten action creator'lar oluşturmaya yarar.

// createSlice() Redux state'ini, reducer'larını ve action'larını daha düzenli şekilde oluşturmamızı sağlar
export const userSlice = createSlice({

    // Slice'ın adı.
    // Redux action type'larının oluşturulmasında kullanılır.
    name: "user",

    // Slice'ın başlangıç state'i.
    // Yukarıda oluşturduğumuz initialState'i kullanıyoruz.
    //! yukarıda oluşturduğum initialState verdiğim isim bunla aynı olduğu için initialState: "initialState", yazmaya gerek yok.
    initialState,

    // Normal synchronous reducer'lar burada bulunur.
    // Örneğin: users'a manuel olarak kullanıcı eklemek, kullanıcı silmek, kullanıcı düzenlemek gibi işlemler burada olabilir.
    // Şu anda normal reducer kullanmadığımız için boş bırakıyoruz.
    reducers: {

    }, //! Slice’ın iç (senkron) eylemleri

    // Slice'ın kendi reducers bölümünde tanımlanmayan başka action'lara cevap vermek için kullanılır.
    // createAsyncThunk tarafından otomatik oluşturulan:
    // pending → Beklemede
    // fulfilled → Başarılı
    // rejected → Başarısız
    // durumlarını burada yakalayabiliriz.
    extraReducers: (builder) => {
        // API isteği başladığında pending çalışır.loading değerini true yapıyoruz
        builder.addCase(
            getAllUsers.pending,
            (state) => {
                // API isteği devam ediyor
                state.loading = true
                // Önceki hatayı temizliyoruz
                state.error = null
            }
        )
        // API isteği başarıyla tamamlandığında fulfilled çalışır
        builder.addCase(
            getAllUsers.fulfilled,
            (state, action) => {
                // API isteği artık tamamlandığı için loading false olur
                state.loading = false
                // API'den gelen kullanıcı listesini Redux state'ine kaydediyoruz
                // action.payload → createAsyncThunk içerisindeki return response.data değeridir
                state.users = action.payload
            }
        )
        // API isteği başarısız olursa rejected çalışır
        builder.addCase(
            getAllUsers.rejected,
            (state, action) => {
                // İstek tamamlandı ancak başarısız oldu
                state.loading = false
                // Hata mesajını state içerisinde tutuyoruz
                // action.error.message
                // Redux Toolkit tarafından oluşturulan hata bilgisidir
                state.error = action.error.message
            }
        )
        //* addCase(): extraReducers içinde spesifik bir eylemi (action) hedefleyip o eylem gerçekleştiğinde state'in nasıl değişeceğini tanımlamaya yarar.
    } //! Slice’ın dış (asenkron/Thunk) eylemleri
})

// Bu Slice içerisinde normal reducers bulunmadığı için export edilecek action yok.

// Eğer reducers içerisinde örneğin: addUser: (state, action) => { ... } olsaydı: export const { addUser } = userSlice.actions şeklinde dışarı aktarabilirdik
export const { } = userSlice.actions

// Slice'ın reducer'ını default olarak dışarı aktarıyoruz
// Store.jsx içerisinde: import userReducer from './UserSlice' şeklinde import edilecek.
//! ÖNEMLİ: Burada "userReducer" isimli named export yapmıyoruz. default export yapıyoruz.
export default userSlice.reducer