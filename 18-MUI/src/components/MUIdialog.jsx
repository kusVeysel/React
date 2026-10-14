import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIdialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Disagree
                    </Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>

            <hr />
        </>
    );
}

export default MUIdialog

//? MUI Dialog (Diyalog / Açılır Pencere)
//* Dialog: Kullanıcının dikkatini belirli bir mesaja veya işleme yönlendiren açılır pencere oluşturur.
//* Genellikle onay alma, silme işlemini doğrulama veya bilgi gösterme amacıyla kullanılır.

//? useState ile Açma / Kapama
//* useState(false): Dialog'un başlangıçta kapalı olmasını sağlar.
//* setOpen(true): Dialog'u açar.
//* setOpen(false): Dialog'u kapatır.
//* handleClickOpen: Açma işlemini gerçekleştiren fonksiyondur.
//* handleClose: Kapatma işlemini gerçekleştiren fonksiyondur.
//* open={open}: Dialog'un açık veya kapalı olmasını state üzerinden kontrol eder.

//? Dialog Temel Bileşenleri
//* Dialog: Açılır pencerenin ana bileşenidir.
//* DialogTitle: Pencerenin başlığını belirler.
//* DialogContent: Pencerenin ana içerik alanını oluşturur.
//* DialogContentText: İçerik bölümünde açıklama metni göstermek için kullanılır.
//* DialogActions: Pencerenin alt kısmında işlem butonlarını gruplar.

//? Dialog Özellikleri
//* onClose={handleClose}: Kullanıcı pencereyi kapatma işlemi yaptığında çalışır; örneğin Escape tuşuyla veya arka plana tıklayarak.
//* aria-labelledby: Dialog'un başlık bileşeninin id değerini belirtir.
//* aria-describedby: Dialog'un açıklama bileşeninin id değerini belirtir.
//* role="alertdialog": Acil dikkat veya yanıt gerektiren uyarı diyalogları için kullanılır; sıradan diyaloglarda genellikle gerekli değildir.
//* autoFocus: Dialog açıldığında ilgili bileşene otomatik odaklanılmasını sağlar.

//? Butonlarla İşlem Yapma
//* onClick={handleClickOpen}: Butona tıklandığında Dialog'u açar.
//* onClick={handleClose}: Butona tıklandığında Dialog'u kapatır.
//* variant="outlined": Butona kenarlıklı görünüm verir.
//* Önemli: Örnekteki Agree ve Disagree butonları aynı fonksiyonu çağırdığı için ikisi de yalnızca pencereyi kapatır; gerçek bir onay veya reddetme işlemi gerçekleştirmez.

//? Ek Kullanışlı Özellikler
//* fullWidth: Dialog'un kullanılabilir genişliği doldurmasını sağlar.
//* maxWidth="sm": Dialog'un maksimum genişliğini küçük ekran boyutuyla sınırlar.
//* fullScreen: Dialog'u ekranın tamamını kaplayacak şekilde gösterir.
//* scroll="paper": İçerik uzunsa kaydırmayı içerik alanında yapar.
//* disableEscapeKeyDown: Escape tuşuyla kapatılmasını engeller.

//? Not
//* Dialog, open prop'u ile kontrol edilen bir bileşendir; open={open} kullanılmadan state üzerinden açılıp kapatılamaz.
//* Dialog, Modal altyapısını kullanır ve varsayılan olarak arka planla etkileşimi sınırlar.
//* Silme veya onay pencerelerinde kullanıcı seçimine göre farklı fonksiyonlar tanımlanmalıdır.
//* Örnek: <Dialog open={open} onClose={handleClose}>...</Dialog>