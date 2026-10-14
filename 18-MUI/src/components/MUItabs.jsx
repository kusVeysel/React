import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            tabIndex={0}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function MUItabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}

export default MUItabs;

//? MUI Tabs (Sekmeli Menü)
//* Tabs: İçeriği farklı sekmelere ayırarak kullanıcının sekmeler arasında geçiş yapmasını sağlar.
//* Genellikle profil sayfaları, ayarlar, ürün detayları ve kategori içeriklerinde kullanılır.

//* Tabs: Sekmeleri bir arada tutan ana bileşendir.
//* Tab: Tek bir sekme oluşturur.
// → label: Sekmenin üzerinde görünecek metni belirler.
// → value: Aktif sekmenin hangi değerle temsil edildiğini belirler.
// → onChange: Kullanıcı başka bir sekmeye geçtiğinde çalışır.
// → Örnek: <Tab label="Profil" />

//* CustomTabPanel: Aktif sekmeye ait içeriği göstermek için oluşturulmuş özel bileşendir.
// → children: Sekmenin içerisinde gösterilecek içeriği temsil eder.
// → value: Şu anda aktif olan sekmenin değeridir.
// → index: Panelin hangi sekmeye ait olduğunu belirtir.
// → hidden={value !== index}: Panel aktif değilse gizler.
// → {value === index && <Box sx={{ p: 3 }}>{children}</Box>}: Yalnızca aktif panelin içeriğini oluşturur.
// → sx={{ p: 3 }}: İçeriğin etrafına boşluk ekler.

// → a11yProps(index): Sekme ve panel arasında erişilebilirlik bağlantısı kuran özellikleri döndürür.
// → id: Sekmenin benzersiz kimliğini belirler.
// → aria-controls: Sekmenin kontrol ettiği panelin id değerini belirtir.
// → aria-labelledby: Panelin hangi sekme tarafından etiketlendiğini belirtir.
// → role="tabpanel": HTML elemanının bir sekme paneli olduğunu belirtir.
// → Bu özellikler ekran okuyucuların sekmelerle içerikleri ilişkilendirmesine yardımcı olur.

// → PropTypes: Bileşene gönderilen prop değerlerinin türlerini geliştirme sırasında kontrol etmeye yardımcı olur.
// → PropTypes.node: Metin, sayı veya React bileşeni gibi render edilebilir içerikleri kabul eder.
// → PropTypes.number: Sayı türündeki değerleri belirtir.
// → isRequired: İlgili prop'un zorunlu olduğunu belirtir.
// → ...other: Diğer prop'ları nesne üzerinden alır ve ilgili HTML elemanına aktarır.

//? Ek Kullanışlı Özellikler
// → orientation="vertical": Sekmeleri dikey olarak düzenler.
// → variant="scrollable": Sekmelerin yatay kaydırılabilmesini sağlar.
// → centered: Sekmeleri ortalar.
// → textColor="secondary": Sekme metinlerinde ikincil tema rengini kullanır.
// → indicatorColor="secondary": Aktif sekme göstergesinin rengini belirler.
// → disabled: Bir Tab bileşenini devre dışı bırakır.
