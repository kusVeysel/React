import Grid from '@mui/material/Grid';

function MUIgrid() {
  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 8, lg: 9 }}>
          ITEM
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          ITEM
        </Grid>
      </Grid>

      <hr />
    </div>
  );
}

export default MUIgrid;

//? MUI Grid (Izgara Sistemi)

//* Grid: Sayfayı satır ve sütunlara bölerek responsive (duyarlı) yerleşim oluşturur.
// → container: Grid öğelerini kapsayan ana Grid yapısını belirtir.
// → size: Grid öğesinin farklı ekran boyutlarında kaç sütun kaplayacağını belirler.


//? Responsive Size (Ekran Boyutuna Göre Genişlik)
//* Grid sistemi 12 sütun üzerinden çalışır.
// → xs: En küçük ekran boyutları için sütun genişliğini belirler.
// → sm: Küçük ekranlar için sütun genişliğini belirler.
// → md: Orta ekranlar için sütun genişliğini belirler.
// → lg: Büyük ekranlar için sütun genişliğini belirler.
// → xl: Çok büyük ekranlar için sütun genişliğini belirler.
// → size={{ xs: 12, sm: 6, md: 8, lg: 9 }}: XS'de tam genişlik, SM'de yarım, MD'de 8/12, LG'de 9/12 genişlik kullanır.
// → size={{ xs: 12, sm: 6, md: 4, lg: 3 }}: İkinci öğe XS'de tam genişlik, SM'de yarım, MD'de 4/12, LG'de 3/12 genişlik kullanır.


//? Ek Kullanışlı Özellikler
//* spacing: Grid öğeleri arasındaki boşluğu belirler. Örnek: <Grid container spacing={2}>
//* rowSpacing: Satırlar arasındaki boşluğu belirler.
//* columnSpacing: Sütunlar arasındaki boşluğu belirler.
//* offset: Grid öğesini belirli sütunlar kadar kaydırır. Örnek: size={6} offset={3}
//* sx: Özel CSS benzeri stiller uygular.
//* direction: Öğelerin sıralanma yönünü belirler.
//* Grid öğeleri içinde başka Grid container yapıları kullanılarak iç içe düzenler oluşturulabilir.
