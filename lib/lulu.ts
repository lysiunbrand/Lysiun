// Lulu API — printing + fulfilment for the physical journal.
// Docs: developers.lulu.com — OAuth client-credentials, then POST /print-jobs/
export async function getLuluToken() {
  const res = await fetch('https://api.lulu.com/auth/realms/glasstree/protocol/openid-connect/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'client_credentials', client_id: process.env.LULU_API_KEY!, client_secret: process.env.LULU_API_SECRET! }),
  })
  const j = await res.json(); return j.access_token as string
}
export async function createLuluPrintJob(order: { name: string; email: string; address: any; quantity: number }) {
  const token = await getLuluToken()
  const res = await fetch('https://api.lulu.com/print-jobs/', {
    method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contact_email: order.email,
      external_id: `lysiun-${Date.now()}`,
      line_items: [{ external_id: 'growth-journal', printable_normalization: { cover: { source_url: process.env.LULU_COVER_URL }, interior: { source_url: process.env.LULU_INTERIOR_URL }, pod_package_id: process.env.LULU_BOOK_ID }, quantity: order.quantity, title: 'The Growth Journal' }],
      shipping_address: order.address, shipping_level: 'MAIL',
    }),
  })
  return res.json()
}
