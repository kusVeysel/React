import { useState, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton';
import bmwM4 from '../assets/bmwM4.jpg'

function MUIskeleton() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, [])

    return (
        <div>
            {
                loading ? <Skeleton variant='rounded' width={250} height={150} animation="wave" /> : <img src={bmwM4} alt="BmwM4" height={350} width={300} />
            }

            <hr />
        </div>
    )
}

export default MUIskeleton

//? MUI Skeleton (Yüklenme İskeleti)
//* Skeleton: İçerik yüklenirken gerçek içerik yerine geçici bir taslak görünümü gösterir.
//* Genellikle resimler, kartlar, metinler ve liste öğeleri yüklenirken kullanılır.
//* İçerik yüklenene kadar boş bir alan göstermek yerine kullanıcıya içerik geleceğini hissettirir.

//? Skeleton Variant (Görünüm Türleri)
//* variant="text": Metin satırına benzeyen bir iskelet oluşturur.
//* variant="circular": Dairesel bir iskelet oluşturur.
//* variant="rectangular": Dikdörtgen bir iskelet oluşturur.
//* variant="rounded": Köşeleri yuvarlatılmış dikdörtgen oluşturur.

//? Boyutlandırma
//* width: Skeleton'ın genişliğini belirler.
//* height: Skeleton'ın yüksekliğini belirler.
//* Örnek: <Skeleton variant="rounded" width={250} height={150} />

//? Animation (Animasyon)
//* animation="pulse": İskeletin parlaklığı değişerek animasyon oluşturur (varsayılan).
//* animation="wave": İskelet üzerinde dalga efekti oluşturur.
//* animation={false}: Animasyonu kapatır.

//? useState ile Yüklenme Kontrolü
//* useState(true): loading değerini başlangıçta true yapar.
//* setLoading(false): Yüklenme durumunu tamamlandı olarak değiştirir.
//* loading ? ... : ...: Koşullu render kullanarak duruma göre farklı içerik gösterir.
//* loading true ise Skeleton, false ise gerçek resim gösterilir.

//? useEffect ve setTimeout
//* useEffect(..., []): Bileşen ilk yüklendiğinde zamanlayıcıyı başlatır.
//* setTimeout(() => {...}, 2500): Fonksiyonu 2500 milisaniye (2,5 saniye) sonra bir kez çalıştırır.
//* Bu örnekte 2,5 saniye sonra Skeleton gizlenir ve resim gösterilir.
//* Gerçek projelerde süreyi sabit belirlemek yerine API isteğinin veya görsel yüklenmesinin tamamlanması beklenebilir.

//? Görsel Kullanımı
//* import bmwM4 from '../assets/bmwM4.jpg': Projedeki görsel dosyasını içe aktarır.
//* src={bmwM4}: İçe aktarılan görseli img bileşeninde gösterir.
//* alt="BmwM4": Görsel yüklenemediğinde alternatif metin sağlar ve erişilebilirliğe yardımcı olur.
//* width ve height: Görselin genişliğini ve yüksekliğini belirler.

//? Ek Kullanım
//* Skeleton, gerçek içeriğin boyutlarına yakın hazırlanırsa sayfa düzeninin değişmesini azaltır.
//* Kart iskeleti oluşturmak için birden fazla Skeleton bileşeni birlikte kullanılabilir.
//* Örnek: <Skeleton variant="text" width={200} /> 
//* Örnek: <Skeleton variant="circular" width={40} height={40} />

//? Not
//* Skeleton kendi başına veri yüklemez; yalnızca geçici bir görünüm sağlar.
//* Bu örnekte setTimeout temizlenmiyor. Bileşen zamanlayıcı tamamlanmadan kaldırılabilecekse useEffect içinde clearTimeout ile temizlemek daha uygundur.