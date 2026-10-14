import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { AlertTitle } from '@mui/material';

function MUIalert() {
    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success" >This is a success Alert.</Alert>
                <Alert severity="info" >This is an info Alert.</Alert>
                <Alert severity="warning">This is a warning Alert.</Alert>
                <Alert severity="error">This is an error Alert.</Alert>

                <Alert severity='success'>
                    <AlertTitle>Başarılı</AlertTitle>
                    Ekleme İşlemi Başarılı
                </Alert>
            </Stack>


            <hr />
        </div>
    )
}

export default MUIalert

//? MUI Alert (Uyarı Mesajı)

//* Alert: Kullanıcıya işlem sonucu, bilgi veya hata mesajı göstermek için kullanılır.
//* severity: Uyarının türünü, rengini ve varsayılan ikonunu belirler.


//? Severity (Uyarı Türleri)
//* severity = "success": Başarılı işlemleri belirtir (genellikle yeşil).
//* severity = "info": Bilgilendirme mesajları için kullanılır (genellikle mavi).
//* severity = "warning": Dikkat edilmesi gereken durumları belirtir (genellikle turuncu).
//* severity = "error": Hata durumlarını belirtir (genellikle kırmızı).


//? AlertTitle (Uyarı Başlığı)
//* AlertTitle: Alert içerisinde başlık göstermek için kullanılır.
//* Başlık ile açıklama metnini birbirinden ayırarak mesajın daha anlaşılır olmasını sağlar.


//? Stack ile Düzenleme
//* Stack: Alert bileşenlerini düzenlemek ve aralarındaki boşluğu ayarlamak için kullanılır.
//* sx={{ width: '100%' }}: Stack bileşeninin genişliğini %100 yapar.
//* spacing={2}: Alert bileşenleri arasındaki boşluğu belirler.


//? Ek Kullanışlı Özellikler
//* variant="standard": Sade uyarı görünümünü kullanır (varsayılan).
//* variant="filled": Uyarının arka planını belirgin renkle doldurur.
//* variant="outlined": Kenarlıklı uyarı görünümü oluşturur.
//* icon: Varsayılan ikonu değiştirmek veya kaldırmak için kullanılır.
//* onClose: Kapatma işlemi için çalışacak fonksiyonu belirler; kapatma düğmesinin görünmesi için genellikle bu prop kullanılır.
//* action: Uyarının sağına bir buton veya başka bir işlem bileşeni eklemeyi sağlar.
