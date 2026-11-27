create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text unique,
  email text not null,
  product text not null,
  amount_cents int not null,
  quantity int default 1,
  shipping_name text, shipping_address jsonb,
  lulu_order_id text, status text default 'paid',
  created_at timestamptz default now()
);
