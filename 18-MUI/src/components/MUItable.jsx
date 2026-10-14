import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function MUItable() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MUItable

//? MUI Table (Tablo)

//* Table: Verileri satır ve sütunlar hâlinde düzenli şekilde göstermek için kullanılır.
//* Genellikle ürün listeleri, kullanıcı kayıtları, siparişler ve istatistikler için kullanılır.


//? Table Temel Bileşenleri
//* TableContainer: Tabloyu saran kapsayıcıdır; kaydırma ve dış görünüm ayarlarında kullanılır.
//* Table: Tablo yapısının ana bileşenidir.
//* TableHead: Tablonun başlık satırlarını içerir.
//* TableBody: Tablonun veri satırlarını içerir.
//* TableRow: Bir tablo satırı oluşturur.
//* TableCell: Satır içerisinde bir hücre oluşturur.
// → Paper: Tabloya arka plan ve yüzey görünümü kazandırmak için kullanılabilir.


//? Tablo Başlıkları ve Hücreler
//* TableCell: Hem başlık hem de veri hücresi oluşturmak için kullanılır.
// → align="left": Metni sola hizalar (varsayılan).
// → align="center": Metni ortalar.
// → align="right": Metni sağa hizalar.
// → component="th": Hücrenin HTML'de başlık hücresi olarak kullanılmasını sağlar.
// → scope="row": Hücrenin ilgili satırın başlığı olduğunu belirtir; erişilebilirliği artırır.


//? Ek Kullanışlı Özellikler
// → size="small": Daha sıkı ve küçük bir tablo görünümü oluşturur.
// → padding="checkbox": Hücreleri onay kutusu kullanımına uygun biçimde düzenler.
// → stickyHeader: Tablo kaydırılırken başlık satırını görünür tutar.
// → TablePagination: Büyük veri listelerinde sayfalama yapmak için kullanılır.
// → TableSortLabel: Sütun başlıklarına sıralama davranışı eklemek için kullanılabilir.
// → TableContainer, tablo genişliği kapsayıcıyı aştığında yatay kaydırma sağlayabilir.
