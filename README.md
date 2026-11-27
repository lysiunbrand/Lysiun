# Lysiun — lysiun.com
Next.js storefront for The Growth Journal. Host on Vercel (free Hobby to start).
Stack from the screenshot: Vercel (host) + Next.js (build) + Supabase (database/backend) + Stripe (payments) + Lulu API (printing/fulfilment) + Printify API (alternative fulfilment).

## Products
- The Growth Journal — physical, 140 pages, 6x9, $24.99 — printed by Lulu, shipped to the buyer
- The Growth Journal — digital PDF, $15
- Poster Set 1 — digital, $12

## Deploy (Vercel)
1. Push this folder to GitHub, import it in Vercel, set the env vars from `.env.example`.
2. In GoDaddy, point lysiun.com to Vercel (A record / CNAME from Vercel's domain settings).
3. In Stripe, create the $24.99 / $15 / $12 prices, add webhook endpoint `/api/webhook`.
4. In Lulu, create a project with the KDP interior + cover PDFs (in `~/workspace/lysiunn-etsy/journal/growth/`), copy its print-ready book ID into `LULU_BOOK_ID` in Vercel.
5. Supabase: create a project, run `supabase/orders.sql` to make the `orders` table.

## Flow
Buy on lysiun.com -> Stripe Checkout -> Stripe webhook `/api/webhook` -> order saved in Supabase -> Lulu API prints + ships the physical journal (Printify is the fallback if Lulu is down).
