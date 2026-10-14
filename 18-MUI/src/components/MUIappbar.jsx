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
                            Hakkımızda
                        </Button>

                        <Button
                            sx={{ color: "white" }}
                            onClick={openMenu}
                        >
                            Ürünler
                        </Button>

                        <Button sx={{ color: "white" }}>
                            İletişim
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
// → position="static": Normal sayfa akışında kalır.
// → position="fixed": Ekranın üstüne sabitlenir.
// → position="sticky": Kaydırma sırasında belirli noktada üstte kalır.
// → position="absolute": En yakın konumlandırılmış üst elemana göre konumlanır.

//* Toolbar: AppBar içerisindeki ikon, başlık ve butonları hizalar.
//* Typography: Başlık ve metinleri biçimlendirir.(Menü adı)

//* IconButton: İkon içeren tıklanabilir buton oluşturur.
//* MenuIcon: Menü simgesidir; @mui/icons-material paketinden import edilir.

//* Menu: Tıklamayla açılan menü oluşturur.
//* MenuItem: Menü içerisindeki seçenekleri oluşturur.
// → anchorEl: Menünün hangi HTML elementine göre açılacağını belirler.
// → open={Boolean(anchorEl)}: anchorEl varsa menüyü açar, yoksa kapatır.
// → onClose: Menü kapatıldığında çalışır.
// → onClick={closeMenu}: Menü seçeneğine tıklanınca menüyü kapatır.

// → e.currentTarget: Olayın tanımlandığı HTML elementini verir.

//? Ek Kullanışlı Özellikler
// → color: AppBar'ın tema rengini belirler. Örnek: color="primary"
// → elevation: AppBar'ın gölge seviyesini belirler.
// → disableGutters: Toolbar'ın varsayılan yatay boşluklarını kaldırır.
// → sx: Özel stiller uygular. Örnek: sx={{ bgcolor: "black", px: 2 }}
// → href: Button bileşenini bağlantı olarak kullanır. Örnek: <Button href="/">Ana Sayfa</Button>
// → component: Bileşenin hangi HTML elementiyle oluşturulacağını belirler.
