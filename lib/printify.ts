// Printify API — alternative fulfilment (posters / merch, not books).
// If Lulu fails, fall back to Printify for non-book items.
export async function createPrintifyOrder(shopId: string, body: any) {
  const res = await fetch(`https://api.printify.com/v1/shops/${shopId}/orders.json`, {
    method: 'POST', headers: { Authorization: `Bearer ${process.env.PRINTIFY_API_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return res.json()
}
