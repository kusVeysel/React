
import { useState } from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Menu, MenuItem, Stack } from '@mui/material';

function MUIappbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6">
                        MUIappbar
                    </Typography>

                    <Stack
                        direction="row"
                        sx={{ marginLeft: 'auto' }}
                    >
                        <Button sx={{ color: "white" }}>
                            AnaSayfa
                        </Button>

                        <Button sx={{ color: "white" }}>
                            HakkÄ±mÄ±zda
                        </Button>

                        <Button
                            sx={{ color: "white" }}
                            onClick={openMenu}
                        >
                            ÃœrÃ¼nler
                        </Button>

                        <Button sx={{ color: "white" }}>
                            Ä°letiÅŸim
                        </Button>
                    </Stack>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                    >
                        <MenuItem onClick={closeMenu}>
                            Lastik
                        </MenuItem>

                        <MenuItem onClick={closeMenu}>
                            Bijon
                        </MenuItem>

                        <MenuItem onClick={closeMenu}>
                            Body Kit
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <hr />
        </div>
    );
}

export default MUIappbar;

//? MUI AppBar (Üst Menü Çubuğu)
//* AppBar: Sayfanın üst kısmında gezinme veya başlık çubuğu oluşturur.
//* position="static": Normal sayfa akışında kalır.
//* position="fixed": Ekranın üstüne sabitlenir.
//* position="sticky": Kaydırma sırasında belirli noktada üstte kalır.
//* position="absolute": En yakın konumlandırılmış üst elemana göre konumlanır.

//? Toolbar ve Typography
//* Toolbar: AppBar içerisindeki ikon, başlık ve butonları hizalar.
//* Typography: Başlık ve metinleri biçimlendirir.
//* variant="h6": Başlık boyutunda metin oluşturur.

//? IconButton ve MenuIcon
//* IconButton: İkon içeren tıklanabilir buton oluşturur.
//* MenuIcon: Menü simgesidir; @mui/icons-material paketinden import edilir.
//* color="inherit": Üst elementin metin rengini devralır.
//* Not: IconButton'ın menüyü açması için onClick gibi bir olay tanımlanmalıdır.

//? Stack ile Menü Düzeni
//* Stack: Menü öğelerini yatay veya dikey sıralar.
//* direction="row": Öğeleri yatay sıralar.
//* sx={{ marginLeft: 'auto' }}: Sol boşluğu otomatik ayarlayarak menüyü sağa iter.
//* Button: Menüde tıklanabilir bağlantı veya işlem butonu oluşturur.
//* sx={{ color: "white" }}: Buton metnini beyaz yapar.

//? Menu ve MenuItem (Açılır Menü)
//* Menu: Tıklamayla açılan menü oluşturur.
//* MenuItem: Menü içerisindeki seçenekleri oluşturur.
//* anchorEl: Menünün hangi HTML elementine göre açılacağını belirler.
//* open={Boolean(anchorEl)}: anchorEl varsa menüyü açar, yoksa kapatır.
//* onClose: Menü kapatıldığında çalışır.
//* closeMenu: setAnchorEl(null) ile menüyü kapatır.
//* onClick={closeMenu}: Menü seçeneğine tıklanınca menüyü kapatır.

//? useState ve Menü Kontrolü
//* useState(null): Başlangıçta menüye bağlanmış bir element olmadığını belirtir.
//* setAnchorEl: Menüye bağlanacak HTML elementini veya null değerini ayarlar.
//* openMenu(e): e.currentTarget ile tıklanan butonu alır ve menünün konumunu belirler.
//* e.currentTarget: Olayın tanımlandığı HTML elementini verir.

//? Ek Kullanışlı Özellikler
//* color: AppBar'ın tema rengini belirler. Örnek: color="primary"
//* elevation: AppBar'ın gölge seviyesini belirler.
//* disableGutters: Toolbar'ın varsayılan yatay boşluklarını kaldırır.
//* sx: Özel stiller uygular. Örnek: sx={{ bgcolor: "black", px: 2 }}
//* href: Button bileşenini bağlantı olarak kullanır. Örnek: <Button href="/">Ana Sayfa</Button>
//* component: Bileşenin hangi HTML elementiyle oluşturulacağını belirler.

//? Not
//* AppBar üst çubuğu, Toolbar iç düzeni, Stack hizalamayı, Menu ve MenuItem açılır menüyü sağlar.
//* anchorEl menünün konumunu; open ve onClose ise açılma/kapanma durumunu kontrol eder.
//* Responsive tasarım için Stack yönü ekran boyutlarına göre ayarlanabilir.
//* Örnek: <AppBar position="static"><Toolbar><Typography variant="h6">Site Başlığı</Typography></Toolbar></AppBar>