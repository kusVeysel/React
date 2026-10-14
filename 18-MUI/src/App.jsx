import './App.css'
import MUIaccordion from './components/MUIaccordion'
import MUIalert from './components/MUIalert'
import MUIappbar from './components/MUIappbar'
import MUIautocomplete from './components/MUIautocomplete'
import MUIavatar from './components/MUIavatar'
import MUIbadge from './components/MUIbadge'
import MUIbox from './components/MUIbox'
import MUIbutton from './components/MUIbutton'
import MUIcard from './components/MUIcard'
import MUIcheckbox from './components/MUIcheckbox'
import MUIdialog from './components/MUIdialog'
import MUIdrawer from './components/MUIdrawer'
import MUIgrid from './components/MUIgrid'
import MUIimagelist from './components/MUIimagelist'
import MUIprogress from './components/MUIprogress'
import MUIselect from './components/MUIselect'
import MUIskeleton from './components/MUIskeleton'
import MUIsnackbar from './components/MUIsnackbar'
import MUIstack from './components/MUIstack'
import MUItable from './components/MUItable'
import MUItabs from './components/MUItabs'
import MUItextField from './components/MUItextField'
import MUItooltip from './components/MUItooltip'

const examples = [
  ['Butonlar', 'Varyant, renk, boyut ve ikon kullanımı.', MUIbutton],
  ['Metin alanları', 'Girdi varyantları, durumları ve ekleri.', MUItextField],
  ['Seçim alanları', 'Select ve TextField ile kontrollü seçenekler.', MUIselect],
  ['Onay kutuları', 'Birden çok seçeneği durumla yönetme.', MUIcheckbox],
  ['Otomatik tamamlama', 'Film listesinden arama ve seçim.', MUIautocomplete],
  ['Box', 'sx ile esnek kapsayıcı ve stil tanımlama.', MUIbox],
  ['Stack', 'Aralıklı, yönü uyarlanan öğe düzeni.', MUIstack],
  ['Grid', 'Ekran boyutuna göre sütun yerleşimi.', MUIgrid],
  ['Kart', 'Görsel, metin ve eylemleri bir araya getirme.', MUIcard],
  ['Accordion', 'Açılır panelleri kontrollü yönetme.', MUIaccordion],
  ['App Bar', 'Üst gezinme çubuğu ve açılır menü.', MUIappbar],
  ['Görsel listesi', 'Uyarlanan görsel ızgarası ve başlıkları.', MUIimagelist],
  ['Drawer', 'Kenar panelini açıp kapatma.', MUIdrawer],
  ['Badge', 'İkon üzerinde sayısal bildirim gösterme.', MUIbadge],
  ['Avatar', 'Görsel veya baş harfle kullanıcı temsili.', MUIavatar],
  ['Tooltip', 'İkon üzerinde kısa ipucu gösterme.', MUItooltip],
  ['Alert', 'Başarı, bilgi, uyarı ve hata mesajları.', MUIalert],
  ['Dialog', 'Onay isteyen modal iletişim penceresi.', MUIdialog],
  ['Snackbar', 'Geçici işlem bildirimleri.', MUIsnackbar],
  ['Progress', 'Belirsiz ve belirli yükleme göstergeleri.', MUIprogress],
  ['Skeleton', 'İçerik yüklenirken yer tutucu gösterme.', MUIskeleton],
  ['Table', 'Satır ve sütunlarla veri sunma.', MUItable],
  ['Tabs', 'Sekmelerle ilişkili içeriği değiştirme.', MUItabs],
]

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">React • Material UI</span>
        <h1>Material UI bileşenleri</h1>
        <p>Temel arayüz bileşenlerini çalışan, kısa örneklerle keşfedin.</p>
      </header>
      <div className="component-grid">
        {examples.map(([title, description, Component], index) => (
          <section className="component-card" key={title} aria-labelledby={`example-${index}`}>
            <div className="component-heading">
              <span className="component-index">{String(index + 1).padStart(2, '0')}</span>
              <div><h2 id={`example-${index}`}>{title}</h2><p>{description}</p></div>
            </div>
            <div className="component-demo"><Component /></div>
          </section>
        ))}
      </div>
      <footer className="page-footer">MUI örnekleri · sx ile stillendirilmiştir</footer>
    </main>
  )
}

export default App

// https://mui.com/material-ui/getting-started
// npm install @mui/material @emotion/react @emotion/styled
// icon için → npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

//* MateryalUI: Bootstrap gibi hazır yapıları koda entegre eder