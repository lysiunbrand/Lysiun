export const metadata = { title: 'Lysiun — Become who you intend to be.', description: 'The Growth Journal. Get 1% better every day.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{ margin: 0, fontFamily: 'Georgia, serif', background: '#0d0d0d', color: '#f5f5f0' }}>{children}</body></html>
}
