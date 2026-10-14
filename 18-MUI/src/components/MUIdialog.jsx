import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIdialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Uyarı dialogu aç
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {"React JavaScript İle Çalışmayı Sevdin Mi?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Fronted frameworku olan React ile ilgili bir çok bilgi bulunmaktadır, bunlardan memnun musun
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                       Hayır
                    </Button>
                    <Button onClick={handleClose}>Evet</Button>
                </DialogActions>
            </Dialog>

            <hr />
        </>
    );
}

export default MUIdialog


//? MUI Dialog (Diyalog / Açılır Pencere)

//* Dialog: Kullanıcının dikkatini belirli bir mesaja veya işleme yönlendiren açılır pencere oluşturur.
// → Genellikle onay alma, silme işlemini doğrulama veya bilgi gösterme amacıyla kullanılır.

//* Dialog: Açılır pencerenin ana bileşenidir.
//* DialogTitle: Pencerenin başlığını belirler.
//* DialogContent: Pencerenin ana içerik alanını oluşturur.
//* DialogContentText: İçerik bölümünde açıklama metni göstermek için kullanılır.
//* DialogActions: Pencerenin alt kısmında işlem butonlarını gruplar.

// → onClose={handleClose}: Kullanıcı pencereyi kapatma işlemi yaptığında çalışır; örneğin Escape tuşuyla veya arka plana tıklayarak.
// → aria-labelledby: Dialog'un başlık bileşeninin id değerini belirtir.
// → aria-describedby: Dialog'un açıklama bileşeninin id değerini belirtir.
// → role="alertdialog": Acil dikkat veya yanıt gerektiren uyarı diyalogları için kullanılır; sıradan diyaloglarda genellikle gerekli değildir.
// → autoFocus: Dialog açıldığında ilgili bileşene otomatik odaklanılmasını sağlar.

// → onClick={handleClickOpen}: Butona tıklandığında Dialog'u açar.
// → onClick={handleClose}: Butona tıklandığında Dialog'u kapatır.
// → variant="outlined": Butona kenarlıklı görünüm verir.
//* Önemli: Örnekteki Agree ve Disagree butonları aynı fonksiyonu çağırdığı için ikisi de yalnızca pencereyi kapatır; gerçek bir onay veya reddetme işlemi gerçekleştirmez.

//? Ek Kullanışlı Özellikler
// → fullWidth: Dialog'un kullanılabilir genişliği doldurmasını sağlar.
// → maxWidth="sm": Dialog'un maksimum genişliğini küçük ekran boyutuyla sınırlar.
// → scroll="paper": İçerik uzunsa kaydırmayı içerik alanında yapar.
// → fullScreen: Dialog'u ekranın tamamını kaplayacak şekilde gösterir.
// → disableEscapeKeyDown: Escape tuşuyla kapatılmasını engeller.
