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
                    <Typography gutterBottom variant="h5" component="div" color="text.primary">
                        BMW M4
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }}>
                        BMW M4, BMW M GmbH tarafÄ±ndan Ã¼retilen, 3.0 litrelik sÄ±ralÄ± 6 silindirli Ã§ift turbo motoruyla yÃ¼ksek performans sunan, model yÄ±lÄ±na ve Competition gibi donanÄ±m seÃ§eneklerine gÃ¶re yaklaÅŸÄ±k 431 ile 550 beygir gÃ¼Ã§ Ã¼retebilen, arkadan itiÅŸ veya M xDrive dÃ¶rt tekerlekten Ã§ekiÅŸ sistemine sahip premium bir spor coupe otomobildir.
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
//* sx: Kartın genişlik, yükseklik, renk ve diğer stillerini belirler.
//* maxWidth: Kartın alabileceği maksimum genişliği belirler.

//? CardMedia (Görsel Alanı)
//* CardMedia: Kart içerisinde görsel veya medya gösterir.
//* image: Gösterilecek görselin yolunu veya URL'sini belirtir.
//* component="img": Bileşenin HTML img elementi olarak oluşturulmasını sağlar.
//* alt: Görsel yüklenemediğinde veya ekran okuyucularında kullanılacak açıklamadır.
//* title: Görsel hakkında ek bilgi sağlar.
//* sx={{ height: 350 }}: Görsel alanının yüksekliğini belirler.
//* import bmwM4 from '../assets/bmwM4.jpg': Yerel görseli projeye aktarır.

//? CardContent (İçerik Alanı)
//* CardContent: Kartın başlık ve açıklama gibi metin içeriklerini barındırır.
//* Typography: Metinleri başlık veya paragraf biçiminde düzenler.
//* gutterBottom: Metnin altına boşluk ekler.
//* variant="h5": Metni başlık boyutunda gösterir.
//* variant="body2": Metni küçük gövdeli yazı biçiminde gösterir.
//* component="div": Typography'nin hangi HTML elementiyle oluşturulacağını belirler.
//* color="text.primary": MUI temasının ana metin rengini kullanır.

//? CardActions (Eylem Alanı)
//* CardActions: Kart içerisindeki buton gibi etkileşimli öğeleri gruplar.
//* Button: Kullanıcının tıklayabileceği buton oluşturur.
//* size="small": Butonun küçük boyutta olmasını sağlar.
//* variant="outlined": Kenarlıklı buton oluşturur.
//* variant="contained": Dolgulu buton oluşturur.
//* color: Butonun tema rengini belirler.

//? Ek Kullanışlı Özellikler
//* elevation: Kartın gölge seviyesini belirler. Örnek: <Card elevation={4}>
//* raised: Kartın daha belirgin gölgeyle gösterilmesini sağlar.
//* sx={{ borderRadius: 3 }}: Kartın köşelerini yuvarlatır.
//* sx={{ boxShadow: 3 }}: Kartın gölge seviyesini ayarlar.
//* onClick: Kart veya butona tıklanınca çalışacak fonksiyonu tanımlar.
//* CardHeader: Kartın üst kısmına başlık, alt başlık veya avatar ekler.
//* CardActions disableSpacing: CardActions alanındaki varsayılan boşluk düzenini kaldırır.

//? Not
//* Card, CardMedia, CardContent ve CardActions birlikte kullanılarak ürün veya tanıtım kartları oluşturulabilir.
//* Typography metinlerin boyutunu ve görünümünü düzenler.
//* sx, MUI bileşenlerine özel stil vermeyi sağlar.
//* Örnek: <Card sx={{ maxWidth: 370, borderRadius: 3 }}><CardContent><Typography variant="h5">Ürün Başlığı</Typography></CardContent></Card>