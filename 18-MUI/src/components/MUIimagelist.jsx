import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function MUIimagelist() {

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
            cols: 2,
        },
    ];

    return (
        <>
            <ImageList sx={{ width: 500, height: 450 }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <hr />
        </>
    );


}

export default MUIimagelist

//? MUI ImageList (Resim Listesi)

//* ImageList: Görselleri ızgara veya farklı düzenlerde listelemeyi sağlar.
//* ImageListItem: Listedeki her bir görsel öğesini oluşturur.
// → sx={{ width: 500, height: 450 }}: Listenin genişliğini ve yüksekliğini belirler.

//* ListSubheader: Görsel listesinin belirli bir bölümüne başlık ekler.
// → component="div": Başlığın hangi HTML elementiyle oluşturulacağını belirler.
//→ cols: Öğenin kaç sütun kaplayacağını belirler.

//* ImageListItemBar: Görselin üzerinde veya altında başlık ve ek bilgiler gösterir.
// → title: Görselin başlığını belirler.
// → subtitle: Başlığın altında gösterilecek ek bilgiyi belirler.
// → actionIcon: Bilgi çubuğuna buton veya ikon ekler.

// → src: Görselin kaynak adresini belirler.
// → srcSet: Farklı ekran çözünürlükleri için alternatif görsel kaynakları sunar.
// → alt: Görsel yüklenemediğinde veya ekran okuyucularında kullanılan açıklamadır.
// → loading="lazy": Görselin ekrana yaklaşınca yüklenmesini sağlar.
// → fit=crop: Görselin belirtilen alana kırpılarak uyum sağlamasını sağlar.
// → auto=format: Görsel formatının uygun şekilde sunulmasını sağlar.
// → dpr=2: Daha yüksek piksel yoğunluğu için görsel kaynağı belirtir.

//* IconButton: İkon içeren tıklanabilir buton oluşturur.
//* InfoIcon: Bilgi simgesidir; @mui/icons-material paketinden import edilir.
// → aria-label: Ekran okuyucularına butonun amacını açıklar.
// → sx: İkonun rengini ve diğer stillerini belirler.

//? Ek Kullanışlı Özellikler
// → variant="standard": Standart ızgara düzenini kullanır.
// → variant="quilted": Farklı boyutlardaki görsellerle düzen oluşturur.
// → variant="woven": Görselleri iç içe geçmiş düzenle gösterir.
// → variant="masonry": Görselleri duvar görünümünde, farklı yüksekliklerde sıralar.
// → cols: Izgaradaki sütun sayısını belirler.
// → rowHeight: Görsellerin satır yüksekliğini belirler; "auto" otomatik yükseklik sağlar.
// → gap: Görseller arasındaki boşluğu belirler.
// → rows ve cols: Desteklenen düzenlerde öğenin kaplayacağı satır ve sütun sayısını belirtir.
