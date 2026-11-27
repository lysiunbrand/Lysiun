'use client'
import { useState } from 'react'
import { PRODUCTS } from '@/lib/products'
export default function Shop() {
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  async function buy(productId: string) {
    setError('')
    const r = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId, quantity: qty }) })
    const j = await r.json(); if (j.url) window.location.href = j.url; else setError('Checkout is not connected yet — Stripe is still being set up.')
  }
  return <main style={{ background: '#0d0d0d', color: '#f5f5f0', minHeight: '100vh' }}>
    <header style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="/" style={{ letterSpacing: 10, fontSize: 22, color: '#f5f5f0', textDecoration: 'none' }}>LYSIUN</a>
      <a href="/" style={{ color: '#f5f5f0', textDecoration: 'none' }}>← Back</a>
    </header>
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 24px 80px', display: 'flex', gap: 48, flexWrap: 'wrap' }}>
      <img src="/cover.jpg" alt="The Growth Journal" style={{ width: '100%', maxWidth: 340 }} />
      <div style={{ flex: '1 1 360px' }}>
        <h1 style={{ fontSize: 36 }}>The Growth Journal — $24.99</h1>
        <p style={{ lineHeight: 1.6, color: '#d8d8d2' }}>{PRODUCTS.journalPhysical.description}</p>
        <p>140 pages · 6×9 paperback · 10 weekly lessons · 70 daily planning pages · weekly reviews · monthly resets · gratitude · habit trackers</p>
        <label>Quantity: <input type="number" min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} style={{ width: 60, padding: 8, background: '#222', color: '#fff', border: '1px solid #555' }} /></label>
        <br /><button onClick={() => buy('journalPhysical')} style={{ marginTop: 16, background: '#f5f5f0', color: '#0d0d0d', padding: '16px 32px', border: 0, cursor: 'pointer', fontWeight: 'bold' }}>Buy physical — ${(24.99 * qty).toFixed(2)}</button>
        {error && <p style={{ color: '#e8a0a0' }}>{error}</p>}
        <h2 style={{ marginTop: 48 }}>Digital — $15.00</h2>
        <p>{PRODUCTS.journalDigital.description}</p>
        <button onClick={() => buy('journalDigital')} style={{ background: 'transparent', color: '#f5f5f0', border: '1px solid #f5f5f0', padding: '14px 28px', cursor: 'pointer' }}>Buy digital — $15.00</button>
        <h2 style={{ marginTop: 40 }}>Poster Set 1 — $12.00</h2>
        <p>{PRODUCTS.posterSet.description}</p>
        <button onClick={() => buy('posterSet')} style={{ background: 'transparent', color: '#f5f5f0', border: '1px solid #f5f5f0', padding: '14px 28px', cursor: 'pointer' }}>Buy poster set — $12.00</button>
      </div>
    </section>
  </main>
}
