# ⚛️ React Öğrenme Yolculuğu

**Temel kavramlardan modern React araçlarına uzanan uygulamalı öğrenme deposu**

React, bileşen mimarisi, durum yönetimi, yönlendirme, API kullanımı ve öğrenmek için hazırlanmıştır. modern frontend araçlarını küçük örnekler ve uygulamalar üzerinden

---

## 📌 İçindekiler 

- [Proje Hakkında](#-proje-hakkında)
- [Konular ve Klasör Yapısı](#konularveklasoryapisi)
- [Gereksinimler](#-gereksinimler)
- [Projeyi Kurma](#-projeyi-kurma)
- [Projeyi Çalıştırma](#projecalistirma)
- [Üretim Sürümü Oluşturma](#UretimSurumuOlusturma)
- [Önerilen Öğrenme Sırası](#-önerilen-öğrenme-sırası)
- [Çalışma Önerileri](#-çalışma-önerileri)

## 🎯 Proje Hakkında

Bu depo, React ekosistemindeki temel ve ileri seviye konuları düzenli bir klasör yapısıyla bir araya getirir. Her klasör belirli bir kavramı veya uygulama örneğini ele alır. Amaç, konuları yalnızca teorik olarak öğrenmek değil; kod üzerinde deneyerek anlamak ve gerçek projelerde nasıl kullanılabileceklerini görmektir.

### Neler öğreneceksiniz?

- React bileşenleri ve bileşenler arası veri aktarımı
- State ve effect yönetimi
- Hata ayıklama ve React uygulamalarını geliştirme
- API istekleri ve asenkron veri kullanımı
- Redux ve Redux Toolkit ile merkezi durum yönetimi
- React Router ile sayfa yönlendirme
- TypeScript ile tip güvenli React geliştirme
- Form yönetimi ve doğrulama
- Firebase ve Material UI gibi araçlarla çalışma

<h3 id="konularveklasoryapisi">🗂️ Konular ve Klasör Yapısı</h3>

|Klasör                         |Konu                   | İçerik|
|:---:                          |:---:                  |:---:|
|`01-Giris`                     |React'e giriş          |Temel yapı ve ilk bileşenler|
|`02-ComponentYapisi`           |Component yapısı       |Bileşen oluşturma ve yeniden kullanılabilirlik|
|`03-Props`                     |Props                  |Bileşenlere veri aktarma|
|`04-UseState`                  |`useState`             |Bileşen durumunu yönetme|
|`05-UseEffect`                 |`useEffect`            |Yan etkiler ve yaşam döngüsüyle ilişkili işlemler|
|`06-Debug`                     |Debug                  |Hataları inceleme ve giderme|
|`07-CourseApp`                 |Course App             |Öğrenilen konuları bir araya getiren uygulama|
|`08-ApiUsing`                  |API kullanımı          |Sunucudan veri alma ve asenkron işlemler|
|`09-DovizKuruUygulamasi`       |Döviz kuru uygulaması  |Döviz verileriyle çalışan örnek uygulama|
|`10-TodoUygulamasi`            |Todo uygulaması        |Görevleri listeleme ve yönetme|
|`11-Redux`                     |Redux                  |Merkezi state yönetimine giriş|
|`12-RouterDom`                 |React Router DOM       |Sayfalar arasında yönlendirme|
|`13-E-TicaretUygulamasi`       |E-ticaret uygulaması   |Uygulama ölçeğinde frontend örneği|
|`14-TypeScript`                |TypeScript             |Tipler ve TypeScript temelleri|
|`15-TypeScript-ReduxToolKit`   |TypeScript + Redux     |Tip güvenli state yönetimi|
|`16-CustomHooks`               |Custom Hooks           |Tekrar kullanılabilir React mantığı|
|`17-Formik-Yup`                |Formik + Yup           |Form yönetimi ve veri doğrulama|
|`18-MUI`                       |Material UI (MUI)      |Hazır arayüz bileşenleriyle UI geliştirme|
|`19-Firebase`                  |Firebase               |Firebase servisleriyle çalışma|
    
---

> [!NOTE]
> **Not:** Klasör açıklamaları klasör adlarına göre hazırlanmıştır. Her klasördeki örneklerin ayrıntıları, ilgili kod dosyaları incelenerek görülebilir.

## 🧰 Gereksinimler

Projeyi çalıştırmadan önce aşağıdakilerin kurulu olduğundan emin olun:

- **Node.js:** Güncel LTS sürümü önerilir.
- **npm:** Node.js ile birlikte gelir.
- **Git:** Depoyu Git üzerinden indirecekseniz gereklidir.
- **Kod editörü:** Visual Studio Code önerilir.

Sürümleri kontrol etmek için terminalde çalıştırın:

``` bash
node -v
npm -v
git --version
```

Komutlardan biri tanınmıyorsa ilgili aracı kurup terminali yeniden açın.

## 🚀 Projeyi Kurma

### 1. Depoyu bilgisayarınıza alın

Git deposu kullanıyorsanız:

``` bash
git clone <DEPO_URL>
```

`<DEPO_URL>` bölümünü kendi Git depo adresinizle değiştirin. Depoyu ZIP olarak indirdiyseniz arşivi bir klasöre çıkarın.

### 2. Proje klasörüne girin

``` bash
cd <PROJE_KLASORU>
```

Komut içindeki yer tutucuyu projenizin klasör adıyla değiştirin.

### 3. Bağımlılıkları yükleyin

Projenin kök dizininde, `package.json` dosyasının bulunduğu terminalde:

``` bash
npm install
```

Bu komut, `package.json` içinde tanımlanmış bağımlılıkları yükler. Kurulum tamamlandıktan sonra proje çalıştırılmaya hazır olur.

<h3 id="projecalistirma">▶️ Projeyi Çalıştırma</h3>

Önce `package.json` dosyasındaki `scripts` bölümünü kontrol edin. Proje Vite kullanıyorsa geliştirme sunucusunu şu komutla başlatabilirsiniz:

``` bash
npm run dev
```

Terminalde gösterilen yerel adresi (çoğunlukla `http://localhost:5173`) tarayıcıda açın. Adres ve port, proje yapılandırmasına göre değişebilir.

### `npm run dev` çalışmazsa

`package.json` dosyasındaki script tanımlarını kontrol edin. Proje Create React App gibi farklı bir yapılandırma kullanıyorsa başlatma komutu farklı olabilir. Tanımlı olmayan bir script'i çalıştırmaya çalışmak `Missing script` hatasına neden olur.

<h3 id="UretimSurumuOlusturma">🏗️ Üretim Sürümü Oluşturma</h3>

Vite tabanlı projelerde üretim için optimize edilmiş dosyaları oluşturun:

``` bash
npm run build
```

Oluşturulan dosyalar genellikle `dist/` klasörüne yazılır.

Üretim sürümünü yerel ortamda kontrol etmek için:

``` bash
npm run preview
```

Bu komutların çalışması için `package.json` içinde ilgili script'lerin tanımlı olması gerekir.

## 🧭 Önerilen Öğrenme Sırası

Konular, klasör numaralarına göre ilerleyecek şekilde düzenlenmiştir. Özellikle şu akış faydalıdır:

1.  **Temeller:** Giriş, component yapısı, props ve `useState`
2.  **Bileşen davranışları:** `useEffect` ve debug
3.  **Uygulama geliştirme:** Course App, API kullanımı, döviz kuru ve
    Todo uygulaması
4.  **Daha kapsamlı yapılar:** Redux, Router DOM ve e-ticaret uygulaması
5.  **Tip güvenliği ve yeniden kullanım:** TypeScript, Redux Toolkit ve
    Custom Hooks
6.  **Arayüz ve servisler:** Formik-Yup, Material UI ve Firebase

> [!WARNING]
> Bir konuya geçmeden önce örnekleri çalıştırmanız, kodu değiştirerek sonucu gözlemlemeniz ve öğrendiklerinizi küçük bir örnekle tekrar etmeniz önerilir.

## 💡 Çalışma Önerileri

- Her klasörü ayrı bir konu olarak ele alın; kodu yalnızca kopyalamak yerine anlamaya çalışın.
- Değişkenleri ve bileşenleri değiştirerek uygulamanın davranışını gözlemleyin.
- Tarayıcının geliştirici araçlarını ve terminal hata mesajlarını inceleyin.
- API veya Firebase kullanan örneklerde gerekli yapılandırma bilgilerini ilgili klasörün kodundan ve dokümantasyonundan kontrol edin.
- Gizli anahtarları ve özel erişim bilgilerini Git deposuna eklemeyin.
- Öğrendiğiniz kavramları küçük bir kişisel projede tekrar uygulayın.

---

**Veysel KUŞ**