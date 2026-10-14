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


//? Variant (İlerleme Türü)
// → variant="indeterminate": İlerleme miktarı bilinmediğinde animasyonlu gösterge kullanır (varsayılan).
// → variant="determinate": İlerleme miktarı belli olduğunda kullanılır.
// → variant="buffer": Ana ilerlemeyle birlikte önceden yüklenmiş veya bekleyen veriyi de gösterebilir (LinearProgress).
// → variant="query": İlerleme miktarı belli olmayan farklı bir animasyon kullanır (LinearProgress).

//? Determinate ve Value
// → value: İlerleme yüzdesini belirler; genellikle 0 ile 100 arasında kullanılır.
// → variant="determinate" value={30}: İşlemin %30 tamamlandığını gösterir.
// → value={progress}: İlerleme değerini progress state'inden alır.
// → aria-label: Göstergeye erişilebilir bir isim verir.


//? Stack ile Düzenleme
//* Stack: Progress bileşenlerini düzenler.
//* spacing={2}: Bileşenler arasındaki boşluğu belirler.


//? Ek Kullanışlı Özellikler
//* size: CircularProgress göstergesinin boyutunu belirler.
//* thickness: CircularProgress çizgisinin kalınlığını belirler.
//* sx: Genişlik, yükseklik ve diğer CSS stillerini ayarlamak için kullanılır.
//* LinearProgress için sx={{ height: 8 }}: İlerleme çubuğunun kalınlığını artırır.
