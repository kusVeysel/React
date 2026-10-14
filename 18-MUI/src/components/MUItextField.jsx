import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FaceIcon from '@mui/icons-material/Face';

function MUItextField() {
    return (
        <div>
            <div>
                <TextField label="variant-filled" variant='filled' />
                <TextField label="variant-outlined" variant='outlined' />
                <TextField label="variant-standard" variant='standard' />
                <hr />
            </div>
            <div>
                <TextField label="helperText" helperText="Şifrenizi kimseye söylemeeyiniz" />
                <hr />
            </div>
            <div>
                <TextField label="disabled" disabled />
                <TextField label="readonly" value="veysel" slotProps={{ readOnly: true }} />
                <hr />
            </div>
            <div>
                <TextField
                    variant="outlined"
                    label="İsminizi Giriniz"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaceIcon/>
                                </InputAdornment>
                            ),
                        },
                    }}
                    />
                <TextField
                    variant="outlined"
                    label="İsminizi Giriniz"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <FaceIcon/>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <hr />
            </div>
        </div>
    )
}

export default MUItextField

//? TextField (Metin Giriş Alanı)
// → variant: 'filled': Dolgulu arka plana sahip giriş alanı oluşturur.
// → variant: 'outlined': Kenarlıklı giriş alanı oluşturur (varsayılan).
// → variant: 'standard': Alt çizgili giriş alanı oluşturur.

// → label: Giriş alanının başlığını belirler. Örnek: label="İsminizi Giriniz"
// → helperText: Giriş alanının altında açıklama gösterir. Örnek: helperText="Şifrenizi kimseyle paylaşmayınız."

// → disabled: Giriş alanını devre dışı bırakır; kullanıcı değiştiremez.
// → slotProps: readOnly: Alanın değerinin değiştirilmesini engeller, ancak alan devre dışı olmaz.
// → value: Giriş alanının değerini belirler. Tek başına kullanıldığında kontrollü alan oluşturur.

// → startAdornment: Giriş alanının başına ikon veya metin ekler.
// → endAdornment: Giriş alanının sonuna ikon veya metin ekler.
//* InputAdornment position → 'start' / 'end': Eklentinin hangi tarafta bulunacağını belirler.
// → İkon kullanmak için @mui/icons-material paketinden ilgili ikon import edilir.

//? Ek Kullanışlı Özellikler
// → type: Giriş türünü belirler. Örnek: type="password", type="email", type="number"
// → placeholder: Alan boşken örnek veya ipucu metni gösterir.
// → size → 'small' / 'medium': Giriş alanının boyutunu belirler.
// → fullWidth: Giriş alanının bulunduğu alanın genişliğini kaplamasını sağlar.
// → required: Alanın doldurulmasını zorunlu kılar.
// → error: Hatalı giriş görünümü verir.
// → rows: Multiline alanının başlangıçtaki satır sayısını belirler.
// → multiline: Birden fazla satır içeren metin alanı oluşturur.
// → sx: Özel CSS benzeri stiller uygular. Örnek: sx={{ m: 1, width: 300 }}
// → onChange: Kullanıcı giriş yaptığında değeri takip etmek için kullanılır.
