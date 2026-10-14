import { Button } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

function MUIbutton() {
    return (
        <div>
            <div>
                <Button variant='text'>variant-text</Button>
                <Button variant='contained'>variant-contained</Button>
                <Button variant='outlined'>variant-outlined</Button>
            </div>
            <hr />
            <div>
                <Button color='error'>color-error</Button>
                <Button color='info'>color-info</Button>
                <Button color='inherit'>color-inherit</Button>
                <Button color='primary'>color-primary</Button>
                <Button color='secondary'>color-secondary</Button>
                <Button color='success'>color-success</Button>
                <Button color='warning'>color-warning</Button>
            </div>
            <hr />
            <div>
                <Button variant='outlined' size='small'>size-small</Button>
                <Button variant='outlined' size='medium'>size-medium</Button>
                <Button variant='outlined' size='large'>size-large</Button>
            </div>
            <hr />
            <div>
                <Button color="secondary" variant='outlined' startIcon={<ControlPointIcon />}>startIcon</Button>
                <Button color="secondary" variant='outlined' endIcon={<ControlPointIcon />}>endIcon</Button>
            </div>
            <hr />
        </div>
    )
}

export default MUIbutton

//? MUI Button (Buton Kullanımı)
//* variant → 'text': Arka planı olmayan, metin şeklinde buton oluşturur.
//* variant → 'contained': Dolgulu, arka plan rengine sahip buton oluşturur.
//* variant → 'outlined': Kenarlıklı, şeffaf arka planlı buton oluşturur.

//? Color (Buton Rengi)
//* color → 'primary': Ana tema rengi.
//* color → 'secondary': İkincil tema rengi.
//* color → 'success': Başarı (genellikle yeşil).
//* color → 'error': Hata (genellikle kırmızı).
//* color → 'warning': Uyarı (genellikle turuncu).
//* color → 'info': Bilgilendirme rengi.
//* color → 'inherit': Üst elementin metin rengini devralır.

//? Size (Boyut)
//* size → 'small': Küçük buton.
//* size → 'medium': Orta boy buton (varsayılan).
//* size → 'large': Büyük buton.

//? Icon (İkon Kullanımı)
//* startIcon → {<ControlPointIcon />}: İkonu metnin soluna ekler.
//* endIcon → {<ControlPointIcon />}: İkonu metnin sağına ekler.
// → İkon kullanmak için `@mui/icons-material` paketinden ilgili ikon import edilir.

//? Ek Kullanışlı Özellikler
//* disabled: Butonu devre dışı bırakır. Örnek: <Button disabled>Pasif</Button>
//* fullWidth: Butonun bulunduğu alanın genişliğini kaplamasını sağlar.
//* onClick: Butona tıklandığında çalışacak fonksiyonu belirler. Örnek: <Button onClick={() → alert('Tıklandı')}>Tıkla</Button>
//* href: Butonu bağlantı olarak kullanır. Örnek: <Button href="https://example.com">Siteye Git</Button>
//* loading: Yükleme durumunu gösterir ve butonun tekrar kullanılmasını engeller. Desteklenen MUI sürümüne bağlıdır.
//* sx: Butona özel CSS benzeri stiller uygular. Örnek: `<Button sx={{ borderRadius: 3, m: 1 }}>Özel Stil</Button>`
//* disableElevation: contained butonun gölge efektini kaldırır.
//* disableRipple: Tıklama dalgası efektini kapatır.
