import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIdrawer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                AÃ§
            </Button>

            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(false)}
                
            >
                <Box sx={{ width: { xs: 280, sm: 360 }, maxWidth: '85vw', p: 3 }}>
                    <h1>BaÅŸlÄ±k</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Tempora, voluptatibus.
                        Accusantium asperiores earum, sequi vel
                        itaque error qui nostrum unde?
                    </p>
                </Box>
            </Drawer>

            <hr />
        </div>
    );
}

export default MUIdrawer;

//? MUI Drawer (Yan Panel)
//* Drawer: Sayfanın kenarından açılan bir panel oluşturur.
//* open: Panelin açık veya kapalı olduğunu belirler.
//* onClose: Panel kapatıldığında çalışır.
//* open={isOpen}: Panelin açık kalma durumunu state'e bağlar.

//? useState ile Açma/Kapama
//* useState(false): Panelin başlangıçta kapalı olmasını sağlar.
//* setIsOpen(true): Paneli açar.
//* setIsOpen(false): Paneli kapatır.
//* onClick: Butona tıklandığında belirtilen fonksiyonu çalıştırır.
//* onClick={() => setIsOpen(true)}: Butona basıldığında Drawer'ı açar.
//* onClose={() => setIsOpen(false)}: Panel dışına tıklanınca veya kapatma işlemi gerçekleşince Drawer'ı kapatır.

//? Drawer Anchor (Açılma Yönü)
//* anchor="left": Paneli soldan açar (varsayılan).
//* anchor="right": Paneli sağdan açar.
//* anchor="top": Paneli yukarıdan açar.
//* anchor="bottom": Paneli aşağıdan açar.

//? Box ile İçerik Düzeni
//* Box: Drawer içerisindeki içerikleri gruplar ve düzenler.
//* width: Panelin genişliğini belirler.
//* maxWidth: Panelin alabileceği maksimum genişliği sınırlar.
//* p: İç boşluğu (padding) belirler.
//* sx={{ width: { xs: 280, sm: 360 } }}: XS ekranlarda 280px, SM ve üzerindeki ekranlarda 360px genişlik kullanır.
//* maxWidth: '85vw': Panelin ekran genişliğinin %85'ini aşmasını engeller.

//? Ek Kullanışlı Özellikler
//* variant="temporary": Geçici panel oluşturur; dışına tıklanınca kapanabilir (varsayılan).
//* variant="persistent": Ana içeriğin yanında açılıp kapanan panel oluşturur.
//* variant="permanent": Sürekli görünür olan panel oluşturur.
//* ModalProps: Geçici Drawer'ın modal davranışını özelleştirmek için kullanılır.
//* sx: Panelin renk, boyut ve diğer stillerini düzenler.
//* disableScrollLock: Desteklenen modal davranışlarında arka plan kaydırma kilidini kapatır.

//? Not
//* Drawer genellikle mobil menüler, yan navigasyon panelleri ve filtre alanları için kullanılır.
//* open ve onClose birlikte kullanılarak kontrollü açılma-kapanma sağlanır.
//* Geçici Drawer varsayılan olarak soldan açılır ve dışına tıklanınca kapanabilir.
//* Örnek: <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>İçerik</Drawer>
