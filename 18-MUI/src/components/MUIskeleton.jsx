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
// → variant="text": Metin satırına benzeyen bir iskelet oluşturur.
// → variant="circular": Dairesel bir iskelet oluşturur.
// → variant="rectangular": Dikdörtgen bir iskelet oluşturur.
// → variant="rounded": Köşeleri yuvarlatılmış dikdörtgen oluşturur.


//? Animation (Animasyon)
// → animation="pulse": İskeletin parlaklığı değişerek animasyon oluşturur (varsayılan).
// → animation="wave": İskelet üzerinde dalga efekti oluşturur.
// → animation={false}: Animasyonu kapatır.


//? Ek Kullanım
//* Skeleton, gerçek içeriğin boyutlarına yakın hazırlanırsa sayfa düzeninin değişmesini azaltır.
//* Kart iskeleti oluşturmak için birden fazla Skeleton bileşeni birlikte kullanılabilir.
//* Örnek: <Skeleton variant="text" width={200} /> 
//* Örnek: <Skeleton variant="circular" width={40} height={40} />
