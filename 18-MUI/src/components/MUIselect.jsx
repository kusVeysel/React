import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';

function MUIselect() {

    const [currency, setCurrency] = useState('');

    const controlCurrency = () => {
        alert(`Seçili para birimi: ${currency}`);
    }

    return (
        <div >
            <FormControl sx={{ width: "150px" }} variant='filled'>
                <InputLabel>Para Birimi</InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="TRY" >Türk Lirası</MenuItem>
                    <MenuItem value="USD" >Dolar</MenuItem>
                    <MenuItem value="EUR" >Euro</MenuItem>
                </Select>
            </FormControl>

            <TextField label="Para Birimi" select sx={{ width: "150px", marginLeft: "20px" }} onChange={(e) => setCurrency(e.target.value)} value={currency} >
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </TextField>

            <Button variant='outlined' size='medium' color='secondary' onClick={controlCurrency} sx={{marginLeft: "20px"}}>Para Birimini Kontrol Et</Button>
            <hr />

        </div>
    )
}

export default MUIselect


//? MUI Select (Seçim Alanı)

//* Select: Açılır listeden seçenek seçilmesini sağlar.
//* FormControl: Select ve InputLabel gibi bileşenleri birlikte düzenler.
//* InputLabel: Seçim alanının başlığını belirler.
//* MenuItem: Açılır listedeki seçenekleri oluşturur.


//? Select Özellikleri
// → value: Seçili olan değeri belirler. Örnek: value={currency}
// → onChange: Seçim değiştiğinde çalışır. Örnek: onChange={(e) => setCurrency(e.target.value)}
// → variant: 'filled' / 'outlined' / 'standard': Alanın görünümünü belirler.
// → sx: Genişlik, boşluk gibi özel stiller uygular. Örnek: sx={{ width: "150px" }}


//? FormControl
//* Select ve InputLabel bileşenlerini bir arada tutar ve düzenler.
// → variant: İçindeki form alanlarının görünümünü belirler.
// → sx: Form alanının genişliği gibi stilleri ayarlar.


//? TextField ile Select Kullanımı
//* TextField select: TextField bileşenini açılır seçim alanına dönüştürür.
//* Seçenekler, TextField içerisine MenuItem bileşenleri eklenerek tanımlanır.
//* Select ve TextField select aynı amaca farklı bileşen yapılarıyla ulaşır.


//? Ek Kullanışlı Özellikler
//* disabled: Seçim alanını veya seçeneği devre dışı bırakır.
//* required: Form gönderiminde alanın doldurulmasını zorunlu kılar.
//* multiple: Select üzerinde birden fazla seçim yapılmasını sağlar; value ve onChange buna göre düzenlenmelidir.
//* displayEmpty: Boş değer için de görüntüleme yapılmasını sağlar.
//* renderValue: Seçili değerin alanda nasıl gösterileceğini özelleştirir.
