import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { PRODUCTS, type ProductId } from '@/lib/products'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
export async function POST(req: Request) {
  const { productId, quantity = 1 } = await req.json() as { productId: ProductId; quantity?: number }
  const p = PRODUCTS[productId]; if (!p) return NextResponse.json({ error: 'unknown product' }, { status: 400 })
  const session = await stripe.checkout.sessions.create({
    mode: 'payment', success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop?success=1`, cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop?canceled=1`,
    line_items: [{ quantity, price_data: { currency: 'usd', product_data: { name: p.name, description: p.description }, unit_amount: p.price } }],
    shipping_address_collection: p.type === 'physical' ? { allowed_countries: ['US'] } : undefined,
    metadata: { productId, productType: p.type },
  })
  return NextResponse.json({ url: session.url })
}
