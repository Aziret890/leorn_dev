import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../assets/styles/index.scss'
const sans = Montserrat({ subsets: ['latin'] })
import Header from '@/components/screens/Header/Header'
import Footer from '@/components/screens/Footer/Footer'

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
