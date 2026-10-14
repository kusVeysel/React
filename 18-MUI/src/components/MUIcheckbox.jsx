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
        const labels = ['ilkokul', 'ortaokul', 'lise', 'Ã¼niversite'];

        const selected = confirms
            .map((confirm, index) => confirm ? labels[index] : null)
            .filter(Boolean);

        if (selected.length > 0) {
            alert(`SeÃ§ili checkbox(lar): ${selected.join(', ')}`);
        } else {
            alert('HiÃ§bir checkbox seÃ§ilmedi.');
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
                    EÄŸitim Durumu
                </FormLabel>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[0]}
                                onChange={(e) => handleCheck(0, e.target.checked)}
                            />
                        }
                        label="ilkokul"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[1]}
                                onChange={(e) => handleCheck(1, e.target.checked)}
                            />
                        }
                        label="ortaokul"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[2]}
                                onChange={(e) => handleCheck(2, e.target.checked)}
                            />
                        }
                        label="lise"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[3]}
                                onChange={(e) => handleCheck(3, e.target.checked)}
                            />
                        }
                        label="Ã¼niversite"
                        labelPlacement="end"
                    />
                </FormGroup>

                <Button
                    variant="outlined"
                    size="medium"
                    color="info"
                    onClick={controlCheck}
                >
                    CheckboxlarÄ± Kontrol Et
                </Button>

            </FormControl>
            <hr />
        </>
    );
}

export default MUIcheckbox;

//? MUI Checkbox (Onay Kutusu)
//* Checkbox: Kullanıcının bir seçeneği işaretlemesini veya işareti kaldırmasını sağlar.
//* checked: Checkbox'ın işaretli olup olmadığını belirler.
//* onChange: İşaretleme durumu değiştiğinde çalışır.
//* disabled: Checkbox'ı devre dışı bırakır.
//* indeterminate: Checkbox'ın ara durumda görünmesini sağlar.

//? FormControlLabel ve FormGroup
//* FormControlLabel: Checkbox'a açıklama etiketi ekler.
//* control: Etiketle birlikte kullanılacak bileşeni belirler. Örnek: control={<Checkbox />}
//* label: Checkbox'ın yanında gösterilecek metni belirler.
//* labelPlacement -> 'start' / 'end' / 'top' / 'bottom': Etiketin konumunu belirler.
//* FormGroup: Checkbox bileşenlerini bir grup içerisinde düzenler.
//* row: FormGroup içerisindeki seçenekleri yatay sıralar. Örnek: <FormGroup row>

//? FormControl ve FormLabel
//* FormControl: Form elemanlarını bir arada düzenler.
//* component="fieldset": FormControl bileşenini HTML fieldset olarak oluşturur.
//* FormLabel: Form grubunun başlığını veya açıklamasını gösterir.
//* component="legend": Başlığı HTML legend olarak oluşturur.

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
//* alert(): Seçilen seçenekleri veya hiçbir seçim yapılmadığını mesaj olarak gösterir.

//? Ek Kullanışlı Özellikler
//* color -> 'primary' / 'secondary' / 'success' / 'error' / 'info' / 'warning': Checkbox rengini belirler.
//* size -> 'small' / 'medium': Checkbox boyutunu belirler.
//* required: Form gönderiminde seçimin zorunlu olmasını sağlar.
//* name: Checkbox'a form alanı adı verir.
//* value: Checkbox'ın temsil ettiği değeri belirler.
//* defaultChecked: Başlangıçta işaretli olmasını sağlar; genellikle kontrol edilmeyen kullanımda tercih edilir.

//? Not
//* Kontrollü Checkbox kullanımında checked ve onChange birlikte kullanılır.
//* Birden fazla checkbox'ın durumu useState ile bir dizi içerisinde tutulabilir.
//* handleCheck(index, checked): İlgili checkbox'ın durumunu dizide günceller.
//* Örnek: <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />