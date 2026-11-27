export const metadata = { title: 'Lysiun — Become who you intend to be.', description: 'The Growth Journal. Get 1% better every day.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{ margin: 0, fontFamily: 'Georgia, serif', background: '#F7F1E6', color: '#1a1a1a' }}>{children}</body></html>
}
