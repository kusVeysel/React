import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

function MUIcheckbox() {

    const [confirms, setConfirms] = useState([false, false, false, false]);

    const controlCheck = () => {
        const labels = ['İlkokul', 'Ortaokul', 'Lise', 'Üniversite'];

        const selected = confirms
            .map((confirm, index) => confirm ? labels[index] : null)
            .filter(Boolean);

        if (selected.length > 0) {
            alert(`Seçili checkbox(lar): ${selected.join(', ')}`);
        } else {
            alert('Hiçbir checkbox seçilmedi.');
        }
    };

    const handleCheck = (index, checked) => {
        setConfirms(prev => {
            const updated = [...prev];
            updated[index] = checked;
            return updated;
        });
    };

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    Eğitim Durumu
                </FormLabel>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[0]}
                                onChange={(e) => handleCheck(0, e.target.checked)}
                            />
                        }
                        label="İlkokul"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[1]}
                                onChange={(e) => handleCheck(1, e.target.checked)}
                            />
                        }
                        label="Ortaokul"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[2]}
                                onChange={(e) => handleCheck(2, e.target.checked)}
                            />
                        }
                        label="Lise"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[3]}
                                onChange={(e) => handleCheck(3, e.target.checked)}
                            />
                        }
                        label="Üniversite"
                        labelPlacement="end"
                    />
                </FormGroup>

                <Button
                    variant="outlined"
                    size="medium"
                    color="info"
                    onClick={controlCheck}
                >
                    Checkboxları Kontrol Et
                </Button>

            </FormControl>
            <hr />
        </>
    );
}

export default MUIcheckbox;

//? MUI Checkbox (Onay Kutusu)

//* Checkbox: Kullanıcının bir seçeneği işaretlemesini veya işareti kaldırmasını(toggle) sağlar.
// → checked: Checkbox'ın işaretli olup olmadığını belirler.
// → onChange: İşaretleme durumu değiştiğinde çalışır.
// → disabled: Checkbox'ı devre dışı bırakır.
// → indeterminate: Checkbox'ın ara durumda görünmesini sağlar.

//* FormControl: Form elemanlarını bir arada düzenler.
// → component="fieldset": FormControl bileşenini HTML fieldset olarak oluşturur.
//* FormLabel: Form grubunun başlığını veya açıklamasını gösterir.
// → component="legend": Başlığı HTML legend olarak oluşturur.

//* FormGroup: Checkbox bileşenlerini bir grup içerisinde düzenler.
// → row: FormGroup içerisindeki seçenekleri yatay sıralar. Örnek: <FormGroup row>
//* FormControlLabel: Checkbox'a açıklama etiketi ekler.
// → control: Etiketle birlikte kullanılacak bileşeni belirler. Örnek: control={<Checkbox />}
// → label: Checkbox'ın yanında gösterilecek metni belirler.
// → labelPlacement: 'start' / 'end' / 'top' / 'bottom': Etiketin konumunu belirler.

//? useState ile Checkbox Yönetimi
//* useState([false, false, false, false]): Dört checkbox'ın başlangıçta işaretsiz olmasını sağlar.
//* checked={confirms[index]}: Checkbox'ın durumunu state'e bağlar.
//* setConfirms: Checkbox durumlarını günceller.
//* e.target.checked: Checkbox'ın yeni durumunu (true/false) verir.
//* [...prev]: Önceki dizinin kopyasını oluşturur; state güncellenirken doğrudan değiştirilmesini önler.

//? Seçili Değerleri Kontrol Etme
//* map(): Dizi elemanlarını dönüştürerek yeni bir dizi oluşturur.
//* filter(Boolean): null, false ve boş değerleri eler.
//* join(', '): Dizi elemanlarını virgülle birleştirir.
//* selected.length > 0: En az bir seçeneğin seçilip seçilmediğini kontrol eder.

//? Ek Kullanışlı Özellikler
// → color: 'primary' / 'secondary' / 'success' / 'error' / 'info' / 'warning': Checkbox rengini belirler.
// → size: 'small' / 'medium': Checkbox boyutunu belirler.
// → required: Form gönderiminde seçimin zorunlu olmasını sağlar.
// → name: Checkbox'a form alanı adı verir.
// → value: Checkbox'ın temsil ettiği değeri belirler.
// → defaultChecked: Başlangıçta işaretli olmasını sağlar; genellikle kontrol edilmeyen kullanımda tercih edilir.
