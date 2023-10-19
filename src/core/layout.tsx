import '../../public/css/reset.css'
import '../../public/css/style.css'
export const metadata = {
  title: 'W.web',
  description: 'Notícias 24hrs aqui!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
