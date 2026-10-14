import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIavatar() {
  return (
    <div>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            <Avatar src='https://randomuser.me/api/portraits/men/60.jpg' sx={{width:"100px", height:"100px"}} />
            <Avatar sx={{bgcolor:"blue",width:"50px",height:"50px"}}>V</Avatar>
            <Avatar sx={{bgcolor:"red",width:"50px",height:"50px"}}>İ</Avatar>
        </Stack>

        <hr />
    </div>
  )
}

export default MUIavatar

//? MUI Avatar (Profil Fotoğrafı / Kullanıcı Simgesi)

//* Avatar: Kullanıcı fotoğrafı, baş harfi veya simgesi göstermek için kullanılır.
// → src: Avatar içerisinde gösterilecek görselin URL adresini belirler.


//? Stack ile Avatarları Düzenleme
//* Stack: Bileşenleri yatay veya dikey olarak sıralar.
//* direction="row": Bileşenleri yatay sıralar.
//* direction="column": Bileşenleri dikey sıralar.
//* spacing={2}: Bileşenler arasındaki boşluğu belirler (tema aralık birimi kullanılır).
//* alignItems="center": Bileşenleri dikey eksende ortalar (row düzeninde).
//* flexWrap="wrap": Sığmayan bileşenlerin alt satıra geçmesini sağlar.


//? Ek Kullanışlı Özellikler
//* variant="circular": Yuvarlak avatar oluşturur (varsayılan).
//* variant="rounded": Köşeleri yuvarlatılmış avatar oluşturur.
//* variant="square": Kare avatar oluşturur.
//* alt: Görsel yüklenemediğinde alternatif metin sağlar; erişilebilirlik için de kullanılır.
//* AvatarGroup: Birden fazla avatarı gruplayarak göstermek için kullanılır.
//* Avatar genellikle profil alanlarında, yorumlarda, kullanıcı listelerinde ve sohbet ekranlarında kullanılır.
