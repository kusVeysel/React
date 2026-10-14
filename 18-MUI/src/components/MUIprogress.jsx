
import { useState, useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

function MUIprogress() {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0
                }

                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 100)
            })
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <Stack spacing={2}>
                <CircularProgress />
                <CircularProgress color="warning" />
                <LinearProgress />
                <LinearProgress color="secondary" />
                <LinearProgress
                    color="inherit"
                    variant="determinate"
                    value={30}
                />

                <LinearProgress
                    variant="determinate"
                    value={progress}
                    aria-label="Export data"
                    color='success'
                />
            </Stack>

            <hr />
        </div>
    )
}

export default MUIprogress

//? MUI Progress (Yüklenme / İlerleme Göstergesi)
//* Progress: Bir işlemin devam ettiğini veya ne kadar ilerlediğini göstermek için kullanılır.
//* CircularProgress: Dairesel yüklenme göstergesi oluşturur.
//* LinearProgress: Yatay ilerleme çubuğu oluşturur.

//? Progress Renkleri
//* color="primary": Temanın ana rengini kullanır (varsayılan).
//* color="secondary": Temanın ikincil rengini kullanır.
//* color="success": Başarı rengini kullanır.
//* color="warning": Uyarı rengini kullanır.
//* color="error": Hata rengini kullanır.
//* color="inherit": Üst bileşenden miras alınan metin rengini kullanır.

//? Variant (İlerleme Türü)
//* variant="indeterminate": İlerleme miktarı bilinmediğinde animasyonlu gösterge kullanır (varsayılan).
//* variant="determinate": İlerleme miktarı belli olduğunda kullanılır.
//* variant="buffer": Ana ilerlemeyle birlikte önceden yüklenmiş veya bekleyen veriyi de gösterebilir (LinearProgress).
//* variant="query": İlerleme miktarı belli olmayan farklı bir animasyon kullanır (LinearProgress).

//? Determinate ve Value
//* value: İlerleme yüzdesini belirler; genellikle 0 ile 100 arasında kullanılır.
//* variant="determinate" value={30}: İşlemin %30 tamamlandığını gösterir.
//* value={progress}: İlerleme değerini progress state'inden alır.
//* aria-label: Göstergeye erişilebilir bir isim verir.

//? useState ile İlerlemeyi Güncelleme
//* useState(0): İlerleme değerini başlangıçta 0 yapar.
//* setProgress: İlerleme değerini günceller.
//* setProgress((oldProgress) => ...): Önceki state değerini kullanarak yeni değer hesaplar.
//* Math.random() * 10: 0 ile 10 arasında rastgele bir sayı üretir.
//* Math.min(oldProgress + diff, 100): İlerleme değerinin 100'ü aşmasını engeller.
//* oldProgress === 100 ise 0 döndürülerek ilerleme yeniden başlatılır.

//? useEffect ve setInterval
//* useEffect(..., []): Bileşen ilk yüklendiğinde zamanlayıcıyı başlatır.
//* setInterval(..., 500): Fonksiyonu her 500 milisaniyede (0,5 saniyede) çalıştırır.
//* clearInterval(timer): Bileşen kaldırıldığında zamanlayıcıyı temizler.
//* return () => clearInterval(timer): Bellek sızıntılarını ve gereksiz zamanlayıcıları önlemeye yardımcı olur.

//? Stack ile Düzenleme
//* Stack: Progress bileşenlerini düzenler.
//* spacing={2}: Bileşenler arasındaki boşluğu belirler.

//? Ek Kullanışlı Özellikler
//* size: CircularProgress göstergesinin boyutunu belirler.
//* thickness: CircularProgress çizgisinin kalınlığını belirler.
//* sx: Genişlik, yükseklik ve diğer CSS stillerini ayarlamak için kullanılır.
//* LinearProgress için sx={{ height: 8 }}: İlerleme çubuğunun kalınlığını artırır.

//? Not
//* Indeterminate göstergeler, süresi veya ilerleme oranı bilinmeyen işlemler için uygundur.
//* Determinate göstergeler, dosya yükleme veya dışa aktarma gibi ilerleme yüzdesi bilinen işlemlerde kullanılabilir.
//* Bu örnekte progress değeri gerçek bir işlemi takip etmez; rastgele artırılarak animasyon oluşturulur.
//* Örnek: <CircularProgress variant="determinate" value={75} /> → %75 ilerleme gösterir.