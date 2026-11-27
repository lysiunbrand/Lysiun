import { PRODUCTS } from '@/lib/products'
export default function Home() {
  return <main style={{ background: '#0d0d0d', color: '#f5f5f0' }}>
    <header style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ letterSpacing: 10, fontSize: 22 }}>LYSIUN</span>
      <a href="/shop" style={{ color: '#f5f5f0', textDecoration: 'none', border: '1px solid #f5f5f0', padding: '10px 20px' }}>Shop</a>
    </header>
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px', display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ flex: '1 1 380px' }}>
        <p style={{ letterSpacing: 4, fontSize: 13, color: '#c9a86a' }}>THE GROWTH JOURNAL</p>
        <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: '16px 0' }}>Become who you<br />intend to be.</h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#d8d8d2' }}>More than a journal — it&apos;s a journey toward a better you. Get 1% better every day. Don&apos;t leave success up to chance.</p>
        <p style={{ fontSize: 17, color: '#d8d8d2' }}>140 pages · 6×9 paperback · 10 weekly lessons · 70 daily planning pages</p>
        <a href="/shop" style={{ display: 'inline-block', background: '#f5f5f0', color: '#0d0d0d', padding: '16px 32px', textDecoration: 'none', fontWeight: 'bold', marginTop: 16 }}>Get the journal — $24.99</a>
        <p style={{ marginTop: 16, fontSize: 14, color: '#aaa' }}>Printed on demand by Lulu and shipped to you. No stock, no warehouse.</p>
      </div>
      <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
        <img src="/cover.jpg" alt="The Growth Journal — front cover" style={{ width: '100%', maxWidth: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} />
      </div>
    </section>
    <section style={{ background: '#F7F1E6', color: '#1a1a1a', padding: '64px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 32, textAlign: 'center', letterSpacing: 2 }}>WHAT&apos;S INSIDE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginTop: 32, textAlign: 'center' }}>
          <div><b>Daily Planning</b><p>Make today count.</p></div>
          <div><b>Goal Setting</b><p>Dream. Plan. Achieve.</p></div>
          <div><b>Self-Reflection</b><p>Pause. Reflect. Grow.</p></div>
          <div><b>Gratitude</b><p>Gratitude changes everything.</p></div>
          <div><b>Weekly Reviews</b><p>Reflect. Reset. Improve.</p></div>
          <div><b>Habit Tracker</b><p>Progress over perfection.</p></div>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', marginTop: 48 }}>
          <img src="/inside.jpg" alt="Inside the journal — daily planning page" style={{ width: '100%', maxWidth: 340 }} />
          <img src="/back.jpg" alt="The Growth Journal — back cover" style={{ width: '100%', maxWidth: 340 }} />
        </div>
        <p style={{ textAlign: 'center', marginTop: 32, fontStyle: 'italic', fontSize: 19 }}>“More than a journal — it&apos;s a journey toward a better you.”</p>
      </div>
    </section>
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
      <h2 style={{ fontSize: 32, textAlign: 'center', letterSpacing: 2 }}>DIGITAL</h2>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', marginTop: 32 }}>
        <div style={{ border: '1px solid #444', padding: 28, width: 300 }}>
          <b>{PRODUCTS.journalDigital.name}</b><p>Instant download, 140-page printable PDF.</p><p style={{ fontSize: 22 }}>$15.00</p><a href="/shop" style={{ color: '#f5f5f0' }}>Get digital →</a>
        </div>
        <div style={{ border: '1px solid #444', padding: 28, width: 300 }}>
          <b>{PRODUCTS.posterSet.name}</b><p>5 black-and-white warrior quote prints, digital download.</p><p style={{ fontSize: 22 }}>$12.00</p><a href="/shop" style={{ color: '#f5f5f0' }}>Get posters →</a>
        </div>
      </div>
    </section>
    <footer style={{ textAlign: 'center', padding: '40px 24px', borderTop: '1px solid #333', color: '#aaa' }}>
      <p style={{ letterSpacing: 6 }}>LYSIUN · REFLECT · PLAN · GROW</p>
      <p>Follow <a href="https://instagram.com/lysiunn" style={{ color: '#f5f5f0' }}>@lysiunn</a> · <a href="https://instagram.com/ascenntly" style={{ color: '#f5f5f0' }}>@ascenntly</a></p>
    </footer>
  </main>
}
