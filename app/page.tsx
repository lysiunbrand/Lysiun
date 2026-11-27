import { PRODUCTS } from '@/lib/products'
export default function Home() {
  return <main style={{ maxWidth: 900, margin: '0 auto', padding: 40 }}>
    <h1 style={{ fontSize: 48, letterSpacing: 8 }}>LYSIUN</h1>
    <p style={{ fontStyle: 'italic', fontSize: 20 }}>Become who you intend to be.</p>
    <h2>The Growth Journal — {PRODUCTS.journalPhysical.priceLabel}</h2>
    <p>{PRODUCTS.journalPhysical.description}</p>
    <p>140 pages · 6×9 paperback · 10 weekly lessons · 70 daily planning pages · weekly reviews · monthly resets · gratitude · habit trackers</p>
    <p>Printed on demand by Lulu and shipped to you. No stock, no waiting on a warehouse.</p>
    <a href="/shop" style={{ display: 'inline-block', background: '#1a1a1a', color: '#fff', padding: '14px 28px', textDecoration: 'none' }}>Get the journal — $24.99</a>
    <h3 style={{ marginTop: 48 }}>Digital</h3>
    <p>{PRODUCTS.journalDigital.name} — {PRODUCTS.journalDigital.priceLabel} · {PRODUCTS.posterSet.name} — {PRODUCTS.posterSet.priceLabel}</p>
    <p>Follow <a href="https://instagram.com/lysiunn">@lysiunn</a> · <a href="https://instagram.com/ascenntly">@ascenntly</a></p>
  </main>
}
