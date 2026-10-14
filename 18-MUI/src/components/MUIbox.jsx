import Box from '@mui/material/Box';

function MUIbox() {
  return (
    <div>
      <Box sx={{ width: "200px", height: "200px", background: "orange" }}></Box>
      <hr />
    </div>
  )
}

export default MUIbox

//? MUI Box (Kutu Bileşeni)
//* Box: İçerikleri gruplamak ve düzenlemek için kullanılan temel bir kapsayıcı bileşendir.
//* sx: CSS benzeri stilleri doğrudan bileşene uygulamayı sağlar.

//? Boyut ve Renk
//* width: Kutunun genişliğini belirler. Örnek: width: "200px"
//* height: Kutunun yüksekliğini belirler. Örnek: height: "200px"
//* background: Kutunun arka plan rengini belirler. Örnek: background: "orange"
//* color: İçindeki metnin rengini belirler.
//* border: Kenarlık ekler. Örnek: border: "1px solid black"
//* borderRadius: Köşeleri yuvarlatır. Örnek: borderRadius: 2
//* boxShadow: Kutuya gölge ekler.

//? Boşluk ve Yerleşim
//* m: Dış boşluğu (margin) belirler. Örnek: m: 2
//* p: İç boşluğu (padding) belirler. Örnek: p: 2
//* mt / mb / ml / mr: Üst, alt, sol ve sağ dış boşluğu belirler.
//* display: Görüntüleme düzenini belirler. Örnek: display: "flex"
//* justifyContent: Flex düzeninde yatay yerleşimi ayarlar.
//* alignItems: Flex düzeninde dikey hizalamayı ayarlar.
//* gap: Flex veya grid öğeleri arasındaki boşluğu belirler.

//? Ek Kullanışlı Özellikler
//* component: Box'ın hangi HTML elementini kullanacağını belirler. Örnek: <Box component="section">
//* flexDirection: Flex öğelerinin yatay mı dikey mi sıralanacağını belirler.
//* flexWrap: Öğelerin gerektiğinde alt satıra geçmesini sağlar.
//* sx içerisinde responsive değerler kullanılarak farklı ekran boyutlarına göre stiller ayarlanabilir.

//? Not
//* Box, varsayılan olarak div benzeri bir kapsayıcı oluşturur.
//* sx, MUI tema sistemiyle uyumlu stiller yazmayı sağlar. Sayısal m ve p değerleri genellikle tema boşluk ölçeğine göre hesaplanır.
//* Örnek: <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, borderRadius: 2 }}>İçerik</Box>