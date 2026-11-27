import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { createLuluPrintJob } from '@/lib/lulu'
export const dynamic = 'force-dynamic'
export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const sig = req.headers.get('stripe-signature')!
  const body = await req.text()
  let event: Stripe.Event
  try { event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!) } catch { return NextResponse.json({ error: 'bad signature' }, { status: 400 }) }
  if (event.type === 'checkout.session.completed') {
    const s = event.data.object as Stripe.Checkout.Session
    const productId = s.metadata?.productId || 'journal-physical'
    const supabaseAdmin = getSupabaseAdmin()
    await supabaseAdmin.from('orders').insert({ stripe_session_id: s.id, email: s.customer_details?.email, product: productId, amount_cents: s.amount_total, quantity: 1, shipping_name: s.shipping_details?.name, shipping_address: s.shipping_details?.address })
    if (s.metadata?.productType === 'physical' && s.shipping_details) {
      const job = await createLuluPrintJob({ name: s.shipping_details.name || '', email: s.customer_details?.email || '', address: s.shipping_details.address, quantity: 1 })
      await supabaseAdmin.from('orders').update({ lulu_order_id: job.id, status: 'printing' }).eq('stripe_session_id', s.id)
    }
  }
  return NextResponse.json({ received: true })
}
