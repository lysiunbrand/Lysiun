import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Lazy: creating the client at import time crashes the Vercel build
// when the env vars aren't set yet. Create it only when a request needs it.
let _supabase: SupabaseClient | null = null
export function getSupabase(): SupabaseClient {
  if (!_supabase) _supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  return _supabase
}
let _admin: SupabaseClient | null = null
export function getSupabaseAdmin(): SupabaseClient {
  if (!_admin) _admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  return _admin
}
