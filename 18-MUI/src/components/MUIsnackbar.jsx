import { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUIsnackbar() {

    const [openSnackbar, setOpenSnackbar] = useState(false);


    const handleClick = () => {
        setOpenSnackbar(true);
    }

    const handleClose = () => {
        setOpenSnackbar(false);
    }

    const action = (
        <>
            <Button size='small' color='info' onClick={handleClose} >Kapat</Button>
            <IconButton sx={{ color: "white" }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </>
    )

    return (
        <>
            <Button onClick={handleClick}>SnackbarÄ± AÃ§</Button>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Snackbar BaÅŸarÄ±yla AÃ§Ä±ldÄ±"
                action={action}
                anchorOrigin={{vertical:"top",horizontal:"right"}}
            />

            <hr />
        </>
    )
}

export default MUIsnackbar

//? MUI Snackbar (Geçici Bildirim)
//* Snackbar: Kullanıcıya kısa süreli bilgi veya işlem sonucu göstermek için kullanılır.
//* Alert'ten farkı: Genellikle ekranın bir köşesinde geçici olarak görünür ve kendiliğinden kapanabilir.
//* Örnek kullanım: Kayıt başarılı, mesaj gönderildi veya işlem tamamlandı bildirimleri.

//? useState ile Açma / Kapama
//* useState(false): Snackbar başlangıçta kapalıdır.
//* setOpenSnackbar(true): Snackbar'ı açar.
//* setOpenSnackbar(false): Snackbar'ı kapatır.
//* open={openSnackbar}: Snackbar'ın görünürlüğünü state üzerinden kontrol eder.
//* onClose={handleClose}: Kapatma işlemi gerçekleştiğinde çalışacak fonksiyonu belirler.

//? Snackbar Özellikleri
//* message: Bildirim içerisinde gösterilecek metni belirler.
//* autoHideDuration={3000}: Bildirimin 3000 milisaniye (3 saniye) sonra kapanmasını sağlar.
//* anchorOrigin: Bildirimin ekranda hangi konumda görüneceğini belirler.
//* vertical: "top" veya "bottom" ile dikey konumu belirler.
//* horizontal: "left", "center" veya "right" ile yatay konumu belirler.
//* anchorOrigin={{ vertical: "top", horizontal: "right" }}: Bildirimi sağ üst köşede gösterir.

//? Action (İşlem Alanı)
//* action: Bildirimin yanında gösterilecek buton veya başka bileşenleri belirler.
//* Button: Bildirime "Kapat" gibi bir işlem butonu ekler.
//* IconButton: İkonu tıklanabilir bir buton hâline getirir.
//* CloseIcon: Kapatma simgesi gösterir.
//* onClick={handleClose}: Butona tıklandığında Snackbar'ı kapatır.
//* size="small": Butonu küçük boyutta gösterir.
//* color="info": Temanın bilgi rengini kullanır.
//* sx={{ color: "white" }}: İkon butonunun rengini beyaz yapar.

//? Ek Kullanışlı Özellikler
//* key: Art arda gelen bildirimlerin ayrı ayrı gösterilmesine yardımcı olabilir.
//* resumeHideDuration: Fareyle üzerine gelme gibi durumların ardından kapanma süresini belirler.
//* ClickAwayListener: Dışarı tıklama davranışlarını ayrıca yönetmek gerektiğinde kullanılabilir.
//* SnackbarContent: Bildirim içeriğinin görünümünü özelleştirmek için kullanılabilir.

//? Not
//* Snackbar, bildirim göstermek için kullanılır; işlemin başarılı olup olmadığını kendisi belirlemez.
//* autoHideDuration dolduğunda kapanma isteği oluşur; kontrollü kullanımda open state'ini onClose içinde güncellemek gerekir.
//* Snackbar'a özel bir kapatma butonu eklemek için action prop'u kullanılır.
//* Örnek: <Snackbar open={openSnackbar} message="İşlem başarılı" autoHideDuration={3000} onClose={handleClose} />