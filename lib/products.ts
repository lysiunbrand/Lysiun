export const PRODUCTS = {
  journalPhysical: { id: 'journal-physical', name: 'The Growth Journal — Physical', price: 2499, priceLabel: '$24.99', type: 'physical', description: '140-page guided journal, 6x9 paperback. 10 weekly lessons, 70 daily planning pages, weekly reviews, monthly resets, gratitude, habit trackers.' },
  journalDigital: { id: 'journal-digital', name: 'The Growth Journal — Digital PDF', price: 1500, priceLabel: '$15.00', type: 'digital', description: 'Instant download, 140-page printable PDF.' },
  posterSet: { id: 'poster-set-1', name: 'Lysiun Poster Set 1', price: 1200, priceLabel: '$12.00', type: 'digital', description: '5 black-and-white warrior quote prints, digital download.' },
} as const
export type ProductId = keyof typeof PRODUCTS
