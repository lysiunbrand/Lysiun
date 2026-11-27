'use client'
import { useState } from 'react'
import { PRODUCTS } from '@/lib/products'
export default function Shop() {
  const [qty, setQty] = useState(1)
  async function buy(productId: string) {
    const r = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId, quantity: qty }) })
    const j = await r.json(); if (j.url) window.location.href = j.url
  }
  return <main style={{ maxWidth: 900, margin: '0 auto', padding: 40 }}>
    <h1>Shop</h1>
    <h2>{PRODUCTS.journalPhysical.name} — {PRODUCTS.journalPhysical.priceLabel}</h2>
    <label>Quantity: <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} style={{ width: 60 }} /></label>
    <br /><button onClick={() => buy('journalPhysical')} style={{ marginTop: 16, background: '#1a1a1a', color: '#fff', padding: '14px 28px', border: 0, cursor: 'pointer' }}>Buy physical — ${(24.99 * qty).toFixed(2)}</button>
    <h2 style={{ marginTop: 40 }}>{PRODUCTS.journalDigital.name} — {PRODUCTS.journalDigital.priceLabel}</h2>
    <button onClick={() => buy('journalDigital')}>Buy digital — $15.00</button>
    <h2 style={{ marginTop: 40 }}>{PRODUCTS.posterSet.name} — {PRODUCTS.posterSet.priceLabel}</h2>
    <button onClick={() => buy('posterSet')}>Buy poster set — $12.00</button>
  </main>
}
