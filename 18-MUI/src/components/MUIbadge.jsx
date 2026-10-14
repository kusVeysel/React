
import Badge from '@mui/material/Badge'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'

function MUIbadge() {
  return (
    <div>
      <Badge
        badgeContent={15}
        color="primary"
        max={9}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <AttachEmailIcon />
      </Badge>

      <hr />
    </div>
  )
}

export default MUIbadge

//? MUI Badge (Rozet / Bildirim Sayacı)
//* Badge: Bir ikonun veya başka bir bileşenin üzerinde bildirim sayısı ya da durum göstergesi gösterir.
//* badgeContent: Rozet içerisinde gösterilecek sayıyı veya metni belirler.
//* color: Rozetin rengini belirler.
//* color="primary": Temanın ana rengini kullanır.
//* color="secondary": Temanın ikincil rengini kullanır.
//* color="error": Hata rengini kullanır.

//? Sayı Sınırı
//* max={9}: Gösterilecek en büyük sayıyı belirler.
//* badgeContent={15} ve max={9}: Rozette "9+" gösterilir.
//* max={99}: 99'dan büyük sayılarda "99+" gösterilir.
//* showZero: badgeContent={0} olduğunda da rozeti gösterir (varsayılan olarak 0 gizlenir).

//? Rozetin Konumu
//* anchorOrigin: Rozetin, içindeki bileşene göre hangi konumda görüneceğini belirler.
//* vertical: "top" veya "bottom" ile dikey konumu belirler.
//* horizontal: "left" veya "right" ile yatay konumu belirler.
//* vertical: "bottom", horizontal: "right": Rozeti sağ alt köşeye yerleştirir.

//? Ek Kullanışlı Özellikler
//* variant="standard": Normal rozet görünümünü kullanır (varsayılan).
//* variant="dot": Sayı yerine küçük bir nokta gösterir.
//* invisible: Rozeti gizler.
//* overlap: İkon veya bileşenle rozetin nasıl örtüşeceğini belirler.
//* Badge genellikle mesaj, e-posta, bildirim ve sepet sayısını göstermek için kullanılır.

//? Örnek
//* <Badge badgeContent={5} color="error"><AttachEmailIcon /></Badge>
//* Bu örnekte e-posta ikonunun üzerinde kırmızı renkte 5 sayısı görünür.
