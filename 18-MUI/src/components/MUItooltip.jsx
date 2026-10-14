import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MUItooltip() {
    return (
        <div>
            <Tooltip title="Silmek için tıklayınız" placement='top-end'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <hr />
        </div>
    )
}

export default MUItooltip

//? MUI Tooltip (Bilgi Balonu)

//* Tooltip: Bir bileşenin üzerine gelindiğinde kısa bir açıklama gösterir.
// → title: Tooltip içerisinde gösterilecek metni belirler.
// → placement: Bilgi balonunun hangi konumda açılacağını belirler.


//? Placement (Konumlandırma)
// → placement="top": Üst tarafta gösterir.
// → placement="bottom": Alt tarafta gösterir.
// → placement="left": Sol tarafta gösterir.
// → placement="right": Sağ tarafta gösterir.
// → placement="top-start": Üst tarafta, başlangıç hizasında gösterir.
// → placement="top-end": Üst tarafta, bitiş hizasında gösterir.
// → start ve end, konumu bileşenin hizasına göre belirler.


//? IconButton (İkon Butonu)
// → IconButton: İkonları tıklanabilir bir buton hâline getirir.
// → İçerisine DeleteIcon gibi ikon bileşenleri yerleştirilebilir.
// → color: Butonun rengini belirler. Örnek: color="error"
// → size: Buton boyutunu belirler. Örnek: size="small" veya size="large"
// → onClick: Butona tıklandığında çalışacak fonksiyonu belirler.


//? Tooltip Kullanımı
// → Tooltip içerisine doğrudan bir metin veya ikon yerine, üzerine gelindiğinde açıklama gösterilecek bileşen yerleştirilir.
// → Tooltip'in çocuğu genellikle ref ile çalışabilen bir DOM elemanı veya MUI bileşeni olmalıdır.
// → disabled bir butonda Tooltip göstermek için butonu bir span ile sarmalamak gerekebilir.
// → Örnek: <Tooltip title="Sil"><IconButton><DeleteIcon /></IconButton></Tooltip>


//? Ek Kullanışlı Özellikler
// → arrow: Tooltip'e ok işareti ekler.
// → followCursor: Fare imlecini takip etmesini sağlar.
// → enterDelay: Açılmadan önce beklenecek süreyi milisaniye cinsinden belirler.
// → leaveDelay: Fare ayrıldıktan sonra kapanma gecikmesini belirler.
// → disableHoverListener: Fareyle üzerine gelindiğinde açılmasını engeller.
