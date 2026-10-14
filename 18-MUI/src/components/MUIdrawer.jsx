import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIdrawer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Draweri Aç
            </Button>

            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(false)}       
            >
                <Box sx={{ width: { xs: 280, sm: 360 }, maxWidth: '85vw', p: 3 }}>
                    <h1>Başlık</h1>
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
// → open: Panelin açık veya kapalı olduğunu belirler.
// → onClose: Panel kapatıldığında çalışır.

// → anchor="left": Paneli soldan açar (varsayılan).
// → anchor="right": Paneli sağdan açar.
// → anchor="top": Paneli yukarıdan açar.
// → anchor="bottom": Paneli aşağıdan açar.

//? Ek Kullanışlı Özellikler
// → variant="temporary": Geçici panel oluşturur; dışına tıklanınca kapanabilir (varsayılan).
// → variant="persistent": Ana içeriğin yanında açılıp kapanan panel oluşturur.
// → variant="permanent": Sürekli görünür olan panel oluşturur.
// → ModalProps: Geçici Drawer'ın modal davranışını özelleştirmek için kullanılır.
// → sx: Panelin renk, boyut ve diğer stillerini düzenler.
// → disableScrollLock: Desteklenen modal davranışlarında arka plan kaydırma kilidini kapatır.
