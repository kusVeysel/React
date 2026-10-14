import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bmwM4 from '../assets/bmwM4.jpg'

function MUIcard() {
    return (
        <div>
            <Card sx={{ maxWidth: 370 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={bmwM4}
                    title="Bmw M4"
                    component="img"
                    alt='Bmw M4'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="textDisabled">
                        BMW M4
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }}>
                        BMW M4, Alman otomobil üreticisi BMW'nin yüksek performans bölümü M GmbH tarafından geliştirilen, 3.0 litrelik çift turboşarjlı sıralı 6 silindirli motoruyla yüksek güç ve agresif sürüş dinamikleri sunan premium bir spor otomobildir. Standart 4 Serisi temeline dayanan ve hafifletilmiş gövde yapısı, performans odaklı yürüyen aksamı ile belirginleşen M4; Coupe ve Convertible (üstü açık) karoser seçeneklerinin yanı sıra arkadan itişli veya xDrive dört tekerlekten çekiş sistemleriyle pist odaklı performansı günlük kullanımla buluşturur.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" variant='outlined' color='success'>SatÄ±n Al</Button>
                    <Button size="small" variant='contained' color='info'>Ä°letiÅŸime GeÃ§</Button>
                </CardActions>
            </Card>

            <hr />
        </div>
    )
}

export default MUIcard


//? MUI Card (Kart Bileşeni)

//* Card: Görsel, başlık, açıklama ve butonları tek bir kart içerisinde gruplar.
// → sx: Kartın genişlik, yükseklik, renk ve diğer stillerini belirler.
// → maxWidth: Kartın alabileceği maksimum genişliği belirler.

//* CardMedia: Kart içerisinde görsel veya medya gösterir.
// → image: Gösterilecek görselin yolunu veya URL'sini belirtir.
// → component="img": Bileşenin HTML img elementi olarak oluşturulmasını sağlar.
// → alt: Görsel yüklenemediğinde veya ekran okuyucularında kullanılacak açıklamadır.
// → title: Görsel hakkında ek bilgi sağlar.
// → sx={{ height: 350 }}: Görsel alanının yüksekliğini belirler.
// → import bmwM4 from '../assets/bmwM4.jpg': Yerel görseli projeye aktarır.

//* CardContent: Kartın başlık ve açıklama gibi metin içeriklerini barındırır.
//* Typography: Metinleri başlık veya paragraf biçiminde düzenler.
// → gutterBottom: Metnin altına boşluk ekler.
// → component="div": Typography'nin hangi HTML elementiyle oluşturulacağını belirler.

//* CardActions: Kart içerisindeki buton gibi etkileşimli öğeleri gruplar.
//* Button: Kullanıcının tıklayabileceği buton oluşturur.
// → size="small": Butonun küçük boyutta olmasını sağlar.
// → variant="outlined": Kenarlıklı buton oluşturur.
// → variant="contained": Dolgulu buton oluşturur.
// → color: Butonun tema rengini belirler.

//? Ek Kullanışlı Özellikler
// → elevation: Kartın gölge seviyesini belirler. Örnek: <Card elevation={4}>
// → raised: Kartın daha belirgin gölgeyle gösterilmesini sağlar.
// → onClick: Kart veya butona tıklanınca çalışacak fonksiyonu tanımlar.
//* CardHeader: Kartın üst kısmına başlık, alt başlık veya avatar ekler.
//* CardActions disableSpacing: CardActions alanındaki varsayılan boşluk düzenini kaldırır.
