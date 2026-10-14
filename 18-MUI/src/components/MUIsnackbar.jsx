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
            <Button onClick={handleClick}>Snackbarı Aç</Button>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Snackbar Başarıyla Açıldı"
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

// → message: Bildirim içerisinde gösterilecek metni belirler.
// → autoHideDuration={3000}: Bildirimin 3000 milisaniye (3 saniye) sonra kapanmasını sağlar.
// → anchorOrigin: Bildirimin ekranda hangi konumda görüneceğini belirler.
// → vertical: "top" veya "bottom" ile dikey konumu belirler.
// → horizontal: "left", "center" veya "right" ile yatay konumu belirler.
// → anchorOrigin={{ vertical: "top", horizontal: "right" }}: Bildirimi sağ üst köşede gösterir.

//? Ek Kullanışlı Özellikler
// → key: Art arda gelen bildirimlerin ayrı ayrı gösterilmesine yardımcı olabilir.
// → resumeHideDuration: Fareyle üzerine gelme gibi durumların ardından kapanma süresini belirler.
//* ClickAwayListener: Dışarı tıklama davranışlarını ayrıca yönetmek gerektiğinde kullanılabilir.
//* SnackbarContent: Bildirim içeriğinin görünümünü özelleştirmek için kullanılabilir.
