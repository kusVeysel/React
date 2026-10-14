import { Divider, Stack } from '@mui/material'

function MUIstack() {
    return (
        <div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={10}
                divider={<Divider orientation='vertical' flexItem />}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>
            <hr />
        </div>
    )
}

export default MUIstack

//? MUI Stack (Öğeleri Düzenleme)

//* Stack: Bileşenleri yatay veya dikey olarak sıralayan bir kapsayıcıdır.
// → direction: Öğelerin sıralanma yönünü belirler.
// → direction="row": Yatay sıralama yapar.
// → direction="column": Dikey sıralama yapar.
// → spacing: Öğeler arasındaki boşluğu belirler. Örnek: spacing={2}
// → divider: Öğelerin arasına ayraç ekler. Örnek: divider={<Divider />}


//? Responsive (Duyarlı Tasarım)
// → direction={{ xs: 'column', sm: 'row' }}: Küçük ekranlarda dikey, sm ve üzerindeki ekranlarda yatay sıralama yapar.
// → xs: En küçük ekran boyutlarından itibaren uygulanır.
// → sm / md / lg / xl: Farklı ekran boyutları için stil belirlemeyi sağlar.


//? MUI Divider (Ayraç)
//* Divider: Öğeler arasında görsel ayraç oluşturur.
// → orientation="horizontal": Yatay ayraç oluşturur (varsayılan).
// → orientation="vertical": Dikey ayraç oluşturur.
// → flexItem: Divider'ın Stack içindeki öğelerin boyutuna uyum sağlamasına yardımcı olur.


//? Ek Kullanışlı Özellikler
// → useFlexGap: spacing yerine CSS gap kullanımını etkinleştirir.
// → alignItems: Öğeleri çapraz eksende hizalar. Örnek: alignItems="center"
// → justifyContent: Öğeleri ana eksende hizalar. Örnek: justifyContent="space-between"
// → flexWrap: Öğelerin gerektiğinde alt satıra geçmesini sağlar.
// → sx: Özel stiller uygular. Örnek: sx={{ p: 2, bgcolor: "lightgray" }}
