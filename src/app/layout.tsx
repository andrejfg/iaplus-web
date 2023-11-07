import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Providers } from '@/components/providers'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--body-font' })
const intro = localFont({
  src: '../fonts/Intro.otf',
  variable: '--intro-font',
})

export const metadata: Metadata = {
  title: 'IAPLUS',
  description: 'Inovação em inteligência artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} ${intro.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
