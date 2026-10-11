import { useState } from 'react';
import './App.css';
import useCopyToClipboard from './hooks/useCopyToClipboard';
import useCounter from './hooks/useCounter';
import useToogle from './hooks/useToogle';

function App() {
  const { count, increase, decrease } = useCounter();
  const { open, change } = useToogle();
  const [text, setText] = useState('Pes etme, çalışmaya devam et!');
  const [copied, copy] = useCopyToClipboard();

  return (
    <main className="app-shell">
      <header className="page-heading">
        <p className="eyebrow">React pratikleri</p>
        <h1>Custom Hooks</h1>
        <p>Tekrar kullanılabilir hook örnekleri</p>
      </header>

      <section className="demo-card" aria-labelledby="counter-title">
        <div className="card-copy">
          <span className="card-number">01</span>
          <h2 id="counter-title">Sayaç</h2>
          <p>Değeri artır veya azalt.</p>
        </div>
        <div className="counter-controls">
          <button className="icon-button" onClick={decrease} aria-label="Azalt">−</button>
          <output className="count-value">{count}</output>
          <button className="icon-button" onClick={increase} aria-label="Arttır">+</button>
        </div>
      </section>

      <section className="demo-card toggle-card" aria-labelledby="toggle-title">
        <div className="card-copy">
          <span className="card-number">02</span>
          <h2 id="toggle-title">Görünürlük</h2>
          <p>Bir alanı göster veya gizle.</p>
        </div>
        <button className="secondary-button" onClick={change} aria-expanded={open}>
          {open ? 'Gizle' : 'Göster'}
        </button>
        {open && <div className="kutu" role="status">Merhaba! Bu alan görünür.</div>}
      </section>

      <section className="demo-card copy-card" aria-labelledby="copy-title">
        <div className="card-copy">
          <span className="card-number">03</span>
          <h2 id="copy-title">Panoya kopyala</h2>
          <p>Metni yaz, ardından kopyala butonuna bas.</p>
        </div>
        <form className="copy-form" onSubmit={(event) => { event.preventDefault(); copy(text); }}>
          <label htmlFor="copy-input">Kopyalanacak metin</label>
          <div className="input-row">
            <input
              id="copy-input"
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Kopyalamak istediğin metni yaz"
            />
            <button className="primary-button" type="submit">Kopyala</button>
          </div>
          <p className={`copy-status${copied ? ' is-visible' : ''}`} role="status" aria-live="polite">
            {copied ? 'Metin panoya kopyalandı.' : ' '}
          </p>
        </form>
      </section>
    </main>
  );
}

export default App;
