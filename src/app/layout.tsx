import { Inter } from 'next/font/google'
import { neo } from '@/@core/fonts'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={neo.className}>{children}</body>
    </html>
  )
}
